<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MessageRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=MessageRepository::class)
 */
class Message
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Votre prénom est obligatoire !")
     * @Assert\Length(
     *      min = 3,
     *      max = 50,
     *      minMessage = "Votre prénom doit avoir plus de {{ limit }} charactére",
     *      maxMessage = "Votre prénom doit avoir moins de {{ limit }} charactére",
     *      allowEmptyString = false
     * )
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Votre nom est obligatoire !")
     * @Assert\Length(
     *      min = 3,
     *      max = 50,
     *      minMessage = "Votre nom doit avoir plus de {{ limit }} charactére",
     *      maxMessage = "YVotre nom doit avoir plus de {{ limit }} charactére",
     *      allowEmptyString = false
     * )
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="l'adresse email du customer est obligatoire !")
     * @Assert\Email(message="le format de l'adresse email doit etre valide")
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=3000)
     * @Assert\NotBlank(message="le message est obligatoire !")
     * @Assert\Length(
     *      min = 30,
     *      max = 2500,
     *      minMessage = "Votre message doit avoir plus de {{ limit }} charactére",
     *      maxMessage = "YVotre message doit avoir plus de {{ limit }} charactére",
     *      allowEmptyString = false
     * )
     */
    private $message;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $sendAt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getSendAt(): ?\DateTimeInterface
    {
        return $this->sendAt;
    }

    public function setSendAt(?\DateTimeInterface $sendAt): self
    {
        $this->sendAt = $sendAt;

        return $this;
    }
}
