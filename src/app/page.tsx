import BallsGreen from './components/balls/balls'
import Navbar from './components/balls/navbar'
import PrimaryButton from './components/button/primary-button'
import Image from 'next/legacy/image'
import Robot from '@/assets/robot.png'

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] px-36 py-10 bg-black relative">
      <BallsGreen />
      <div className='absolute bottom-10 right-10'>
        <Image src={Robot} alt='robot' width={400} height={400} objectFit='cover'/>
      </div>
      <Navbar />
      <section className='mt-20 z-20'>
        <div className='flex'>
          <h6 className='text-white mt-'>welcome ideas</h6>
        </div>

        <div className='mt-3'>
          <h1 className='text-[2.6rem] text-white'>
           <span className='text-green-500'>Fullstack</span> Mastery
            <br />
            Code, Create, Conquer Together.
          </h1>
          <p className='text-white text-xs mt-2'>Mastering both front-end finesse and back-end wizardry, crafting seamless digital experiences.</p>
        </div>

        <div className='mt-10'>
          <PrimaryButton>
            Get Started
          </PrimaryButton>
        </div>

        <div className='mt-10 py-10 px-5 border-2 border-green-900 flex justify-evenly items-center text-green-400' style={{
          background: "rgba(255, 255, 255, 0.18)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border:" 1px solid rgba(255, 255, 255, 0.3)",
        }}>
          <h1 className='font-bold'>PHP</h1>
          <h1 className='font-bold'>TypeScript</h1>
          <h1 className='font-bold'>Golang</h1>
          <h1 className='font-bold'>Dart</h1>
        </div>
      </section>


    </main>
  )
}
