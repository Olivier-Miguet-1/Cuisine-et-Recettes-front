import {Box, Button, Flex, Input} from "@mantine/core";
import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const credentials = {
            email,
            password,
        };
        console.log(credentials);

        // Simulez une connexion réussie pour cette démonstration
        // Vous devrez remplacer cette partie par une requête API réelle
        setTimeout(() => {
            // Une fois l'utilisateur connecté, redirigez-le vers la page /login
            navigate('/login');
        }, 1000); // Délai simulé pour l'illustration
    };
    

    
    return (
        <>
            <Flex direction={"column"} align={"center"} justify={"center"}>
                <form onSubmit={handleLogin}>
                    <Box w={500}>
                    <Flex justify={"center"}>
                            <Button type={"submit"} size={"xl"}>Vos identifiants de connexion.</Button>
                            
                        </Flex>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)} 
                            placeholder="E-mail" 
                            size={"xl"}
                            mb={10}
                            type={"email"}
                            required
                        />
                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            placeholder="Mot de passe"
                            type="password"
                            size={"xl"}
                            mb={10}
                            required
                        />
                        <Flex justify={"end"}>
                            <Button type={"submit"} size={"xl"}>Se connecter</Button>
                        </Flex>
                        <Flex justify={"center"} mt={10}>
                            <Link to="/register">Pas de compte? Créez-en un ici</Link>
                        </Flex>
                    </Box>
                </form>
            </Flex>
        </>
    )
}
