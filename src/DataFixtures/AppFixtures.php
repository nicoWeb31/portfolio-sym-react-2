<?php

namespace App\DataFixtures;

use App\Entity\Message;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    /**
     * Undocumented variable
     *
     * @var UserPasswordEncoderInterface
     */
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }


    public function load(ObjectManager $manager)



    {
        $faker = Factory::create('fr_FR');
        // $product = new Product();
        // $manager->persist($product);

        $user = new User();
        $user->setEmail("nico.riot@free.fr")
            ->setPassword($this->encoder->encodePassword($user,"pass"));

        $manager->persist($user);

        for ($m = 0; $m < 20; $m++) {

            $message = new Message();
            $message->setFirstName($faker->firstName())
                ->setLastName($faker->lastName)
                ->setSendAt($faker->dateTime())
                ->setMessage($faker->text())
                ->setEmail($faker->email);

            $manager->persist($message);    
        }


        $manager->flush();
    }
}
