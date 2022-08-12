/**
 *
 * CommonPage
 *
 */
import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../NavBar'
import { GlobalStyle } from '../../../styles/global-styles'
import { useTranslation } from 'react-i18next'

interface Props {
  children: React.ReactNode
}

export function CommonPage(props: Props) {
  const { i18n } = useTranslation()
  return (
    <>
      <Helmet
        titleTemplate="%s - Николай Павлин"
        defaultTitle="Николай Павлин CTO компании Нова"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Личная страница Николая Павлина" />
      </Helmet>
      <Container maxW={'container.lg'}>
        <NavBar />
        {props.children}
      </Container>
      <GlobalStyle />
    </>
  )
}
