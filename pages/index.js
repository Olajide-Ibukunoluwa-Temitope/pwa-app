import Signup from './signup';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-dmsans">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </Head>
      <div className='w-full h-full flex'>
        <div className='w-1/2 h-full bg-pink-400 hover:bg-yellow-400 flex justify-center items-center cursor-pointer'>
          <Link href='/login'>
            <p className='text-5xl h-full w-full flex justify-center items-center text-white'>Login</p>
          </Link>
        </div>
        <div className='w-1/2 h-full bg-red-400 hover:bg-yellow-400 flex justify-center items-center cursor-pointer'>
          <Link className='h-full w-full' href='/signup'>
            <p className='text-5xl h-full w-full flex justify-center items-center text-white'>Sign Up</p>
          </Link>
        </div>
      </div>
      
      
    </div>
  )
}
