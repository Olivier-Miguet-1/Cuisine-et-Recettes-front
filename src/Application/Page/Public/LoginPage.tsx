import {Box, Button, Flex, Input, Title } from "@mantine/core";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Http} from "../../../Infrastructure/Axios.instance.ts";


export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const credentials = {
            username: email,
            password,
        };
        
        try {
            const response = await Http.post("/login", credentials)
            navigate('/dashboard');
            console.log(response)
        }catch (e) {
            console.error(e)
        }
    };
    

    
    return (
        <>
            <Flex direction={"column"} align={"center"} justify={"center"}>
                <Title order={1} mb={30} mt={50}>Bienvenue , entrer vos identifiants</Title>
                <form onSubmit={handleLogin}>
                    <Box w={500}>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            placeholder="E-mail"
                            size={"xl"}
                            mb={10}
                            type={"email"}
                            required
                        />
            {/* <Flex direction={"column"} align={"center"} justify={"center"}>
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
                        /> */}
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
