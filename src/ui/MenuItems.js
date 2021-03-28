import { memo } from 'react'
import MenuCategory from './MenuCategory'
import MenuEffect from './MenuEffect'
import cx from 'classnames'
import { tw } from 'twind'

const MenuItems = ({ items, menuCategoryName, onClick, selectedItem, baseIndex = 0 }) => (
  <>
    <MenuCategory name={menuCategoryName} />
    {items.map((item, index) => (
      <div key={item.id}>
        <div
          onClick={() => onClick(index + baseIndex)}
          className={cx(
            {
              'transition-colors ease-in delay-300': index + baseIndex === selectedItem,
            },
            'flex relative cursor-pointer z-0'
          )}
        >
          <div className="w-full pt-1">
            <div className="absolute w-full">{index + baseIndex === selectedItem && <MenuEffect className="w-full md:w-1/2" />}</div>
            <div className={tw`w-full md:w-1/2 h-6 mb-2 flex hover:bg-menu-item select-none`}>
              <div className="flex items-center relative z-10 py-1 px-2 w-4/6">{item.name}</div>
              <div className="flex items-center relative z-10 py-1 px-2 w-1/6">{item.likes}</div>
              <div className="flex items-center relative z-10 py-1 px-2 w-1/6">{item.weight?.toFixed(1)}</div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
)

export default memo(MenuItems)
