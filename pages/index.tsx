import type { NextPage } from 'next'
import Head from 'next/head'
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
} from 'react-icons/si'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

const Avatar = () => {
  const containerClass = 'flex flex-col items-center pt-10'
  const imgClass = 'h-52 w-52 rounded-full object-cover shadow-lg'
  const nameClass = 'pt-5 text-3xl text-gray-800'
  const descClass = 'pt-3 text-gray-700'

  return (
    <div className={containerClass}>
      <img
        className="h-52 w-52 rounded-full object-cover shadow-lg"
        src="me.png"
      />
      <span className={nameClass}>Sean</span>
      <span className={descClass}>Software Engineer - Data Enthusiast - </span>
    </div>
  )
}

const Skills = () => {
  return (
    <div className="flex flex-col items-center pt-32">
      <span className="text-4xl font-light">Skills</span>

      <div className="flex w-full max-w-3xl gap-5">
        <div className="flex w-full flex-col justify-center gap-5">
          <span className="text-2xl font-light">Languages</span>
          <div className="flex flex-col">
            <span>Python</span>
            <span>Javascript / TypeScript</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <FaPython className="text-6xl text-amber-400" />
          <SiJavascript className="text-6xl text-yellow-400 " />
          <SiTypescript className="text-6xl text-blue-500" />
        </div>
      </div>

      <div className="flex w-full max-w-3xl gap-5 pt-20">
        <div className="flex items-center justify-center gap-3">
          <FaGit className="text-6xl text-cyan-700 " />
          <SiVisualstudiocode className="text-6xl text-purple-700 " />
          <FaGithubAlt className="text-6xl text-cyan-700 " />
        </div>
        <div className="flex w-full flex-col items-end justify-center gap-5">
          <span className="text-2xl font-light">Software Development</span>
          <div className="flex flex-col">
            <span>Git</span>
            <span>CI CD</span>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-3xl gap-5 pt-20">
        <div className="flex w-full flex-col justify-center gap-5">
          <span className="text-2xl font-light">Cloud</span>
          <div className="flex flex-col">
            <span>AWS</span>
            <span>Azure</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <FaAws className=" text-6xl text-amber-400" />
          <SiMicrosoftazure className=" text-6xl text-blue-400" />
        </div>
      </div>

      <div className="flex w-full max-w-3xl gap-5 pt-20">
        <div className="flex items-center justify-center gap-3">
          <FaDocker className="text-6xl text-cyan-700 " />
          <SiKubernetes className="text-6xl text-cyan-700" />
        </div>
        <div className="flex w-full flex-col items-end justify-center gap-5">
          <span className="text-2xl font-light">Containerisation</span>
          <div className="flex flex-col">
            <span>Docker</span>
            <span>Kubernetes</span>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-3xl gap-5 pt-20">
        <div className="flex w-full flex-col justify-center gap-5">
          <span className="text-2xl font-light">Data Pipelines</span>
          <div className="flex flex-col">
            <span>Kafka</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <SiApachekafka className=" text-6xl text-blue-400" />
        </div>
      </div>

      <div className="flex w-full max-w-3xl gap-5 pt-20">
        <div className="flex items-center justify-center gap-3">
          <SiMongodb className="text-6xl text-green-700 " />
          <SiElasticsearch className="text-6xl text-pink-700" />
          <SiRedis className="text-6xl text-red-700" />
        </div>
        <div className="flex w-full flex-col items-end justify-center gap-5">
          <span className="text-2xl font-light">Databases</span>
          <div className="flex flex-col">
            <span>MongoDB</span>
            <span>ElasticSearch</span>
            <span>Redis</span>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-3xl gap-5 pt-20">
        <div className="flex w-full flex-col justify-center gap-5">
          <span className="text-2xl font-light">Front End</span>
          <div className="flex flex-col">
            <span>React</span>
            <span>Tailwind</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <SiReact className="text-6xl text-blue-400" />
          <SiTailwindcss className="text-6xl text-blue-400" />
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

      <main className="w-full">
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

// const Links = () => {
//   return (
//     <div className="flex justify-center space-x-2 pt-5">
//       <Link href={'https://github.com'}>
//         <FaGithubSquare className="h-10 w-10 cursor-pointer text-gray-400 hover:text-purple-700" />
//       </Link>
//       <Link href={'https://medium.com'}>
//         <FaMedium className="h-10 w-10 cursor-pointer text-gray-400 hover:text-black" />
//       </Link>
//       <Link href={'https://npm.com'}>
//         <FaNpm className="h-10 w-10 cursor-pointer text-gray-400 hover:text-red-500" />
//       </Link>
//     </div>
//   )
// }

// const Technologies = () => {
//   return (
//     <div className="pt-24 text-gray-700">
//       <div className="flex justify-center">
//         <span className="text-4xl text-gray-700">Technologies</span>
//       </div>
//       <div className="flex justify-center space-x-12 pt-3">
//         <div className="relative flex flex-col items-center justify-center">
//           <FaPython className="text-7xl text-amber-400" />
//           <span className="absolute bottom-0 ">Python</span>
//         </div>
//         <div className="relative flex flex-col items-center justify-center">
//           <SiGo className="text-9xl text-sky-500" />
//           <span className="absolute bottom-0">Golang</span>
//         </div>
//         <div className="relative flex flex-col items-center justify-center">
//           <SiTypescript className="text-7xl text-blue-500" />
//           <span className="absolute bottom-0">TypeScript</span>
//         </div>
//         <div className="relative flex flex-col items-center justify-center">
//           <FaAws className="text-7xl text-amber-500" />
//           <span className="absolute bottom-0">AWS</span>
//         </div>
//         {/* <div className="relative flex flex-col items-center justify-center">
//               <FaDocker className="text-7xl text-sky-500" />
//               <span className="absolute bottom-0">Docker</span>
//             </div> */}
//       </div>
//     </div>
//   )
// }

// const Projects = () => {
//   return (
//     <div className="flex flex-col items-center pt-24 text-gray-700">
//       <span className="text-4xl text-gray-700">Projects</span>

//       <div className="container flex flex-col items-center space-y-10 pt-10">
//         <div className="flex w-3/4 flex-col rounded-lg border-2 p-5 shadow-lg">
//           <span className="text-xl">Blockchain Explorer</span>
//           <span>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//             Laboriosam, modi laudantium! Commodi nulla sint, qui magnam libero
//             quae quaerat adipisci quo dolor optio et harum quis similique
//             exercitationem fuga fugit?
//           </span>
//         </div>

//         <div className="flex w-3/4 flex-col rounded-lg border-2 p-5 shadow-lg">
//           <span className="text-xl">Whitebox</span>
//           <span>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//             Laboriosam, modi laudantium! Commodi nulla sint, qui magnam libero
//             quae quaerat adipisci quo dolor optio et harum quis similique
//             exercitationem fuga fugit?
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }
