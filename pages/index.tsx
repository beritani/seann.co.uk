import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import {
  FaGithubSquare,
  FaNpm,
  FaMedium,
  FaPython,
  FaAws,
  FaDocker,
} from 'react-icons/fa'
import { SiGo, SiTypescript } from 'react-icons/si'

const Home: NextPage = () => {
  return (
    <div
    //   className="flex min-h-screen flex-col items-center"
    //   style={{
    //     backgroundImage: "url('/topography.svg')",
    //     opacity: 0.3,
    //   }}
    >
      <Head>
        <title>Welcome!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-full">
        <div className="flex flex-col items-center pt-10">
          <img
            className="h-52 w-52 rounded-full object-cover shadow-lg "
            src="me.png"
          />
          <span className="pt-5 text-3xl text-gray-800">Sean N</span>
          <span className="pt-3 text-gray-700">Full Stack Engineer</span>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-2 pt-5">
          <Link href={'https://github.com'}>
            <FaGithubSquare className="h-10 w-10 cursor-pointer text-gray-400 hover:text-purple-700" />
          </Link>
          <Link href={'https://medium.com'}>
            <FaMedium className="h-10 w-10 cursor-pointer text-gray-400 hover:text-black" />
          </Link>
          <Link href={'https://npm.com'}>
            <FaNpm className="h-10 w-10 cursor-pointer text-gray-400 hover:text-red-500" />
          </Link>
        </div>

        <div className="pt-24 text-gray-700">
          <div className="flex justify-center">
            <span className="text-4xl text-gray-700">Technologies</span>
          </div>
          <div className="flex justify-center space-x-12 pt-3">
            <div className="relative flex flex-col items-center justify-center">
              <FaPython className="text-7xl text-amber-400" />
              <span className="absolute bottom-0 ">Python</span>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <SiGo className="text-9xl text-sky-500" />
              <span className="absolute bottom-0">Golang</span>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <SiTypescript className="text-7xl text-blue-500" />
              <span className="absolute bottom-0">TypeScript</span>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <FaAws className="text-7xl text-amber-500" />
              <span className="absolute bottom-0">AWS</span>
            </div>
            {/* <div className="relative flex flex-col items-center justify-center">
              <FaDocker className="text-7xl text-sky-500" />
              <span className="absolute bottom-0">Docker</span>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col items-center pt-24 text-gray-700">
          <span className="text-4xl text-gray-700">Projects</span>

          <div className="container flex flex-col items-center space-y-10 pt-10">
            <div className="flex w-3/4 flex-col rounded-lg border-2 p-5 shadow-lg">
              <span className="text-xl">Blockchain Explorer</span>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam, modi laudantium! Commodi nulla sint, qui magnam
                libero quae quaerat adipisci quo dolor optio et harum quis
                similique exercitationem fuga fugit?
              </span>
            </div>

            <div className="flex w-3/4 flex-col rounded-lg border-2 p-5 shadow-lg">
              <span className="text-xl">Whitebox</span>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam, modi laudantium! Commodi nulla sint, qui magnam
                libero quae quaerat adipisci quo dolor optio et harum quis
                similique exercitationem fuga fugit?
              </span>
            </div>
          </div>
        </div>

        {/* <div className="flex w-3/4 space-x-10 py-10">
          <div className="flex-none rounded-md border-2 border-gray-300 bg-white shadow-xl">
            <div className="flex flex-col items-center">
              <img
                className="h-52 w-52 rounded-full object-cover p-3"
                src="me.png"
              />
              <p>Sean Newell</p>
            </div>
          </div>
          <div className="rounded-md border-2 border-gray-300 bg-white shadow-xl"></div>
        </div> */}

        {/* <div className="flex h-screen w-full justify-center rounded-3xl border-2 bg-white px-10 text-center drop-shadow-lg">
          <div className="pt-10">
            <div>
              <img
                className="aspect-square w-56 rounded-full object-cover object-center"
                src="/me.png"
              />
            </div>
            <div className="pt-5">
              <span className="text-2xl text-black">Sean N</span>
            </div>
          </div>
        </div>*/}
      </main>
      <footer className=" pt-20"></footer>
    </div>
  )
}

export default Home
