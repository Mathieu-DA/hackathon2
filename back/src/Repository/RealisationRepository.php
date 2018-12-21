<?php

namespace App\Repository;

use App\Entity\Realisation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Realisation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Realisation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Realisation[]    findAll()
 * @method Realisation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RealisationRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Realisation::class);
    }

     /**
      * @return Realisation[] Returns an array of Realisation objects
      */

    public function findByExampleField($id)
    {
        $first = new \DateTime('first day of this month');
        $last = new \DateTime('last day of this month');
        return $this->createQueryBuilder('r')
            ->join('r.User', 'u')
            ->where('u.id = :id')
            ->setParameter('id', $id)
            ->andWhere('r.created_at >= :first')
            ->setParameter('first', $first)
            ->andWhere('r.created_at <= :last')
            ->setParameter('last', $last)
            ->getQuery()
            ->getResult()
        ;
    }

    /**
     * @return Realisation[] Returns an array of Realisation objects
     */
    public function findByAllUsersPointsMonth()
    {
        $first = new \DateTime('first day of this month');
        $last = new \DateTime('last day of this month');
        return $this->createQueryBuilder('r')
            ->join('r.User', 'u')
            ->where('r.created_at >= :first')
            ->setParameter('first', $first)
            ->andWhere('r.created_at <= :last')
            ->setParameter('last', $last)
            ->getQuery()
            ->getResult()
            ;
    }
//    public function findOneBySomeField($value): ?Realisation
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }

}
