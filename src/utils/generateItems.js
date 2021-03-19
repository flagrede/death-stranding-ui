import itemsData from '../data/items'

const generateItems = (number, category) =>
  new Array(number).fill().map((value, index) => {
    const random = Math.floor(Math.random() * itemsData.length)
    const damage = Math.round(Math.random() * 100)
    return { ...itemsData[random], damage, category, likes: 0, id: `${category}-${index}` }
  })

export default generateItems
