import {Box, Button, Flex, Input} from "@mantine/core";
import {useState} from "react";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = () => {
        const credentials = {
            email,
            password,
        };
        console.log(credentials);
    };
    
    return (
        <>
            <Flex direction={"column"} align={"center"} justify={"center"}>
                <Box w={500}>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                        size={"xl"}
                        mb={10}
                    />
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mot de passe"
                        type="password"
                        size={"xl"}
                        mb={10}
                    />
                    <Flex justify={"end"}>
                        <Button onClick={handleLogin} size={"xl"}>Se connecter</Button>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}
