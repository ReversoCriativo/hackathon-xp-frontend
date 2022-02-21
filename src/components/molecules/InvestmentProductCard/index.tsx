import React, { useMemo } from 'react'
import { Divider, Flex, Text } from '@chakra-ui/react'
import { IBrokerProduct } from '../../../contexts/Investments'
import { InvestmentTypeTranslate } from '../../organisms/UserInvestmentsList'

interface IProps extends IBrokerProduct {
  investorProfile: string
  broker: string
}

export const investorProfileTranslate = {
  conservative: 'Conservador',
  aggressive: 'Agressivo',
}

export default function InvestmentProductCard({
  investorProfile,
  broker,
  type,
  value,
  risk,
  description,
  productType,
}: IProps) {
  const profile = useMemo(
    () => (investorProfileTranslate as any)[investorProfile],
    [investorProfile]
  )

  const formatted = useMemo(() => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }, [value])

  return (
    <Flex
      justifyContent='space-between'
      flexDirection='column'
      bg='#0D0D0D'
      width={'24%'}
      borderRadius='6px'
      m='40px 0'
      p={5}
    >
      <Flex flexDir={'column'} mb={4} width={'100%'}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Text fontSize={24} fontWeight={'bold'}>
            {type || (InvestmentTypeTranslate as any)[productType] || productType}
          </Text>

          <Text
            fontSize={18}
            fontWeight={600}
            borderRadius={30}
            border={'1px solid #ffff'}
            p={2}
            width={86}
            textAlign={'center'}
          >
            {description?.toUpperCase() || (InvestmentTypeTranslate as any)[productType] || productType}
          </Text>
        </Flex>

        <Text color={risk <= 49 ? '#2BB439' : '#DA3633'} fontSize={14}>
          Grau de risco: {risk}%
        </Text>
      </Flex>
      <Flex flexDir={'column'}>
        <Text fontWeight={'bold'} fontSize={18}>
          Corretora: {broker.toUpperCase()}
        </Text>

        <Text fontWeight={'bold'} fontSize={18}>
          Perfil: {profile}
        </Text>

        <Divider mt={4} />
      </Flex>

      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        width={'100%'}
        mt={4}
      >
        <Text fontSize={14} fontWeight={500}>
          Investimento mínimo
        </Text>

        <Text fontSize={18}>{formatted}</Text>
      </Flex>
    </Flex>
  )
}
