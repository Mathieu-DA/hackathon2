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
    public function userMonthPoints($id, UserRepository $userRepository, RealisationRepository $realisationRepository)
    {
        //Compte tous les points acquis par un user sur le mois en cours
        $now = new \DateTime();
        $date = $now->format('Y-m');

        $points = $realisationRepository->findByExampleField($id);
        $res = count($points);

        return $this->json(['res' => $res]);
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
        return $this->json([
            'realisations' => $realisations,
            'MonthRes' => $MonthRes,
            'usersByBadge' => $usersByBadge
        ]);
    }

    //page 3 - Réalisations
    /**
     * @Route("/realisations/{user}", name="realisations")
     */

    public function userAllPoints(User $user, UserRepository $userRepository, BadgeRepository $badgeRepository)
    {
        //Compte tous les points acquis par un user depuis le début du jeu
        $realisations = $user->getRealisations();
        $realisations = count($realisations->getKeys());

        //Attribué le badge à un user
        $user = $userRepository->findOneBy(['id' => $user]);
        $userRealisation = count($user->getRealisations());
        if ($userRealisation > 0 && $userRealisation <= 5){
            $badge = $badgeRepository->findOneBy(['id' => 1 ]);
        } elseif ($userRealisation > 5 && $userRealisation <= 10){
            $badge = $badgeRepository->findOneBy(['id' => 2 ]);
        } elseif ($userRealisation > 10 && $userRealisation <= 15){
            $badge = $badgeRepository->findOneBy(['id' => 3 ]);
        } elseif ($userRealisation > 15 && $userRealisation <= 20){
            $badge = $badgeRepository->findOneBy(['id' => 4 ]);
        } elseif ($userRealisation > 20 && $userRealisation <= 25){
            $badge = $badgeRepository->findOneBy(['id' => 5 ]);
        } else {
            $badge = $badgeRepository->findOneBy(['id' => 6 ]);
        }

        return $this->json([
            'realisations' => $realisations,
            'badge' => $badge
        ]);
    }
  
    //Nouvelles habitudes d'un user
    //page 3
    /**
     * @Route("/user/challenges", name="user_challenges")
     */
    public function userChallenges()
    {

    }

    //Récupérations des données du front

    /**
     * @Route("add_realisations", name="add_realisations")
     */

    public function updateRealisations(ChallengeRepository $challengeRepository, UserRepository $userRepository)
    {
    }
}

