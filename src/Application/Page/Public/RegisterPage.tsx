import { useState, useRef } from 'react';
import {Autocomplete, Box, Button, Flex, Input, Loader} from '@mantine/core';

export function RegisterPage() {
  const timeoutRef = useRef<number>(-1);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0 || val.includes('@')) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
      }, 1000);
    }
  };
  
  return (
    <>
      <Flex direction={"column"} align={"center"} justify={"center"}>
        <Box w={500}>
          <Input placeholder="Prénom" size={"xl"} mb={10}/>
          <Input placeholder="Nom" size={"xl"} mb={10}/>
          <Input placeholder="E-mail" mb={10} size={"xl"}/>
          <Input placeholder="Pseudo" mb={10} size={"xl"}/>
          <Input placeholder="Mot de passe" mb={10} size={"xl"}/>
          <Flex justify={"end"}>
            <Button size={"xl"}>Creer mon compte</Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
