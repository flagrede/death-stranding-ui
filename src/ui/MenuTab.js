import { memo } from 'react'
import { tw } from 'twind'

const MenuTab = ({ children, className }) => (
  <div className={tw`flex items-center bg-menu-header text-xs h-6 px-2 edge-corner mb-2 ${className}`}>{children}</div>
)

export default memo(MenuTab)
