import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import messageApi from '../service/messageService';



const MessagePage = () => {

    const [messages, setMessage] = useState([]);

    //au chargement du composant
    useEffect(() => {fetchMessages()},[]);


    const deleteMessage = () =>{
        //todo delete message
    }

    //recup des customers
    const fetchMessages = async () =>{
        try{
            const data = await messageApi.findAll()
            setMessage(data) 
            console.log(data)
            
        }catch(err){
            toast.error("Une erreur est survenue, impossible de charger les messages!")
        }
    }

    return (
        <>
            <h1>Listes des messages</h1>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th className="text-center">Message :</th>
                        <th></th>
                    </tr>

                </thead>
                <tbody>
                    { messages && messages.map(message =>

                        <tr key={message.id}>
                            <td>{message.id}</td>
                            <td>{message.firstName}</td>
                            <td>{message.lastName}</td>

                            <td>{message.email}</td>
                            <td>{message.message}</td>

                            <td>
                                <button className="btn btn-danger"
                                    onClick={() => deleteMessage(customer.id)}

                                >Suprimer</button>
                            </td>
                        </tr>
                    )}
                </tbody>


            </table>

        </>
    );
}

export default MessagePage;