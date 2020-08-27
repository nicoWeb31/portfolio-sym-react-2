<?php 

namespace App\events;

use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\Message;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class MessageEventSuscriber implements EventSubscriberInterface
{


    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['setDateNewMessage', EventPriorities::PRE_VALIDATE]
        ];
    } 



    public function setDateNewMessage(ViewEvent $event){


        $message = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if($message instanceof Message && $method === "POST" ){

            if(empty($message->getSendAt())){
                $message->setSendAt(new \DateTime());
            }

        }



    }

}