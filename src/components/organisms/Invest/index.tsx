import { Flex, SlideFade } from '@chakra-ui/react'
import { range } from 'lodash'
import React, { useEffect } from 'react'
import { useInvestments } from '../../../hooks/useInvestments'
import InvestmentProductCard from '../../molecules/InvestmentProductCard'

export default function Invest() {
  const { products, getProducts } = useInvestments()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Flex
      w='100%'
      gap={19}
      p='0px 90px'
      alignItems='flex-start'
      flexFlow='wrap'
    >
      {products.map(({ broker, products, investorProfile }) =>
        products.map((product) => (
          <InvestmentProductCard
            {...product}
            investorProfile={investorProfile}
            broker={broker}
          />
        ))
      )}
    </Flex>
  )
}
