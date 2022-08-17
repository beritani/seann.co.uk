import Link from 'next/link'
import { useToggle, useClickOutside } from '@mantine/hooks'
import {
  FaGithub,
  FaNpm,
  FaDev,
  FaChevronLeft,
  FaChevronDown,
} from 'react-icons/fa'

const NavBar = () => {
  const [open, toggleOpen] = useToggle()
  const ref = useClickOutside(() => toggleOpen(false))

  return (
    <div ref={ref} className="relative flex flex-col shadow-md">
      <div className="container mx-auto flex items-stretch justify-between p-4">
        <Link href="/">
          <div className="justify-left group flex w-1/3 cursor-pointer items-center gap-3 ">
            <img
              className="h-12 w-12 transition duration-500 group-hover:rotate-6"
              src="/icon.png"
            />
            <span className="text-2xl font-light">seann.co.uk</span>
          </div>
        </Link>

        <div className="hidden w-1/3 items-center justify-center gap-10 md:flex">
          <Link href="/projects">Projects</Link>
          <Link href="/research">Research</Link>
          <Link href="/about">About</Link>
        </div>

        <div className="hidden w-1/3 items-center justify-end gap-3 md:flex">
          <Link href="https://github.com/beritani">
            <div className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 shadow-md">
              <FaGithub className="w-6x h-6 transition group-hover:scale-150 group-hover:text-purple-700" />
            </div>
          </Link>

          <Link href="https://www.npmjs.com/~beritani">
            <div className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 shadow-md ">
              <FaNpm className="h-6 w-6 text-gray-500 transition group-hover:scale-150 group-hover:text-red-600" />
            </div>
          </Link>

          <Link href="https://dev.to/beritani">
            <div className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 shadow-md">
              <FaDev className="h-6 w-6 text-gray-500 transition group-hover:scale-150 group-hover:text-black" />
            </div>
          </Link>
        </div>

        <div className="flex w-1/3 flex-col items-center justify-center md:hidden">
          <button onClick={() => toggleOpen()}>
            {open ? (
              <FaChevronDown className="text-2xl text-gray-700 transition ease-in-out" />
            ) : (
              <FaChevronLeft className="text-2xl text-gray-700" />
            )}
          </button>
        </div>
      </div>
      <div className={open ? 'relative' : 'hidden'}>
        <div className="absolute flex w-full flex-col items-center gap-1 bg-white p-3 pb-5 shadow-xl md:hidden">
          <Link href="/projects">
            <span className="w-full cursor-pointer rounded-lg p-1 text-center hover:bg-gray-100">
              Projects
            </span>
          </Link>
          <Link href="/research">
            <span className="w-full cursor-pointer rounded-lg p-1 text-center  hover:bg-gray-100">
              Research
            </span>
          </Link>
          <Link href="/about">
            <span className="w-full cursor-pointer rounded-lg p-1 text-center  hover:bg-gray-100">
              About
            </span>
          </Link>
          <div className="flex w-full items-center justify-center gap-5 pt-3">
            <Link href="https://github.com/beritani">
              <div className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 shadow-md">
                <FaGithub className="w-6x h-6 transition group-hover:scale-150 group-hover:text-purple-700" />
              </div>
            </Link>

            <Link href="https://www.npmjs.com/~beritani">
              <div className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 shadow-md">
                <FaNpm className="h-6 w-6 text-gray-500 transition group-hover:scale-150 group-hover:text-red-600" />
              </div>
            </Link>

            <Link href="https://dev.to/beritani">
              <div className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 shadow-md">
                <FaDev className="h-6 w-6 text-gray-500 transition group-hover:scale-150 group-hover:text-black" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
