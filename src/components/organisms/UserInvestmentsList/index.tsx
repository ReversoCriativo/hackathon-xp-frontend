import { Flex } from '@chakra-ui/react'
import { groupBy, sumBy } from 'lodash'
import { useMemo } from 'react'
import { useUser } from '../../../hooks/useUser'
import { InvestmentCard } from '../../atoms/InvestmentCard'

export interface IAggregator {
  type: string
  total: number
}

export const InvestmentTypeTranslate = {
  stocks: 'Ações',
  investmentFunds: 'Fundos de investimento',
  savingsAccount: 'Conta poupança',
  privatePension: 'Previdência privada',
}

export function UserInvestmentsList() {
  const { investments } = useUser()

  const investmentAggregator = useMemo((): IAggregator[] => {
    const result = [] as any
    investments.forEach((investment) => {
      for (const key of Object.keys(investment)) {
        result.push({
          type: String(
            (InvestmentTypeTranslate as any)[key] || key.toUpperCase()
          ),
          total: sumBy(investment[key], 'value'),
        })
      }
    })
    return result
  }, [investments])

  const aggregatorByAllBanks = useMemo(() => {
    const aggregated = []

    const groupedByType = groupBy(investmentAggregator, 'type')

    for (const key of Object.keys(groupedByType)) {
      aggregated.push({
        type: key,
        total: sumBy(groupedByType[key], 'total'),
      })
    }

    return aggregated
  }, [investmentAggregator])

  return (
    <Flex
      w='100%'
      gap={19}
      p='0px 90px'
      alignItems='flex-start'
      flexFlow='wrap'
    >
      {aggregatorByAllBanks?.map((investment, index) => (
        <InvestmentCard key={Math.random() + index} investment={investment} />
      ))}
    </Flex>
  )
}
