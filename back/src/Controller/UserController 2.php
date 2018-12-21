<?php

namespace App\Controller;


use App\Entity\Realisation;
use App\Repository\RealisationRepository;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\EntityManager;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\DateTime;


class UserController extends AbstractController
{
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

//    /**
//     * @Route("/user", name="user")
//     */
//    public function index()
//    {
//        return $this->render('user/index.html.twig', [
//            'controller_name' => 'UserController',
//        ]);
//    }

    //Compte tous les points acquis par un user depuis le début du jeu
    /**
     * @Route("/user_all_points/{user}", name="user_all_points")
     */
    public function userAllPoints(User $user)
    {
        $realisations = $user->getRealisations();
        $realisations = count($realisations->getKeys());
        return $this->json(array('realisations' => $realisations));

    }

    //Compte tous les points acquis par un user sur le mois en cours
    /**
     * @Route("/user_month_points/{id}", name="user_month_points")
     */
    public function userMonthPoints($id, UserRepository $userRepository, RealisationRepository $realisationRepository)
    {
        $now = new \DateTime();
        $date = $now->format('Y-m');

        $points = $realisationRepository->findByExampleField($id);
        $res = count($points);

        return $this->json(['res' => $res]);
    }

    //Compte tous les points acquis par les users depuis le début du jeu
    /**
     * @Route("/all_users_all_points", name="all_users_all_points")
     */
    public function allUsersAllPoints()
    {

    }

    //Compte tous les points acquis par les users sur le mois en cours
    /**
     * @Route("/all_users_month_points", name="all_users_month_points")
     */
    public function allUsersMonthPoints()
    {

    }

    //Nouvelles habitudes d'un user
    /**
     * @Route("/user/challenges/{user}", name="user_challenges")
     */
    public function userChallenges($id, UserRepository $userRepository, RealisationRepository $realisationRepository)
    {
        $challengeCompleted = $userRepository->getRealisations();
        dump($challengeCompleted);
        $real = $realisationRepository->findBy($id);
        dd($real);
        $count = count($challengeCompleted->getKeys());



//        $realisation->getChallenge();
//        dd($realisation);



        if($count >= 10) {
            echo 'ok';
        } else {
            echo 'ko';
        }


    }

    //Attribué le badge à un user
    /**
     * @Route("/user/badge/{id}", name="user_badge")
     */
    public function userBadge()
    {

    }

    //Récap le nbre de user ayant chaque badge
    /**
     * @Route("/users/count_badges", name="users_count_badges")
     */
    public function countBadges()
    {

    }

}

