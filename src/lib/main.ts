import parse from './parser'

export default function take_order(order: string): string {
  const parsed = parse(order)

  return parsed as unknown as string
}
