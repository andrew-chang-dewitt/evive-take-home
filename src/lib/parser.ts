import {determineMenu, isMenu, isOrderItem, MenuName, OrderItem} from './menu'

export default function parse(input: string): [MenuName, OrderItem[]] {
  const [name, ...rest] = input.split(' ')

  // guard against invalid menu names
  if (!isMenu(name)) throw "Invalid menu name!"
  const menu = determineMenu(name)

  // gather remaining words into one string to represent orders
  // this optionally allows spaces in between numbers in order lists
  const itemStrs = rest.join('')

  // guard against empty order lists
  if (itemStrs.length === 0) return [menu, []]

  const itemStrsArr = itemStrs.length === 0
    ? []
    : itemStrs.split(',')
  const items = itemStrsArr.map(i => {
    const res = parseInt(i.trim()) - 1

    if (!isOrderItem(res)) throw "Invalid order item!"

    return res
  })

  return [menu, items]
}
