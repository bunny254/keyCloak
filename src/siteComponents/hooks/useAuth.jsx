import React, {useState, useEffect} from 'react';
import Keycloak from "keycloak-js";

const useAuth = () => {
    const [isLogin, setLogin]=useState(false);
    useEffect(()=>{
        const client= new Keycloak({
            url:0,
            realm:0,
            clientID:0,
        });
    },[])
    return isLogin;
}

export default useAuth