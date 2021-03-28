import { tw, css } from 'twind/css'
import Footer from './Footer'
import Header from './Header'
import Inventory from './Inventory'
import ItemDescription from './ItemDescription'
import Loader from './Loader'

const HtmlOverlay = () => (
  <div
    className={tw(
      css`
        @apply absolute inset-0 pt-20 md:px-14 text-menu-text z-10;
        transform: rotate3d(0, 1, 0, 357deg);
      `
    )}
  >
    <Header />
    <div className="flex flex-col md:flex-row h-4/6 overflow-y-scroll no-scrollbar focus:outline-none">
      <Inventory />
      <ItemDescription />
    </div>
    <Footer />
    <Loader />
  </div>
)

export default HtmlOverlay
