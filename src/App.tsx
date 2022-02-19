import { ChakraProvider } from '@chakra-ui/react';
import Greetings from './Pages/Greetings';
import { theme } from './styles/theme';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Greetings />
    </ChakraProvider>
  )
}

export default App
