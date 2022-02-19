import { Box, Button, Center, Container, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <Container maxW='container.md'>
      <Flex justifyContent="center" alignItems="center">
        <Center w={'100wh'} h={'100vh'}>
          <Box
            padding='30px 50px'
            w="30vw"
            h='30vw'
            bg={'#FFF'}
            display="flex"
            flexDirection="column"
            borderRadius={4}
            justifyContent="center"
            alignItems="center"
          >
            <InputGroup mb="10">
              <InputLeftElement
                pointerEvents='none'
                children={<PhoneIcon color='gray.500' />}
              />
              <Input type='tel' placeholder='Phone number' />
            </InputGroup>

            <Button isLoading={isLoading} colorScheme="teal" variant="solid" w="100%" onClick={handleLogin}>
              Entrar
            </Button>
          </Box>
        </Center>
      </Flex>
    </Container>
  )
}
