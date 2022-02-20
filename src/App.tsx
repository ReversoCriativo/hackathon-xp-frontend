import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'
import Routes from '../src/routes/routes'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
