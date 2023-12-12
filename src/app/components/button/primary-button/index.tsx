export default function PrimaryButton({ children }: { children: React.ReactNode }){
  return (
    <button className="border border-green-300 rounded-lg px-8 py-2 hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-2xl transition-all duration-300 text-green-300">
      { children }
    </button>
  )
}