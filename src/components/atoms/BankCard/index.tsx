import { Box, Button, Fade, Flex, Image, Text } from '@chakra-ui/react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import React, { useMemo } from 'react'

interface Props {
  on: boolean
  value: number
  onToggle: () => void
}

export default function BankCard({ on, value, onToggle }: Props) {
  const moneyCurrency = useMemo(() => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }, [value])

  return (
    <Flex bg={'#0D0D0D'} px={30} pt={15} width={'20%'} flexDir={'column'}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Image
          src={
            'https://logospng.org/download/nubank/logo-nu-nubank-roxo-icon-2048.png'
          }
          maxW={50}
          maxH={60}
        />
        <Button p={0} onClick={onToggle}>
          {!on ? <FiEye size={20} /> : <FiEyeOff size={20} />}
        </Button>
      </Flex>
      <Flex flexDir={'column'} mt={10}>
        <Text color='#737373' fontSize={18} mt={18}>
          Saldo disponível:
        </Text>

        <Box pt={5} pb={4}>
          <Fade in={on}>
            <Text color='#fff' fontWeight={'bold'} fontSize={32}>
              {moneyCurrency}
            </Text>
          </Fade>
        </Box>
      </Flex>
    </Flex>
  )
}
