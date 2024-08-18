import Head from 'next/head'

import { HeaderSite } from '../src/components/Header/HeaderSite'
import Footer from '../src/components/Footer/Footer'
import PricingCards from '../src/components/PrincingCards'
import Hero from '../src/sections/Hero'
import KeyFeature from '../src/sections/KeyFeature'
import PaddingWrapper from '../src/components/PaddingWrapper'
import OurServices from '../src/sections/OurServices'
import Workflow from '../src/sections/Workflow'
import GetInTouch from '../src/sections/GetInTouch'
import SoftwarePages from '../src/sections/SoftwarePages'

import Partners from '../src/sections/Partners'
import { Tabs } from 'antd';

const Home = () => {
  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <div className="flex min-h-screen flex-col py-5 sm:py-8">
        <Head>
          <title>ReHub</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col font-body">
          <HeaderSite />
          <div className="flex min-h-screen flex-col py-5 ">
            <Hero />
            <PaddingWrapper>
              <SoftwarePages />
              <KeyFeature />
              <OurServices />
              <Partners/>
              <Workflow />
              <GetInTouch />
              {/* <PricingCards/> */}
            </PaddingWrapper>
          </div>

          <Footer />
        </main>


      </div>
    )
  }
}

export default Home
