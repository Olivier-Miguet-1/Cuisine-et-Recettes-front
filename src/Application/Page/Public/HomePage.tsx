import {Box, Button, Flex, Title, Text} from "@mantine/core";

export const HomePage = () => {
    return (
        <>
            <Flex direction="column" align="center" justify="center" style={{ minHeight: '100vh', padding: '20px' }}>
                <Box w={500} style={{ textAlign: 'center' }}>
                    <Title order={1} mb={20}>
                        Bienvenue sur notre site
                    </Title>
                    <Text size="lg" mb={20}>
                        Nous sommes heureux de vous voir ici. Explorez nos fonctionnalités et profitez de nos services.
                    </Text>
                    <Flex justify="center" mb={10}>
                        <Button size="xl" style={{ margin: '0 10px' }}>
                            Inscription
                        </Button>
                        {/* <Button size="xl" style={{ margin: '0 10px' }}>
                            Connexion
                        </Button> */}
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}
