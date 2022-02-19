import { Box, Flex, HStack, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import backgroundImg from '../assets/background-onboard.png'
import { BasicButton } from '../components/atoms/BasicButton'

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
          <Link to='/login'>
            <BasicButton mt='60px'>Começar</BasicButton>
          </Link>
        </Box>
      </Flex>
    </HStack>
  )
}
