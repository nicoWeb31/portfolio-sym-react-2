import React, { useEffect, useState } from 'react';
import Realisa from "../components/Realisa";
import GitHubApi from "../components/githubApi/GitHubApi";
import githubService from "../service/ApiGithub";



const Realisation = () => {

    const [user, setUser] = useState({});
    const [loading, setLading] = useState(false);

    useEffect(() => {
        fetchUser("nicoWeb31");
        
        
    }, [])

    const fetchUser = async (name) => {
        try {
            await githubService.find(name).then(response => {
                console.log(response.data)
                setUser(response.data)

            })

        } catch (err) {
            console.log(err.response)
        }
    }





    return (
        <>
            <Realisa />

            <GitHubApi user={user} loading={loading}/>
        </>

    );
}

export default Realisation;