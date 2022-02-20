import { Button, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ActiveLinkProps extends ButtonProps {
  children: ReactNode
  active?: boolean
}

export function ActiveLink({ children, active, ...rest }: ActiveLinkProps) {
  return (
    <Button
      fontSize='18px'
      p='10px 30px'
      bg={active ? 'linear-gradient(90deg, #DA3633 -0.1%, #D29922 100%)' : ''}
      _hover={{
        opacity: 0.7,
      }}
      _focus={{}}
      variant={'ghost'}
      {...rest}
    >
      {children}
    </Button>
  )
}
