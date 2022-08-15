import Link from 'next/link'
import { FaGithub, FaNpm } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="container mx-auto flex items-stretch justify-between p-4">
      <Link href="/">
        <div className="justify-left flex w-1/3 cursor-pointer items-center gap-3 ">
          <img
            className="h-12 w-12 transition duration-500 hover:rotate-6"
            src="icon.png"
          />
          <span className="text-2xl font-light">seann.co.uk</span>
        </div>
      </Link>

      <div className="flex w-1/3 items-center justify-center gap-10 ">
        <Link href="/projects">Projects</Link>
        <Link href="/research">Research</Link>
        <Link href="/about">About</Link>
      </div>

      <div className="flex w-1/3 items-center justify-end gap-3">
        <Link href={'https://github.com/beritani'}>
          <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 shadow-md">
            <FaGithub className="w-6x h-6 transition hover:scale-150 hover:text-purple-700" />
          </div>
        </Link>

        <Link href={'https://www.npmjs.com/~beritani'}>
          <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 shadow-md">
            <FaNpm className="h-6 w-6 text-gray-500 transition hover:scale-150 hover:text-red-600" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
