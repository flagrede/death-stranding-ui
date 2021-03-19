import { tw } from 'twind'
import Footer from './Footer'
import Header from './Header'
import Inventory from './Inventory'
import ItemDescription from './ItemDescription'

const HtmlOverlay = () => (
  <div className={tw`absolute bg-black bg-opacity-10 inset-0 pt-20 text-menu-text z-10`}>
    <Header />
    <div className="flex flex-col md:flex-row h-4/6 overflow-y-scroll no-scrollbar">
      <Inventory />
      <ItemDescription />
    </div>
    <Footer />
  </div>
)

export default HtmlOverlay
