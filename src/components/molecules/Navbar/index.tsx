import { Button, Divider, Flex } from '@chakra-ui/react'
import { ActiveLink } from '../../atoms/ActiveLink'
import { useDashboard } from '../../../hooks/useDashboard'

export interface IProps {
  leftTabComponent?: JSX.Element;
}

export function Navbar({ leftTabComponent }: IProps) {
  const { navbarSlugActive, changeNavbarSlug } = useDashboard()
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
        active={navbarSlugActive === 'my-balances'}
        onClick={() => changeNavbarSlug('my-balances')}
      >
        Meus saldos
      </ActiveLink>
      <ActiveLink
        active={navbarSlugActive === 'my-investments'}
        onClick={() => changeNavbarSlug('my-investments')}
      >
        Meus investimentos
      </ActiveLink>
      <ActiveLink
        active={navbarSlugActive === 'invest-now'}
        onClick={() => changeNavbarSlug('invest-now')}
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
      <Flex alignItems={'center'} justifyContent={'flex-start'}>
        {leftTabComponent}
      </Flex>
    </Flex>
  )
}
