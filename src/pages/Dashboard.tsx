import { Box, Flex, Text } from '@chakra-ui/react'

import { Navbar } from '../components/molecules/Navbar'
import { useUser } from '../hooks/useUser'
import { useNavbar } from '../hooks/useNavbar'
import { Balances } from '../components/organisms/Balances'
import { useCallback } from 'react'

export default function Dashboard() {
  const { isLoading } = useUser()
  const { navLinkActive } = useNavbar()
  const { user } = useUser()

  const GetDashoboard = useCallback(() => {
    if (navLinkActive === 'my-balances') {
      return <Balances />
    }
    if (navLinkActive === 'my-investments') {
      return <Text>Meus Investimentos</Text>
    }
    if (navLinkActive === 'invest-now') {
      return <Text>Investir agora</Text>
    }
  }, [user, navLinkActive])

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
