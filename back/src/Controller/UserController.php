<?php

namespace App\Controller;

use App\Entity\Badge;
use App\Entity\Realisation;
use App\Entity\User;
use App\Repository\BadgeRepository;
use App\Repository\RealisationRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;


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
    public function allUsersAllPoints(RealisationRepository $realisationRepository)
    {

        $realisations = $realisationRepository->findAll();
        $realisations = count($realisations);
        return $this->json([
            'realisations' => $realisations,
        ]);

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
    public function userBadge(User $id, UserRepository $userRepository, BadgeRepository $badgeRepository)
    {
        $user = $userRepository->findOneBy(['id' => $id]);
        $userRealisation = count($user->getRealisations());
        //dd($userRealisation);
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
            'badge' => $badge,
        ]);
    }

    //Récap le nbre de user par badge
    /**
     * @Route("/users/count_badges", name="users_count_badges")
     */
    public function countBadges(UserRepository $userRepository)
    {
        $users = $userRepository->findAll();
        $userNbRealisation = [];
        foreach ($users as $user) {
            $userNbRealisation[] = count($user->getRealisations());
        }
        $userNbRealisation = array_count_values($userNbRealisation);
        //dd($userNbRealisation);
        $usersByBadge['jeune pousse'] = 0;
        $usersByBadge['bonzaï'] = 0;
        $usersByBadge['belle plante'] = 0;
        $usersByBadge['bambou'] = 0;
        $usersByBadge['baobab'] = 0;
        $usersByBadge['king'] = 0;
        foreach ($userNbRealisation as $key => $value) {
            if ($key > 0 && $key <= 5){
                $usersByBadge['jeune pousse'] += $value;
            } elseif ($key > 5 && $key <= 10){
                $usersByBadge['bonzaï'] += $value;
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
            'usersByBadge' => $usersByBadge,
        ]);
    }
}

