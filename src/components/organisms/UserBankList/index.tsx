import { Flex } from '@chakra-ui/react'
import { UserProps } from '../../../interfaces/User'
import BankCard from '../../atoms/BankCard'

interface Props {
  user: UserProps
  isVisible: boolean
}

export default function UserBankList({ user, isVisible }: Props) {
  return (
    <Flex gap={5} alignItems={'center'} justifyContent='center' width={'100%'}>
      {user.banks.map(
        ({ checking: { balance }, institution: { bankName } }, index) => (
          <BankCard
            key={Math.random() + index}
            bankName={bankName}
            value={balance}
            on={isVisible}
          />
        )
      )}
    </Flex>
  )
}
