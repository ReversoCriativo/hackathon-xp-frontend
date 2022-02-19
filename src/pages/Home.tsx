import { Box, Flex, HStack, Heading, Text, Button } from '@chakra-ui/react'
import backgroundImg from '../assets/background-onboard.png'

export default function Home() {
  return (
    <HStack
      w='100vw'
      h='100vh'
      backgroundRepeat={'no-repeat'}
      backgroundPosition={'right'}
      backgroundImage={backgroundImg}
    >
      <Flex>
        <Box w='50%' p='112px'>
          <Heading>Invista de forma simples, apenas em alguns cliques.</Heading>
          <Text mt='30' textAlign={'justify'}>
            Uma plataforma que armazena suas informações através do
            compartilhamento por Open Finance, facilitando e automatizando sua
            gestão financeira. Se você possuir saldo para investir em seus
            bancos conectados, a plataforma oferece um rol de opções para a
            contratação em um clique.
          </Text>
          <Button
            mt='60px'
            bg='linear-gradient(90deg, #DA3633 -0.1%, #D29922 100%)'
            _hover={{
              opacity: 0.7,
            }}
          >
            Começar
          </Button>
        </Box>
      </Flex>
    </HStack>
  )
}
