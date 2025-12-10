export interface ContentWithMediaBlock {
  id?: string
  content?: any // može RichTextData
  image?: any // može MediaData
  textPosition?: 'Left' | 'Right'
}
