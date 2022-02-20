import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { range } from 'lodash'
import { useEffect, useState } from 'react'
import BankCard from '../components/atoms/BankCard'
import { BasicButton } from '../components/atoms/BasicButton'
import { Header } from '../components/molecules/Header'

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [isCardOn, setIsCardOn ] = useState(false);

  useEffect(() => {
    onOpen()
  }, [])

  return (
    <Container maxW='container.lx'>
      <Header />
      <Flex gap={5} alignItems={'center'} justifyContent='center'>
        {range(0, 4).map(() => (
          <BankCard on={isCardOn} value={1504.94} onToggle={() => setIsCardOn(!isCardOn)} />
        ))}
      </Flex>
      <Drawer
        placement={'left'}
        onClose={onClose}
        isOpen={isOpen}
        size={'full'}
      >
        <DrawerOverlay />
        <DrawerContent bg='#010101'>
          <Header isDrawer />
          <DrawerBody
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignContent='center'
            p={['0 240px', '0 280px', '0 320px']}
          >
            <Box
              textAlign='center'
              display='flex'
              flexDirection='column'
              maxW='1220px'
              minW='200px'
              alignSelf='center'
              w='100%'
            >
              <Text
                fontSize={['22px', '28px', '36px']}
                mb={['50px', '60px', '80px']}
              >
                Olá João, o que iremos fazer hoje?
              </Text>
              <BasicButton
                onClick={onClose}
                h={['40px', '60px', '80px']}
                bg='#0D0D0D'
                mb={['47px', '67px']}
                fontSize={['16px', '18px']}
              >
                Consultar meu saldo em todos os bancos
              </BasicButton>
              <BasicButton
                onClick={onClose}
                h={['40px', '60px', '80px']}
                bg='#0D0D0D'
                mb={['47px', '67px']}
                fontSize={['16px', '18px']}
              >
                Consultar sobre meus investimentos até o momentos
              </BasicButton>
              <BasicButton
                onClick={onClose}
                h={['40px', '60px', '80px']}
                mb={['47px', '67px']}
                fontSize={['16px', '18px']}
              >
                Investir agora!
              </BasicButton>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  )
}
