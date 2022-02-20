import React from 'react'
import { Flex } from '@chakra-ui/react'
import { UserProps } from '../../../interfaces/User'
import BankCard from '../../atoms/BankCard'

interface Props {
  user: UserProps
}

export default function UserBankList({ user }: Props) {
  return (
    <Flex gap={5} alignItems={'center'} justifyContent='center' width={'100%'} >
      {user.banks.map(({ checking: { balance }, institution: { bankName } }, index) => (
        <BankCard
          key={Math.random() + index}
          bankName={bankName}
          value={balance}
        />
      ))}
    </Flex>
  )
}
