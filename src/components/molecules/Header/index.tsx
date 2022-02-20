import { ReactNode } from 'react'
import {
  Box,
  ChakraProps,
  DrawerHeader,
  Flex,
  Image,
  Spacer,
} from '@chakra-ui/react'
import logo from '../../../assets/logo.png'
import { LogoutButton } from '../../atoms/LogoutButton'

interface HeaderBoxProps extends ChakraProps {
  children: ReactNode
}

export function Header({ isDrawer = false }) {
  const HeaderBox = ({ children, ...rest }: HeaderBoxProps) => {
    if (isDrawer) {
      return <DrawerHeader {...rest}>{children}</DrawerHeader>
    }
    return <Box p='30px 100px'>{children}</Box>
  }

  return (
    <HeaderBox borderBottomWidth='1px' borderBottomColor={'#262626'}>
      <Flex>
        <Image
          src={logo}
          w={['190px', '210px', '230px', '250px']}
          h={['40px', '45px', '50px']}
        />
        <Spacer />
        <LogoutButton />
      </Flex>
    </HeaderBox>
  )
}
