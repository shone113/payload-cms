export interface ContentWithMediaBlock {
  id?: string
  heading?: any
  content?: any

  button?: {
    label?: string
    link?: {
      id?: string
      slug?: string
      [key: string]: any
    }
  }
  secondaryHeading?: any
  images?: {
    id?: string
    image: any
  }[]

  secondaryButton?: {
    label?: string
    link?: {
      id?: string
      slug?: string
      [key: string]: any
    }
  }
  backgroundImage: any
}
