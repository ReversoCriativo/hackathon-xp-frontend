import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react'

import { Navbar } from '../components/molecules/Navbar'
import { useUser } from '../hooks/useUser'
import { useCallback, useMemo, useState } from 'react'
import { useDashboard } from '../hooks/useDashboard'
import UserBankList from '../components/organisms/UserBankList'
import { UserInvestmentsList } from '../components/organisms/UserInvestmentsList'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import Invest from '../components/organisms/Invest'
import investmentIMG from '../assets/investment.svg'
import { sumBy } from 'lodash'

export default function Dashboard() {
  const { isLoading } = useUser()
  const { navbarSlugActive } = useDashboard()
  const { user, aggregatedInvestments } = useUser()
  const [lastTabActive, setLastTabActive] = useState(false)

  const investmentsSum = useMemo(
    () =>
      new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(sumBy(aggregatedInvestments, 'total')),

    [aggregatedInvestments]
  )

  const GetDashoboard = useCallback(() => {
    if (navbarSlugActive === 'my-balances') {
      return <UserBankList user={user} isVisible={lastTabActive} />
    }
    if (navbarSlugActive === 'my-investments') {
      return <UserInvestmentsList />
    }
    if (navbarSlugActive === 'invest-now') {
      return <Invest />
    }
  }, [user, navbarSlugActive, lastTabActive])

  const getNavbarLastTab = useCallback(() => {
    if (navbarSlugActive === 'my-balances') {
      return (
        <>
          <Button
            variant='ghost'
            _hover={{
              opacity: 0.7,
            }}
            onClick={() => setLastTabActive(!lastTabActive)}
          >
            {lastTabActive ? (
              <FiEyeOff fontSize={22} style={{ marginRight: '15px' }} />
            ) : (
              <FiEye fontSize={22} style={{ marginRight: '15px' }} />
            )}
            {lastTabActive
              ? 'Esconder todos os saldos'
              : 'Mostrar todos os saldos'}
          </Button>
        </>
      )
    }

    if (navbarSlugActive === 'my-investments') {
      return (
        <>
          <Center mr='20px' w='36px'>
            <Image src={investmentIMG} />
          </Center>
          <Flex>
            <Box>
              <Text color='#9E9E9E' fontSize='12px' mb='1px'>
                Total investido
              </Text>
              {lastTabActive ? (
                <Text fontSize='18px' fontWeight={700}>
                  {investmentsSum}
                </Text>
              ) : (
                <Box w='120%' h='30px' bg='#141414' />
              )}
            </Box>
          </Flex>
          <Center ml='100px'>
            {lastTabActive ? (
              <FiEyeOff
                fontSize={22}
                style={{ marginRight: '15px' }}
                cursor='pointer'
                onClick={() => setLastTabActive(!lastTabActive)}
              />
            ) : (
              <FiEye
                fontSize={22}
                style={{ marginRight: '15px' }}
                cursor='pointer'
                onClick={() => setLastTabActive(!lastTabActive)}
              />
            )}
          </Center>
        </>
      )
    }
    if (navbarSlugActive === 'invest-now') {
      return undefined;
    }
  }, [navbarSlugActive, lastTabActive])

  return (
    <Box
      mt='60px'
      flexDirection='column'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Navbar leftTabComponent={getNavbarLastTab()} />
      {!isLoading ? GetDashoboard() : null}
    </Box>
  )
}
