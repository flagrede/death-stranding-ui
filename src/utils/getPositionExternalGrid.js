const X_SPACING = 2
const Y_SPACING = -1

export const getPositionExternalGrid = (index, columnWidth = 3) => {
  const x = (index % columnWidth) * X_SPACING
  const y = Math.floor(index / columnWidth) * Y_SPACING
  return [x, y, 0]
}
