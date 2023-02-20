import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import AppContainer from '../components/appContainer/AppContainer';
import theme from '../utils/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} >
      <AppContainer >
        <Component {...pageProps} />
      </AppContainer>
    </ChakraProvider>
  );
}
