import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    logout()
    navigate('/login')
  }
  return (
    <Container maxW='container.lx'>
      <Text>Dashboard</Text>
      <Button onClick={onOpen}>Nav</Button>
      <Button onClick={handleLogout}>Sair</Button>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg='gray.400'>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  )
}
