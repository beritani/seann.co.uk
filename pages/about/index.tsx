import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'

const Content = () => {
  return (
    <div className="container mx-auto px-4 pt-10">
      <div className="flex flex-col items-center text-center">
        <span className="text-5xl font-light">About</span>
        <img className="-z-50 mt-20 h-52 w-52 drop-shadow-lg" src="/icon.png" />

        <span className="pt-10 text-lg">Hello!</span>
        <span className="pt-5">
          I'm Sean, a Full Stack Software Engineer and Data Enthusiast.
        </span>
        <span className="pt-5">
          This website was built with{' '}
          <Link href="https://nextjs.org">
            <span className="cursor-pointer text-purple-800">NextJS</span>
          </Link>{' '}
          and{' '}
          <Link href="https://tailwindcss.com">
            <span className="cursor-pointer text-purple-800">Tailwind</span>
          </Link>
          .
        </span>
      </div>
    </div>
  )
}

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About - seann.co.uk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className="h-screen w-full">
        <Content />
      </main>

      <Footer />
    </div>
  )
}

export default About
