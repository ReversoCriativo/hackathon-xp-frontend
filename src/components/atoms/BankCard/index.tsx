import React, { useMemo, useState } from 'react'
import { Box, Button, Fade, Flex, Image, Text } from '@chakra-ui/react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface Props {
  value: number
  bankName: string;
  on: boolean;
}

export default function BankCard({ value, bankName, on }: Props) {

  const moneyCurrency = useMemo(() => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }, [value])

  return (
    <Flex
      bg={'#0D0D0D'}
      px={30}
      pt={15}
      width={'20%'}
      flexDir={'column'}
      borderRadius={6}
    >
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        {/* <Image src={imageSrc} maxW={50} maxH={60} /> */}
        <Text fontSize={32}>
          {bankName.toUpperCase()}
        </Text>
        {/* <Button p={0} onClick={() => setVisible(!visible)}>
          {!on ? <FiEye size={20} /> : <FiEyeOff size={20} />}
        </Button> */}
      </Flex>
      <Flex flexDir={'column'}>
        <Text color='#737373' fontSize={18} mt={18}>
          Saldo disponível:
        </Text>

        <Box pt={5} pb={9}>
          {on ? (
            <Fade in={on}>
              <Text color='#fff' fontWeight={'bold'} fontSize={32}>
                {moneyCurrency}
              </Text>
            </Fade>
          ) : (
            <Box backgroundColor={'#141414'} p={'24px'} />
          )}
        </Box>
      </Flex>
    </Flex>
  )
}
