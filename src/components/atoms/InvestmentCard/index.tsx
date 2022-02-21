import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

interface Props {
  investment: {
    type: string
    total: number
  }
}
export function InvestmentCard({ investment }: Props) {
  const [isExpended, setIsExpended] = useState(false)

  const moneyCurrency = useMemo(() => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(investment.total)
  }, [investment])

  return (
    <Flex
      justifyContent='space-between'
      flexDirection='column'
      bg='#0D0D0D'
      width={'24%'}
      borderRadius='6px'
      m='40px 0'
    >
      <Flex
        w='100%'
        justifyContent='space-between'
        alignItems='center'
        p='18px 24px'
      >
        <Text fontSize='18px' fontWeight={600}>
          {investment.type}
        </Text>
        <Button variant='ghost' onClick={() => setIsExpended(!isExpended)}>
          {isExpended ? <FaArrowUp size={18} /> : <FaArrowDown size={18} />}
        </Button>
      </Flex>
      {isExpended ? (
        <Box p='5px 24px 30px 24px'>
          <Text color='#9E9E9E' fontSize='18px'>
            Valor investido:
          </Text>
          <Flex justifyContent='space-between'>
            <Text fontSize='32px' fontWeight={700}>
              {moneyCurrency}
            </Text>
            {/* <Text color='#9E9E9E' fontSize='24px'>
                  {investment.bankId?.toLocaleUpperCase()}
                </Text> */}
          </Flex>
        </Box>
      ) : null}
    </Flex>
  )
}
