import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from '../components/navigation/NavBar'
import Header from '../components/header/Header'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <NavBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
