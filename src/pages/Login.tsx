import {
  Button,
  Center,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useToast,
} from '@chakra-ui/react'
import { FiUser } from 'react-icons/fi'
import { useState } from 'react'
import Logo from '../assets/logo.png'
import { BasicButton } from '../components/atoms/BasicButton'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [nome, setNome] = useState('')
  const toast = useToast()

  const handleLogin = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (!nome) {
        toast({
          status: 'error',
          title: `Usuário não encontrado`,
          position: 'top-right',
          isClosable: true,
        })
      }
    }, 1000)
  }

  return (
    <Container maxW='container.md'>
      <Center>
        <Image src={Logo} mt='60px' />
      </Center>
      <Flex>
        <Center
          w={'100%'}
          h={'80vh'}
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
        >
          <Text fontWeight={700} fontSize={32} mb='60px'>
            Seja bem-vindo!
          </Text>
          <InputGroup mb='30px' w='70%'>
            <InputLeftElement
              color='#605F62'
              pointerEvents='none'
              children={<FiUser />}
            />
            <Input
              type='tel'
              value={nome}
              onChange={(e) => setNome(e.currentTarget.value)}
              placeholder='Nome do usuário'
              _placeholder={{ color: '#605F62' }}
              // variant='flushed'
              borderColor='#605F62'
              height='48px'
            />
          </InputGroup>
          <BasicButton
            isLoading={isLoading}
            variant='solid'
            w='70%'
            onClick={handleLogin}
          >
            Entrar
          </BasicButton>
        </Center>
      </Flex>
      <Center>
        <Text fontSize='12px' fontWeight='400'>
          © Reverso - Grupo 17 2022
        </Text>
      </Center>
    </Container>
  )
}
