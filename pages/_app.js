import Header from '../components/Header'
import '../styles/reset.css'
import '../styles/imports.css'
import '../styles/globals.css'
import '../node_modules/highlight.js/styles/obsidian.css'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline';
import BackToTop from '../components/ScrollTop'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes';
const Footer = dynamic(() => import('../components/Footer'))
import PyodideProvider from '../components/PyodideProvider'
import { StyledEngineProvider } from '@mui/material/styles';
import yaml from '../config.yml';

function MyApp({ Component, pageProps }) {
  const base = '/' + process.env.NEXT_PUBLIC_REPO_NAME
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{yaml.event}</title>

        {process.env.NEXT_PUBLIC_GITHUB_ACTIONS == false && <><link rel="icon" href={base + "/images/favicon.ico"} sizes="32x32"></link>
          <link rel="icon" href={base + "/images/favicon.ico"} sizes="192x192"></link>
          <link rel="apple-touch-icon" href={base + "/images/favicon.ico"}></link></>
          ||  
          <><link rel="icon" href={"favicon.ico"} sizes="32x32"></link>
          <link rel="icon" href={"favicon.ico"} sizes="192x192"></link>
          <link rel="apple-touch-icon" href={"favicon.ico"}></link></>
          }
      </Head>
      <CssBaseline />
      <ThemeProvider>
        <StyledEngineProvider injectFirst>
          <Header
            props={pageProps} />
          <main className='container'>
            <PyodideProvider>
              <Component {...pageProps} />
            </PyodideProvider>
          </main>
        </StyledEngineProvider>
      </ThemeProvider>
      <BackToTop />
      <Footer />
    </>
  )
}

export default MyApp
