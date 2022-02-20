import { Box, Text } from '@chakra-ui/react'

import { Navbar } from '../components/molecules/Navbar'
import { useUser } from '../hooks/useUser'
import { useCallback } from 'react'
import { useDashboard } from '../hooks/useDashboard'
import UserBankList from '../components/organisms/UserBankList'

export default function Dashboard() {
  const { isLoading } = useUser()
  const { navbarSlugActive } = useDashboard()
  const { user } = useUser()

  const GetDashoboard = useCallback(() => {
    if (navbarSlugActive === 'my-balances') {
      return <UserBankList user={user} />
    }
    if (navbarSlugActive === 'my-investments') {
      return <Text>Meus Investimentos</Text>
    }
    if (navbarSlugActive === 'invest-now') {
      return <Text>Investir agora</Text>
    }
  }, [user, navbarSlugActive])

  return (
    <Box
      mt='60px'
      flexDirection='column'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Navbar />
      {!isLoading ? GetDashoboard() : null}
    </Box>
  )
}
