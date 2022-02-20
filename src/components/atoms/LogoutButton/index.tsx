import { Button } from '@chakra-ui/react'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

export function LogoutButton() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    logout()
    navigate('/login')
  }

  return (
    <Button
      border='1px solid #DA3633'
      p={['10px 20px', '12px 35px', '15px 60px']}
      fontSize={['12px', '14px', '16px', '18px']}
      onClick={handleLogout}
      _hover={{
        border: '1px solid rgba(218, 54, 51, 0.7)',
      }}
    >
      <FiLogOut
        size={18}
        style={{ marginRight: window.innerWidth < 550 ? '' : '18px' }}
      />
      {window.innerWidth < 550 ? null : 'Sair'}
    </Button>
  )
}
