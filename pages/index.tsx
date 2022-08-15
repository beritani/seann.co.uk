import type { NextPage } from 'next'
import Head from 'next/head'
import type { ReactNode } from 'react'
import { FaPython, FaGit, FaAws, FaDocker, FaGithubAlt } from 'react-icons/fa'
import {
  SiTypescript,
  SiJavascript,
  SiKubernetes,
  SiMicrosoftazure,
  SiApachekafka,
  SiMongodb,
  SiElasticsearch,
  SiRedis,
  SiVisualstudiocode,
  SiReact,
  SiTailwindcss,
  SiGo,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

const Avatar = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      <img
        className="h-52 w-52 rounded-full object-cover shadow-lg"
        src="/me.png"
      />
      <span className="pt-5 text-3xl text-gray-800">Sean</span>
      <span className="pt-3 text-gray-700">
        {'Software Engineer & Data Enthusiast'}
      </span>
    </div>
  )
}

const SkillSection = (props: {
  right: boolean
  title: string
  subtite: string
  children: ReactNode
}) => {
  const order = props.right ? 'sm:flex-row-reverse' : 'sm:flex-row'

  return (
    <div className={'flex w-full flex-col items-center gap-5 ' + order}>
      <div className="flex flex-col items-center gap-1 text-center sm:w-1/2">
        <span className="text-2xl font-light">{props.title}</span>
        <span className="text-sm text-gray-700">{props.subtite}</span>
      </div>

      <div className="flex items-center justify-center gap-10 sm:w-1/2">
        {props.children}
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div className="flex flex-col items-center pt-24">
      <span className="text-4xl font-light">Skills</span>
      <div className="flex w-full max-w-4xl flex-col items-center gap-16 pt-16">
        <SkillSection
          right={false}
          title="Languages"
          subtite="Golang - Python - JavaScript - TypeScript"
        >
          <SiGo className="text-7xl text-blue-400" />
          <FaPython className="text-6xl text-amber-400" />
          <SiJavascript className="text-6xl text-yellow-400" />
          <SiTypescript className="text-6xl text-blue-500" />
        </SkillSection>

        <span className="w-full border-t-2" />

        <SkillSection
          right={true}
          title="Software Development"
          subtite="Git - Test Driven Development - CICD"
        >
          <FaGit className="text-6xl text-gray-700 " />
          <SiVisualstudiocode className="text-6xl text-purple-800 " />
          <FaGithubAlt className="text-6xl text-purple-700 " />
        </SkillSection>

        <span className="w-full border-t-2" />

        <SkillSection
          right={false}
          title="Cloud Services"
          subtite="AWS - Azure"
        >
          <FaAws className=" text-6xl text-amber-400" />
          <SiMicrosoftazure className=" text-6xl text-blue-400" />
        </SkillSection>

        <span className="w-full border-t-2" />

        <SkillSection
          right={true}
          title="Containerisation"
          subtite="Docker - Kubernetes"
        >
          <FaDocker className="text-6xl text-blue-400 " />
          <SiKubernetes className="text-6xl text-blue-500" />
        </SkillSection>

        <span className="w-full border-t-2" />

        <SkillSection
          right={false}
          title="Databases"
          subtite="MongoDB - ElasticSearch - Redis"
        >
          <SiMongodb className="text-6xl text-green-700 " />
          <SiElasticsearch className="text-6xl text-teal-500" />
          <SiRedis className="text-6xl text-red-700" />
        </SkillSection>

        <span className="w-full border-t-2" />

        <SkillSection
          right={true}
          title="Fontend Development"
          subtite="React - NextJS - Tailwind"
        >
          <SiReact className="text-6xl text-blue-400" />
          <TbBrandNextjs className="text-6xl text-gray-800" />
          <SiTailwindcss className="text-6xl text-blue-400" />
        </SkillSection>
      </div>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>seann.co.uk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen w-full">
        <NavBar />
        <div className="container mx-auto px-4">
          <Avatar />
          <Skills />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
