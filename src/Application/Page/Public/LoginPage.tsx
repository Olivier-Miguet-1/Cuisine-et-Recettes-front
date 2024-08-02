import {Box, Button, Flex, Input} from "@mantine/core";
import React, {useState} from "react";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const credentials = {
            email,
            password,
        };
        console.log(credentials);
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
                    </Box>
                </form>
            </Flex>
        </>
    )
}
