interface MakerArtsTypes {
  elapsedMilliseconds: number
  count: number
  countFacets: CountFacet
  artObjects: ArtObject[]
  facets: Facets[]
}

interface CountFacet {
  hasimage: number
  ondisplay: number
}

interface Link {
  self: string
  web: string
}

interface WebImage {
  guid: string
  offsetPercentageX: number
  offsetPercentageY: number
  width: number
  height: number
  url: string
}

interface HeaderImage {
  guid: string
  offsetPercentageX: number
  offsetPercentageY: number
  width: number
  height: number
  url: string
}

interface ArtObject {
  links: Link
  id: string
  objectNumber: string
  title: string
  hasImage: boolean
  principalOrFirstMaker: string
  longTitle: string
  showImage: boolean
  permitDownload: boolean
  webImage: WebImage
  headerImage: HeaderImage
  productionPlaces: any[]
}

interface Facet {
  key: string
  value: number
}

interface Facets {
  facets: Facet[]
  name: string
  otherTerms: number
  prettyName: number
}

export { MakerArtsTypes, Facet, WebImage, Link }
