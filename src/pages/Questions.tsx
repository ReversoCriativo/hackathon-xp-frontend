import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Spinner,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { BasicButton } from '../components/atoms/BasicButton'
import { Header } from '../components/molecules/Header'
import { useDashboard } from '../hooks/useDashboard'
import { useUser } from '../hooks/useUser'
import Dashboard from './Dashboard'

export default function Questions() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { changeNavbarSlug } = useDashboard()
  const { isLoading, user } = useUser()

  const formatName = useCallback((text: string) => {
    return (
      text.substring(0, 1).toLocaleUpperCase() +
      text.split(' ')[0].toLocaleLowerCase().substring(1, text.length)
    )
  }, [])

  useEffect(() => {
    onOpen()
  }, [])

  return (
    <Box>
      <Header />
      <Dashboard />
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
            {isLoading ? (
              <Center>
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='icons.primary'
                  alignSelf='self'
                  size='xl'
                />
              </Center>
            ) : (
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
                  Olá {formatName(user?.name || '')}, o que iremos fazer hoje?
                </Text>
                <BasicButton
                  onClick={() => {
                    changeNavbarSlug('my-balances')
                    onClose()
                  }}
                  h={['40px', '60px', '80px']}
                  bg='#0D0D0D'
                  mb={['47px', '67px']}
                  fontSize={['16px', '18px']}
                >
                  Consultar meu saldo em todos os bancos
                </BasicButton>
                <BasicButton
                  onClick={() => {
                    changeNavbarSlug('my-investments')
                    onClose()
                  }}
                  h={['40px', '60px', '80px']}
                  bg='#0D0D0D'
                  mb={['47px', '67px']}
                  fontSize={['16px', '18px']}
                >
                  Consultar sobre meus investimentos até o momentos
                </BasicButton>
                <BasicButton
                  onClick={() => {
                    changeNavbarSlug('invest-now')
                    onClose()
                  }}
                  h={['40px', '60px', '80px']}
                  mb={['47px', '67px']}
                  fontSize={['16px', '18px']}
                >
                  Investir agora!
                </BasicButton>
              </Box>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
