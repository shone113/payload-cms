export interface ContentWithMediaBlock {
  id?: string
  content?: any
  images?: {
    id?: string
    image: any
  }[]
  button?: {
    label?: string
    link?: {
      id?: string
      slug?: string
      [key: string]: any
    }
  }
}
