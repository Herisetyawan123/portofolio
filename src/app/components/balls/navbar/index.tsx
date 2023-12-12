import Link from "next/link";
import PrimaryButton from "../../button/primary-button";

export default function Navbar(){
  return (
    <nav className="w-[100%] text-green-600 flex justify-between items-center">
      <div>
        LOGO
      </div>

      <div>
        <ul className="list-none flex gap-20 text-white">
          <li>
            <Link href={'/'} className="border-b-4 border-black hover:border-green-300 hover:text-green-300 transition-all duration-300 px-5 py-4">Home</Link>
          </li>
          <li>
            <Link href={'/'} className="border-b-4 border-black hover:border-green-300 hover:text-green-300 transition-all duration-300px-5 py-4">About</Link>
          </li>
          <li>
            <Link href={'/'} className="border-b-4 border-black hover:border-green-300 hover:text-green-300 transition-all duration-300-5 py-4">Contact</Link>
          </li>
          <li>
            <Link href={'/'} className="border-b-4 border-black hover:border-green-300 hover:text-green-300 transition-all duration-300-5 py-4">Project</Link>
          </li>
        </ul>
      </div>


        <PrimaryButton>
          Get CV
        </PrimaryButton>
 
    </nav>
  )
}