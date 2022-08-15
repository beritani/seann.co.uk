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
      <Link href={`/rearch/${props.id}`}>
        <div className="flex w-full max-w-4xl cursor-pointer flex-col gap-2 rounded-xl border-2 py-3 px-5 shadow-md transition hover:shadow-lg">
          <span className="text-lg">{props.title}</span>
          <span className="pt-2">{props.content}</span>
          <span className="pt-3 text-sm text-gray-700">
            Progress: {props.progress}
          </span>
        </div>
      </Link>
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
        title="Zero-Knowledge Authorisation"
        content="A method for authenticating with a service in a zero trust
            enviroment where the service does not know what user authenticated
            but can be certain that they are authorised."
        progress="Investigation"
      />

      <Project
        id="whitebox"
        title="Secure File Store for Distaster Recovery"
        content=""
        progress="Development"
      />
    </div>
  )
}

const Research: NextPage = () => {
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

export default Research
