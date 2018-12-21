<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("/user", name="user")
     */
    public function index()
    {
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    //Compte tous les points acquis par un user depuis le début du jeu
    /**
     * @Route("/user_all_points/{id}", name="user_all_points")
     */
    public function userAllPoints()
    {

    }

    //Compte tous les points acquis par un user sur le mois en cours
    /**
     * @Route("/user_month_points/{id}", name="user_month_points")
     */
    public function userMonthPoints()
    {

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
     * @Route("/user/challenges", name="user_challenges")
     */
    public function userChallenges()
    {

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

