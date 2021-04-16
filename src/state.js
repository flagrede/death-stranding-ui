import { proxyWithComputed } from 'valtio/utils'
import generateItems from './utils/generateItems'

const state = proxyWithComputed(
  {
    selectedItem: 0,
    allItems: [...generateItems(9, 'private'), ...generateItems(3, 'share'), ...generateItems(3, 'sam')],
    likeSound: () => null,
    playMenuChange: () => null,
    playMenuAction: () => null,
    playMenuValidate: () => null,
    playMail: () => null,
    playRingtone: () => null,
    isThreeLoaded: false,
  },
  {
    isPrivateLocker: ({ selectedItem, allItems }) => allItems[selectedItem].category === 'private',
    isShareLocker: ({ selectedItem, allItems }) => allItems[selectedItem].category === 'share',
    isSamCargo: ({ selectedItem, allItems }) => allItems[selectedItem].category === 'sam',
    itemsPrivateLocker: ({ allItems }) => allItems.filter((item) => item.category === 'private' && item.likes >= 0),
    itemsShareLocker: ({ allItems }) => allItems.filter((item) => item.category === 'share' && item.likes >= 0),
    itemsSam: ({ allItems }) => allItems.filter((item) => item.category === 'sam' && item.likes >= 0),
    allItemsSorted: ({ itemsPrivateLocker, itemsShareLocker, itemsSam }) => [...itemsPrivateLocker, ...itemsShareLocker, ...itemsSam],
    selectedId: ({ selectedItem, allItems }) => allItems[selectedItem].id,
    selectedCategory: ({ selectedItem, allItems }) => allItems[selectedItem].category,
    totalWeight: ({ itemsSam }) => itemsSam.reduce((acc, value) => acc + value.weight, 0),
  }
)

export default state
