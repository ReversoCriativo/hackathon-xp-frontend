import { Button, Divider, Flex } from '@chakra-ui/react'
import { ActiveLink } from '../../atoms/ActiveLink'
import { FiEye } from 'react-icons/fi'
import { useNavbar } from '../../../hooks/useNavbar'

export function Navbar() {
  const { navLinkActive, changeNavlink } = useNavbar()
  console.log(navLinkActive)
  return (
    <Flex
      bg='#0D0D0D'
      borderRadius='6px'
      w='90%'
      justifyContent='space-between'
      p='10px 30px'
      m='0 140px'
      mb='85px'
    >
      <ActiveLink
        active={navLinkActive === 'my-balances'}
        onClick={() => changeNavlink('my-balances')}
      >
        Meus saldos
      </ActiveLink>
      <ActiveLink
        active={navLinkActive === 'my-investments'}
        onClick={() => changeNavlink('my-investments')}
      >
        Meus investimentos
      </ActiveLink>
      <ActiveLink
        active={navLinkActive === 'invest-now'}
        onClick={() => changeNavlink('invest-now')}
      >
        Investir agora
      </ActiveLink>
      <Divider
        orientation='vertical'
        m='5px 0'
        p={'20px 0'}
        h='100%'
        bg='#9e9e9e'
      />
      <Button
        variant='ghost'
        _hover={{
          opacity: 0.7,
        }}
      >
        <FiEye fontSize={22} style={{ marginRight: '15px' }} />
        Esconder todos os saldos
      </Button>
    </Flex>
  )
}
