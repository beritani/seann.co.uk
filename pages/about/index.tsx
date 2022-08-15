import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'

const Content = () => {
  return (
    <div className="container mx-auto px-4 pt-10">
      <div className="text-center">
        <span className="text-5xl font-light">About</span>
      </div>
    </div>
  )
}

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>seann.co.uk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-full">
        <NavBar />
        <Content />
      </main>

      <Footer />
    </div>
  )
}

export default About
