import React, { useState } from 'react';
import {Box, Button, Flex, Input, Title} from '@mantine/core';
import {Http} from "../../../Infrastructure/Axios.instance.ts";
import {useNavigate} from "react-router-dom";

export function RegisterPage() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        try {
            const response = await Http.post("/user", {
                firstName,
                lastName,
                userName,
                email,
                password
            })
            
            // redirection vers la page de connexion
            navigate('/login');
            
        }catch (e) {
            console.error(e)
        }
    }

  return (
    <>
        <Flex direction={"column"} align={"center"} justify={"center"}>
            <Title order={1} mb={30} mt={50}>Créer mon compte</Title>
            <form onSubmit={handleRegister}>
                <Box w={500}>
                    <Input
                        type={"text"}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Prénom"
                        size={"xl"}
                        mb={10}
                        required
                    />
                    <Input
                        type={"text"}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Nom"
                        size={"xl"}
                        mb={10}
                        required
                    />
                    <Input
                        type={"text"}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Pseudo"
                        mb={10}
                        size={"xl"}
                        required
                    />
                    <Input
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                        mb={10}
                        size={"xl"}
                        required
                    />
                    <Input
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mot de passe"
                        mb={10}
                        size={"xl"}
                        required
                    />
                    <Flex justify={"end"}>
                        <Button type={"submit"} size={"xl"}>Créer mon compte</Button>
                    </Flex>
                </Box>
            </form>
        </Flex>
    </>
  );
}
