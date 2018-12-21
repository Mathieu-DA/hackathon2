<?php

namespace App\Controller;

use App\Entity\Badge;
use App\Entity\Realisation;
use App\Entity\User;
use App\Repository\BadgeRepository;
use App\Repository\ChallengeRepository;
use App\Repository\RealisationRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Validator\Constraints\DateTime;


class UserController extends AbstractController
{
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }


    //page1 - Challenges du mois d'un user
    /**
     * @Route("/challenges/{id}", name="challenges")
     */
    public function userMonthPoints($id, UserRepository $userRepository, RealisationRepository $realisationRepository, ChallengeRepository $challengeRepository)
    {
        // envoyer toutes les tâches
        $tasks = $challengeRepository->findAll();
        foreach ($tasks as $task)
        {
            $challenge[] = $task->getDescription();
        }
       // dd($tasks);
        //Compte tous les points acquis par un user sur le mois en cours
//        $now = new \DateTime();
//        $date = $now->format('Y-m');

        $points = $realisationRepository->findByExampleField($id);
        $res = count($points);

        return $this->json(['res' => $res, 'challenges' => $challenge]);
    }

    //page 2 - Team
    /**
     * @Route("/team", name="team")
     */

    public function allUsersAllPoints(RealisationRepository $realisationRepository, UserRepository $userRepository)

    {
        //Compte tous les points acquis par les users depuis le début du jeu
        $realisations = $realisationRepository->findAll();
        $realisations = count($realisations);

        //Compte tous les points acquis par les users sur le mois en cours
        $totalpoints = $realisationRepository->findByAllUsersPointsMonth();
        $MonthRes = count($totalpoints);

        //Récap le nbre de user par badge
        $users = $userRepository->findAll();
        $userNbRealisation = [];
        foreach ($users as $user) {
            $userNbRealisation[] = count($user->getRealisations());
        }
        $userNbRealisation = array_count_values($userNbRealisation);
        //dd($userNbRealisation);
        $usersByBadge['jeune pousse'] = 0;
        $usersByBadge['bonzai'] = 0;
        $usersByBadge['belle plante'] = 0;
        $usersByBadge['bambou'] = 0;
        $usersByBadge['baobab'] = 0;
        $usersByBadge['king'] = 0;
        foreach ($userNbRealisation as $key => $value) {
            if ($key > 0 && $key <= 5){
                $usersByBadge['jeune pousse'] += $value;
            } elseif ($key > 5 && $key <= 10){
                $usersByBadge['bonzai'] += $value;
            } elseif ($key > 10 && $key <= 15){
                $usersByBadge['belle plante'] += $value;
            } elseif ($key > 15 && $key <= 20){
                $usersByBadge['bambou'] += $value;
            } elseif ($key > 20 && $key <= 25){
                $usersByBadge['baobab'] += $value;
            } else {
                $usersByBadge['king'] += $value;
            }
        }

        dd($realisations);

        $headers = ["Access-Control-Allow-Origin: *"];
        //header("Access-Control-Allow-Origin: *");

        return $this->json([
            'realisations' => $realisations,
            'MonthRes' => $MonthRes,
            'usersByBadge' => $usersByBadge
        ], 200, $headers);
    }

    //page 3 - Réalisations
    /**
     * @Route("/realisations/{user}", name="realisations")
     */

    public function userAllPoints(User $user, UserRepository $userRepository, BadgeRepository $badgeRepository, RealisationRepository $realisationRepository, ChallengeRepository $challengeRepository)
    {
        //Compte tous les points acquis par un user depuis le début du jeu
        $nbrRealisations = $user->getRealisations();
        $nbRealisations = count($nbrRealisations->getKeys());

        //Attribué le badge à un user
        $user = $userRepository->findOneBy(['id' => $user]);
        $userRealisation = count($user->getRealisations());
        if ($userRealisation > 0 && $userRealisation <= 5){
            $badge = $badgeRepository->findOneBy(['id' => 43 ]);
        } elseif ($userRealisation > 5 && $userRealisation <= 10){
            $badge = $badgeRepository->findOneBy(['id' => 44 ]);
        } elseif ($userRealisation > 10 && $userRealisation <= 15){
            $badge = $badgeRepository->findOneBy(['id' => 45 ]);
        } elseif ($userRealisation > 15 && $userRealisation <= 20){
            $badge = $badgeRepository->findOneBy(['id' => 46 ]);
        } elseif ($userRealisation > 20 && $userRealisation <= 25){
            $badge = $badgeRepository->findOneBy(['id' => 47 ]);
        } else {
            $badge = $badgeRepository->findOneBy(['id' => 48 ]);
        }

        //Nouvelles habitudes d'un user
        $realisations = $realisationRepository->findBy(['User' => $user]);
        $counts = [];

        foreach ($realisations as $value)
        {
            $counts[] = $value->getChallenge()->getId();

        }

        $counts = array_count_values($counts);
        $challenge = [];
        $i = 0;
        foreach ($counts as $key => $count)
        {
            if($count >= 3)
            {
                $challenge [] = $challengeRepository->findOneBy(['id' => $key]);
                $challengeName[] = $challenge[$i]->getDescription();
                $i++;

            }

        }

        return $this->json([
            'realisations' => $nbRealisations,
            'badge' => $badge,
            'challenge' => $challengeName
        ]);
    }

    //Récupérations des données du front

    /**
     * @Route("/add_realisations", name="add_realisations")
     */

    public function addRealisations(UserRepository $userRepository, ChallengeRepository $challengeRepository, Request $request)
    {
        // recupère le contenu de la request, de l'envoi, format json
        $dataJson = $request->getContent();
        // converti json en tableau associatif
        $dataArray = json_decode($dataJson, true);

        // recup la valeur à la clé user_id
        $userId = $dataArray['user_id'];
        // idem avec challenge_id
        $challengeId = $dataArray['challenge_id'] ;
        // recupère le user et le challenge avec les id recup au dessus
        $user = $userRepository->find($userId);
        $challenge = $challengeRepository->find($challengeId);
        
        //crée une nouvelle réalisation, hydrate l'objet
        $realisation = new Realisation();
        $realisation->setUser($user);
        $realisation->setChallenge($challenge);
        $realisation->setCreatedAt(new \DateTime());
        
        // insère en BDD
        $this->em->persist($realisation);
        $this->em->flush();
        
        // return l'id de la realisation créé
        return $this->json($realisation->getId());
    }
    
}

