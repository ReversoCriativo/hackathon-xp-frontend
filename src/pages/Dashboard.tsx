import { Box, Button, Text } from '@chakra-ui/react'

import { Navbar } from '../components/molecules/Navbar'
import { useUser } from '../hooks/useUser'
import { useCallback, useState } from 'react'
import { useDashboard } from '../hooks/useDashboard'
import UserBankList from '../components/organisms/UserBankList'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export default function Dashboard() {
  const { isLoading } = useUser()
  const { navbarSlugActive } = useDashboard()
  const { user } = useUser()
  const [lastTabActive, setLastTabActive] = useState(false)

  const GetDashoboard = useCallback(() => {
    if (navbarSlugActive === 'my-balances') {
      return <UserBankList user={user} isVisible={lastTabActive} />
    }
    if (navbarSlugActive === 'my-investments') {
      return <Text>Meus Investimentos</Text>
    }
    if (navbarSlugActive === 'invest-now') {
      return <Text>Investir agora</Text>
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
      return <></>
    }
    if (navbarSlugActive === 'invest-now') {
      return <></>
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
