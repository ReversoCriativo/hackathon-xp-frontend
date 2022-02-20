import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
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
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import backgroundImg from '../assets/background-black.png'

export default function Home() {
  const [errorName, setErrorName] = useState(false)
  const [name, setName] = useState('')
  const { isLoading, login } = useAuth()
  const toast = useToast()
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (!name) {
      setErrorName(true)
      return
    }
    login(name).then((isSuccess) => {
      if (!isSuccess) {
        setErrorName(true)
        toast({
          status: 'error',
          title: `Usuário não encontrado`,
          position: 'top-right',
          isClosable: true,
        })
      } else {
        navigate('/dashboard')
      }
    })
  }

  return (
    <HStack
      h='100vh'
      backgroundRepeat={'no-repeat'}
      backgroundPosition={'center'}
      backgroundImage={backgroundImg}
    >
      <Container maxW='container.md'>
        <Center>
          <Image src={Logo} mt='60px' />
        </Center>
        <Flex>
          <Center w={'100%'} h={'80vh'}>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
              bg='#0D0D0D'
              borderRadius='4px'
              p='80px 0px'
              w='80%'
            >
              <Text fontWeight={700} fontSize={32} mb='60px'>
                Seja bem-vindo!
              </Text>
              <InputGroup mb='30px' w='80%'>
                <InputLeftElement
                  color='#605F62'
                  pointerEvents='none'
                  children={<FiUser />}
                />
                <Input
                  type='tel'
                  value={name}
                  fontSize='16px'
                  onChange={(e) => {
                    if (e.currentTarget.value !== '') {
                      setErrorName(false)
                    }
                    setName(e.currentTarget.value)
                  }}
                  placeholder='Nome do usuário'
                  _placeholder={{
                    color: errorName ? 'variants.danger' : '#605F62',
                  }}
                  borderColor='#605F62'
                  height='48px'
                />
              </InputGroup>
              <BasicButton
                isLoading={isLoading}
                fontSize='18px'
                variant='solid'
                w='80%'
                onClick={handleLogin}
              >
                Entrar
              </BasicButton>
            </Box>
          </Center>
        </Flex>
        <Center>
          <Text fontSize='12px' fontWeight='400'>
            © Reverso - Grupo 17 2022
          </Text>
        </Center>
      </Container>
    </HStack>
  )
}
