import { useState } from 'react';
import { Box, Button, Flex, Input } from '@mantine/core';

export function RegisterPage() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const handleRegister = () => {
        const user = {
            firstName,
            lastName,
            userName,
            email,
        }
        console.log(user)
    }

  return (
    <>
      <Flex direction={"column"} align={"center"} justify={"center"}>
        <Box w={500}>
          <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Prénom" size={"xl"} mb={10}/>
          <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Nom" size={"xl"} mb={10}/>
          <Input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Pseudo" mb={10} size={"xl"}/>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" mb={10} size={"xl"}/>
          <Input placeholder="Mot de passe" mb={10} size={"xl"}/>
          <Flex justify={"end"}>
            <Button onClick={handleRegister} size={"xl"}>Creer mon compte</Button>
          </Flex> 
        </Box>
      </Flex>
    </>
  );
}
