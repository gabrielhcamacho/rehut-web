import '../styles/globals.css'
import { Suspense, useState, useEffect } from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'
import { SessionProvider } from "next-auth/react"
import axios, { AxiosRequestConfig } from "axios";
import { parseJwt } from "../utils/parse-jwt.ts";
import Home from './index'
import { AuthProvider } from '../src/contexts/AuthContext';

const antIcon = (
  <LoadingOutlined spin style={{
    fontSize: 50,
    color: '#ea3a60'
  }} />
);

const SpinLoader = () => <Spin indicator={antIcon} />;

function MyApp({ Component, pageProps }) {
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])


  return (
    <>
      {
        loading ?
          <div className='!fixed' style={{
            width: '100%',
            height: '100%',
            display: 'grid',
            placeItems: 'center'
          }}>
            <SpinLoader />
          </div>
          :
          <AuthProvider>
            <Component {...pageProps}/>
          </AuthProvider>
      }
    </>
  )
}

export default MyApp
