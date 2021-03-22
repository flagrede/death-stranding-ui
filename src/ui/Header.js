import Credits from './Credit'
import TopBar from './TopBar'

const Header = () => {
  return (
    <>
      <Credits />
      <TopBar />
      <div className="inset-x-0 flex justify-between p-2 mx-auto border-b border-gray-100 border-opacity-10 mb-4">
        <h1 className="text-3xl">Delivery Preparation</h1>
        <span>ONLINE</span>
      </div>
    </>
  )
}

export default Header
