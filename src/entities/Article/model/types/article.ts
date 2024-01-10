export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export enum BlockType {
    IMAGE = 'IMAGE',
    CODE = 'CODE',
    TEXT = 'TEXT'
}

export interface ArticleBlockBase {
    id: string
    type: BlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: BlockType.CODE
    code: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: BlockType.TEXT
    title?: string
    paragraphs: string[]
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: BlockType.IMAGE
    src: string
    title: string
}

export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock

export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}
