import Background from '@/assets/background.jpg'
import BallsGreen from './components/balls/balls'
import Navbar from './components/balls/navbar'
import PrimaryButton from './components/button/primary-button'

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] px-36 py-10 bg-black relative">
      <BallsGreen />
      <Navbar />
      <section className='mt-20'>
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
      </section>
    </main>
  )
}
