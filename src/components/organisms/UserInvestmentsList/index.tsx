import { Flex } from '@chakra-ui/react'
import { useUser } from '../../../hooks/useUser'
import { InvestmentCard } from '../../atoms/InvestmentCard'


export const InvestmentTypeTranslate = {
  stocks: 'Ações',
  investmentFunds: 'Fundos de investimento',
  savingsAccount: 'Conta poupança',
  privatePension: 'Previdência privada',
}

export function UserInvestmentsList() {
  const { aggregatedInvestments } = useUser();

  return (
    <Flex
      w='100%'
      gap={19}
      p='0px 90px'
      alignItems='flex-start'
      flexFlow='wrap'
    >
      {aggregatedInvestments?.map((investment, index) => (
        <InvestmentCard key={Math.random() + index} investment={investment} />
      ))}
    </Flex>
  )
}
