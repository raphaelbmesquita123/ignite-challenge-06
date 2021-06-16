import { AppProps } from 'next/app'
import Header from '../components/Header'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

//Swiper css
import "swiper/components/navigation/navigation.min.css"
import 'swiper/swiper.scss';
import SwiperCore, { Navigation } from 'swiper/core';


SwiperCore.use([Navigation]);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
  
}

export default MyApp
