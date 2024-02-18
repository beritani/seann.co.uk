import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FaGithub, FaNpm } from 'react-icons/fa'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'

const Project = (props: {
  id: string
  title: string
  subtitle: string
  tags?: string[]
  links?: { github?: string; npm?: string }
}) => {
  return (
    <div className="flex w-full max-w-4xl rounded-xl border-2 shadow-md transition hover:shadow-lg">
      <div className="flex h-full w-full flex-col py-5 pl-5 pr-2">
        <span className="text-xl">{props.title}</span>
        <span className="text-base text-gray-700">{props.subtitle}</span>
        <div className="flex gap-2 pt-5 pb-1">
          {props.tags?.map((tag, i) => (
            <span key={`${tag}_${i}`} className="text-xs text-purple-800">
              {'#' + tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 pr-5">
        {props.links?.npm && (
          <Link href={props.links.npm}>
            <FaNpm className="cursor-pointer text-4xl text-gray-500 transition ease-in-out hover:scale-125 hover:text-red-700" />
          </Link>
        )}
        {props.links?.github && (
          <Link href={props.links.github}>
            <FaGithub className="cursor-pointer text-4xl text-gray-500 transition ease-in-out hover:scale-125 hover:text-purple-700" />
          </Link>
        )}
      </div>
    </div>
  )
}

const Content = () => {
  return (
    <div className="container mx-auto px-4 pt-10">
      <div className="text-center">
        <span className="text-5xl font-light">Projects</span>
      </div>
      <div className="flex w-full flex-col items-center gap-10 pt-10">
        <Project
          id="axios"
          title="Axios Helper Library"
          subtitle="Helpful Wrapper Functions for Axios"
          tags={['JavaScript', 'TypeScript']}
          links={{
            github: 'https://github.com/beritani/axios',
            npm: 'https://www.npmjs.com/package/@beritani/axios',
          }}
        />

        <Project
          id="moneroj"
          title="Moneroj"
          subtitle="Monero Wallet Library written in JavaScript"
          tags={['Cryptocurrency', 'JavaScript', 'TypeScript']}
          links={{
            github: 'https://github.com/beritani/moneroj',
            npm: 'https://www.npmjs.com/package/moneroj',
          }}
        />

        <Project
          id="ring-signatures"
          title="Ring Signatures"
          subtitle="JavaScript Library for Creating and Verifying Ring Signatures"
          tags={['Cryptography', 'JavaScript', 'TypeScript']}
          links={{
            github: 'https://github.com/beritani/ring-signatures',
            npm: 'https://www.npmjs.com/package/ring-signatures',
          }}
        />

        <Project
          id="whitebox"
          title="Whitebox"
          subtitle="Secure File Store Designed for Disaster Recovery"
          tags={['Cryptography', 'Golang']}
          links={{ github: 'https://github.com/beritani/whitebox' }}
        />

        <Project
          id="seann.co.uk"
          title="seann.co.uk"
          subtitle="Portfolio Website"
          tags={['NextJS', 'Tailwind', 'TypeScript']}
          links={{ github: 'https://github.com/beritani/seann.co.uk' }}
        />
      </div>
    </div>
  )
}

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Projects - seann.co.uk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className="min-h-screen w-full">
        <Content />
      </main>

      <Footer />
    </div>
  )
}

export default Projects
