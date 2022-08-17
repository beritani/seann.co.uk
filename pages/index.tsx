import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { useToggle } from '@mantine/hooks'
import {
  FaPython,
  FaGit,
  FaAws,
  FaDocker,
  FaGithubAlt,
  FaGithubSquare,
} from 'react-icons/fa'
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
  SiOpenapiinitiative,
  SiGraphql,
  SiJupyter,
  SiNumpy,
  SiPandas,
} from 'react-icons/si'
import { TbApi, TbBrandNextjs } from 'react-icons/tb'
import { GrHadoop } from 'react-icons/gr'
import {
  FcCollaboration,
  FcSearch,
  FcEngineering,
  FcFeedIn,
} from 'react-icons/fc'
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
      <div className="flex gap-2 pt-3 text-3xl text-gray-300">
        <Link href="https://github.com/beritani">
          <FaGithubSquare className="cursor-pointer hover:text-purple-700" />
        </Link>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div className="flex flex-col items-center pt-24 ">
      <span className="text-4xl font-light">Skills</span>
      <div className="flex w-full max-w-5xl flex-col justify-around gap-2 pt-10 md:col-span-2 lg:flex-row">
        <div className="flex w-full flex-col items-center p-5 text-center">
          <FcEngineering className="rotate-6 text-7xl drop-shadow-md" />
          <span className="pt-5 font-semibold">Software Development</span>
          <span className="pt-3">
            Working across the technology stack, from front-end to databases.
            Using test driven development, CI/CD pipelines and intrastructure as
            code to test and deploy at scale across the cloud.
          </span>
        </div>

        <div className="flex w-full flex-col items-center p-5 text-center">
          <FcFeedIn className="text-7xl drop-shadow-md filter" />
          <span className="pt-5 font-semibold">Data Engineering</span>
          <span className="pt-3">
            Developing ETL pipelines to collect, transform, enrich and store
            various datasets. Creating secure and well documented APIs to query
            across all types of data holdings.
          </span>
        </div>

        <div className="flex w-full flex-col items-center p-5 text-center">
          <FcSearch className="text-7xl drop-shadow-md filter" />
          <span className="pt-5 font-semibold">{'Research & Testing'}</span>
          <span className="pt-3">
            Running proof of concepts to research and test various technologies
            that help make informed business and strategic decisions.
          </span>
        </div>

        <div className="flex w-full flex-col items-center p-5 text-center">
          <FcCollaboration className="text-7xl drop-shadow-md " />
          <span className="pt-5 font-semibold">Collaboration</span>
          <span className="pt-3">
            Working with stakeholders to understand their needs and
            requirements. Using agile methodologies to work across teams and
            departments.
          </span>
        </div>
      </div>
    </div>
  )
}

const TechnologiesSection = (props: {
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

const Technologies = () => {
  return (
    <div className="flex flex-col items-center pt-20">
      <span className="text-4xl font-light">Technologies</span>
      <div className="flex w-full max-w-4xl flex-col items-center gap-16 pt-16">
        <TechnologiesSection
          right={false}
          title="Languages"
          subtite="Golang - Python - JavaScript / TypeScript"
        >
          <SiGo className="text-7xl text-blue-400" />
          <FaPython className="text-6xl text-amber-400" />
          <div className="flex">
            <SiJavascript className="-rotate-6 text-6xl text-yellow-400" />
            <SiTypescript className="rotate-6 text-6xl text-blue-500" />
          </div>
        </TechnologiesSection>

        <span className="w-full border-t-2" />

        <TechnologiesSection
          right={true}
          title="Software Development"
          subtite="Git - Test Driven Development - CICD"
        >
          <FaGit className="text-6xl text-gray-700 " />
          <SiVisualstudiocode className="text-6xl text-purple-800 " />
          <FaGithubAlt className="text-6xl text-purple-700" />
        </TechnologiesSection>

        <span className="w-full border-t-2" />

        <TechnologiesSection
          right={false}
          title="Data Engineering"
          subtite="Hadoop - Apache Kafka"
        >
          <GrHadoop className="text-6xl text-yellow-400" />
          <SiApachekafka className="text-6xl text-gray-800" />
        </TechnologiesSection>

        <span className="w-full border-t-2" />

        <TechnologiesSection
          right={true}
          title="Cloud Services"
          subtite="AWS - Azure"
        >
          <FaAws className="text-6xl text-amber-400" />
          <SiMicrosoftazure className="text-6xl text-blue-400" />
        </TechnologiesSection>

        <span className="w-full border-t-2" />

        <TechnologiesSection
          right={false}
          title="Data Science"
          subtite="Numpy - Pandas - Jupyter Notebooks"
        >
          <SiNumpy className="text-6xl text-sky-500" />
          <SiPandas className="text-6xl text-slate-800" />
          <SiJupyter className="text-6xl text-orange-500" />
        </TechnologiesSection>

        <span className="w-full border-t-2" />

        <TechnologiesSection
          right={true}
          title="Containerisation"
          subtite="Docker - Kubernetes"
        >
          <FaDocker className="text-6xl text-blue-400 " />
          <SiKubernetes className="text-6xl text-blue-500" />
        </TechnologiesSection>

        <span className="w-full border-t-2" />

        <TechnologiesSection
          right={false}
          title="Databases"
          subtite="MongoDB - ElasticSearch - Redis"
        >
          <SiMongodb className="text-6xl text-green-700 " />
          <SiElasticsearch className="text-6xl text-teal-500" />
          <SiRedis className="text-6xl text-red-700" />
        </TechnologiesSection>

        <span className="w-full border-t-2" />

        <TechnologiesSection
          right={true}
          title="API Development"
          subtite="RESTful - GraphQL - OpenAPI"
        >
          <TbApi className="text-6xl text-gray-800" />
          <SiGraphql className="text-6xl text-pink-600" />
          <SiOpenapiinitiative className="text-6xl text-green-700" />
        </TechnologiesSection>

        <span className="w-full border-t-2" />

        <TechnologiesSection
          right={false}
          title="Fontend Development"
          subtite="React - NextJS - Tailwind"
        >
          <SiReact className="text-6xl text-blue-400" />
          <TbBrandNextjs className="text-6xl text-gray-800" />
          <SiTailwindcss className="text-6xl text-blue-400" />
        </TechnologiesSection>
      </div>
    </div>
  )
}

const Experience = () => {
  return (
    <div className="flex flex-col items-center pt-32">
      <span className="text-4xl font-light">Experience</span>

      <div className="flex w-full max-w-4xl flex-col items-center pt-16">
        <div className="relative flex w-full justify-end">
          <div className="flex w-1/2 flex-col border-r-2 border-dashed border-r-gray-300 pr-10 pb-16 text-right"></div>
          <div className="flex w-1/2 border-l-2 border-dashed border-l-gray-300"></div>
        </div>

        <div className="relative flex w-full justify-end">
          <div className="absolute left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-gray-300 ring-2 ring-green-400 ring-offset-2"></div>
          <div className="flex w-1/2 flex-col border-r-2 border-r-gray-300 pr-10 text-right"></div>
          <div className="flex w-1/2 flex-col border-l-2 border-l-gray-300 pl-10 pb-10">
            <span className="text-2xl">Software Engineer</span>
            <span className="text-lg">Nationwide Building Society</span>
            <span className="text-sm text-gray-400">Nov. 2021 - Present</span>
          </div>
        </div>

        <div className="relative flex w-full justify-end">
          <div className="absolute left-1/2 h-6 w-6 -translate-x-1/2 translate-y-1 rounded-full bg-gray-200 ring-2 ring-gray-300 ring-offset-2"></div>
          <div className="flex w-1/2 flex-col border-r-2 border-r-gray-300 pr-10 pb-10 text-right">
            <span className="text-2xl">Software Engineer</span>
            <span className="text-sm text-gray-400">Jan. 2021 - Nov. 2021</span>
          </div>
          <div className="flex w-1/2 border-l-2 border-l-gray-300"></div>
        </div>

        <div className="relative flex w-full justify-end">
          <div className="absolute left-1/2 h-6 w-6 translate-y-1 -translate-x-1/2 rounded-full bg-gray-200 ring-2 ring-gray-300 ring-offset-2"></div>
          <div className="flex w-1/2 border-r-2 border-r-gray-300"></div>
          <div className="flex w-1/2 flex-col border-l-2 border-l-gray-300 pb-10 pl-10">
            <span className="text-2xl">Data Scientist</span>
            <span className="text-sm text-gray-400">Sep. 2019 - Jan. 2021</span>
          </div>
        </div>

        <div className="relative flex w-full justify-end">
          <div className="absolute left-1/2 h-6 w-6 -translate-x-1/2 translate-y-1 rounded-full bg-gray-200 ring-2 ring-gray-400 ring-offset-2"></div>
          <div className="flex w-1/2 flex-col pr-10 pb-10 text-right">
            <span className="text-2xl">BSc Cyber Security</span>
            <span className="text-lg">Apprenticeship</span>
            <span className="text-sm text-gray-400">Sep. 2017 - Sep. 2019</span>
          </div>
          <div className="flex w-1/2 border-l-gray-300"></div>
        </div>
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

      <NavBar />
      <main className="min-h-screen w-full">
        <div className="container mx-auto px-4">
          <Avatar />
          <Skills />
          <Technologies />
          <Experience />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
