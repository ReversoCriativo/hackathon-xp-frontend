import { Flex } from '@chakra-ui/react'
import { range } from 'lodash'
import { useState } from 'react'
import BankCard from '../../atoms/BankCard'

export function Balances() {
  const [isCardOn, setIsCardOn] = useState(true)

  return (
    <Flex w='100%' gap={10} alignItems={'center'} justifyContent='center'>
      {range(0, 4).map((_, index) => (
        <BankCard
          key={Math.random() + index}
          imageSrc={
            'https://logospng.org/download/nubank/logo-nu-nubank-roxo-icon-2048.png'
          }
          value={1504.94}
          onToggle={() => setIsCardOn(!isCardOn)}
        />
      ))}
    </Flex>
  )
}
