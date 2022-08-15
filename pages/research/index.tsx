import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'

const Project = (props: {
  id: string
  title: string
  content: string
  progress: string
}) => {
  return (
    <div className="flex justify-center pt-10">
      <div className="flex w-full max-w-4xl flex-col gap-2 rounded-xl border-2 py-3 px-5 shadow-md transition hover:shadow-lg">
        <span className="text-lg">{props.title}</span>
        <span className="pt-2">{props.content}</span>
        <span className="pt-3 text-sm text-gray-700">
          Progress: {props.progress}
        </span>
      </div>
    </div>
  )
}

const Content = () => {
  return (
    <div className="container mx-auto px-4 pt-10">
      <div className="text-center">
        <span className="text-5xl font-light">Research</span>
      </div>

      <Project
        id="zero-knowledge-auth"
        title="Zero-Knowledge Verification"
        content="A method for authenticating with a service in a zero trust
            enviroment where the service does not know what user authenticated
            but can be certain that they are authorised and verified."
        progress="Investigation"
      />

      <Project
        id="whitebox"
        title="Secure File Store for Distaster Recovery"
        content="A method for encrypting and distributing files in a secure and deterministic mannor that can be used to recover data in the event of a disaster."
        progress="Development"
      />
    </div>
  )
}

const Research: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Research - seann.co.uk</title>
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

export default Research
