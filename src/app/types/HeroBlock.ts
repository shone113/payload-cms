export interface HeroBlock {
  location?: string
  date?: string
  headingLine1?: any
  headingLine2?: any
  content?: string
  button?: {
    label?: string
    link?: {
      id?: string
      slug?: string
      [key: string]: any
    }
  }
  stats?: {
    number: string
    label: string
  }[]

  backgroundImage: any
}
