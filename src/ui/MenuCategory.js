import { memo } from 'react'
import { tw } from 'twind'

const MenuCategory = ({ name }) => (
  <div className="w-full md:w-1/2">
    <div className={tw`p-1 bg-menu-category bg-opacity-90 border-menu-category edge-corner`}>{name}</div>
  </div>
)

export default memo(MenuCategory)
