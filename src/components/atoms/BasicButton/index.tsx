import { Button, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface BasicButtonProps extends ButtonProps {
  children: ReactNode
}

export function BasicButton({ children, ...rest }: BasicButtonProps) {
  return (
    <Button
      bg='linear-gradient(90deg, #DA3633 -0.1%, #D29922 100%)'
      _hover={{
        opacity: 0.7,
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}
