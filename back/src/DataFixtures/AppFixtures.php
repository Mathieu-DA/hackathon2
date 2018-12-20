<?php

namespace App\DataFixtures;

use App\Entity\Badge;
use App\Entity\Challenge;
use App\Entity\Realisation;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Faker;


class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        $challenges = [
            'Vider votre corbeille mail',
            'Éteindre votre ordinateur avant votre dépard',
            "Éteindre l'imprimante", 'Choisir les options utile'
        ];

        foreach ($challenges as $key => $value) {
            $challenge = new Challenge();
            $challenge->setDescription($value);
            $this->addReference('challange_' .$key, $challenge);

            $manager->persist($challenge);
        }


        for($i = 1; $i <= 50; $i++) {
            $user = new User();
            $user->setFirstname($faker->firstName);
            $user->setLastname($faker->lastName);


            $manager->persist($user);

            for($n = 1; $n <= 5; $n++) {
                $realisation = new Realisation();
                $realisation->setUser($user);
                $realisation->setChallenge($challenge);
                $realisation->setCreatedAt($faker->dateTime());

                $manager->persist($realisation);
            }

        }

        $badges = ['Jeune Pousse', 'Bonzaï', 'Ficus', 'Belle Plante', 'Bambou', 'Baobab'];

        foreach ($badges as $value) {
            $badge = new Badge();
            $badge->setImage($faker->imageUrl(300));
            $badge->setName($value);

            $manager->persist($badge);
        }


        $manager->flush();
    }
}
