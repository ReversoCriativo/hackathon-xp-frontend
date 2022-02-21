import { Flex } from '@chakra-ui/react'
import { sumBy } from 'lodash'
import { useMemo } from 'react'
import { useUser } from '../../../hooks/useUser'
import { InvestmentCard } from '../../atoms/InvestmentCard'

export function UserInvestmentsList() {
  const { investments } = useUser()

  const investmentAggregator = useMemo((): Array<{
    type: string
    total: number
  }> => {
    const result = [] as any
    investments.forEach((investment) => {
      for (const key of Object.keys(investment)) {
        result.push({
          type: key,
          total: sumBy(investment[key], 'value'),
        })
      }
    })
    return result
  }, [investments])

  return (
    <Flex
      w='100%'
      gap={19}
      p='0px 90px'
      alignItems='flex-start'
      flexFlow='wrap'
    >
      {investmentAggregator.map((investment, index) => (
        <InvestmentCard key={Math.random() + index} investment={investment} />
      ))}
    </Flex>
  )
}
