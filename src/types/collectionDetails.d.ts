interface CollectionDetailsType {
  elapsedMilliseconds: number
  artObject: ArtObject[]
  artObjectPage: ArtObjectPage
}

interface ArtObject {
  links: Link
  id: string
  priref: string
  objectNumber: string
  language: string
  title: string
  copyrightHolder?: any
  webImage: WebImage
  colors: Color[]
  colorsWithNormalization: ColorsWithNormalization[]
  normalizedColors: NormalizedColor[]
  normalized32Colors: any[]
  titles: string[]
  description: string
  labelText?: any
  objectTypes: string[]
  objectCollection: string[]
  makers: any[]
  principalMakers: PrincipalMaker[]
  plaqueDescriptionDutch: string
  plaqueDescriptionEnglish: string
  principalMaker: string
  artistRole?: any
  associations: any[]
  acquisition: Acquisition
  exhibitions: any[]
  materials: string[]
  techniques: any[]
  productionPlaces: string[]
  dating: Dating
  classification: Classification
  hasImage: boolean
  historicalPersons: string[]
  inscriptions: any[]
  documentation: string[]
  catRefRPK: any[]
  principalOrFirstMaker: string
  dimensions: Dimension[]
  physicalProperties: any[]
  physicalMedium: string
  longTitle: string
  subTitle: string
  scLabelLine: string
  label: Label
  showImage: boolean
  location: string
}

interface Link {
  search: string
}

interface WebImage {
  guid: string
  offsetPercentageX: number
  offsetPercentageY: number
  width: number
  height: number
  url: string
}

interface Color {
  percentage: number
  hex: string
}

interface ColorsWithNormalization {
  originalHex: string
  normalizedHex: string
}

interface NormalizedColor {
  percentage: number
  hex: string
}

interface PrincipalMaker {
  name: string
  unFixedName: string
  placeOfBirth: string
  dateOfBirth: string
  dateOfBirthPrecision?: any
  dateOfDeath: string
  dateOfDeathPrecision?: any
  placeOfDeath: string
  occupation: string[]
  roles: string[]
  nationality: string
  biography?: any
  productionPlaces: string[]
  qualification?: any
  labelDesc: string
}

interface Acquisition {
  method: string
  date: string
  creditLine: string
}

interface Dating {
  presentingDate: string
  sortingDate: number
  period: number
  yearEarly: number
  yearLate: number
}

interface Classification {
  iconClassIdentifier: string[]
  iconClassDescription: string[]
  motifs: any[]
  events: any[]
  periods: string[]
  places: any[]
  people: string[]
  objectNumbers: string[]
}

interface Dimension {
  unit: string
  type: string
  precision?: any
  part?: any
  value: string
}

interface Label {
  title: string
  makerLine: string
  description: string
  notes?: any
  date: string
}

interface ArtObjectPage {
  id: string
  similarPages: any[]
  lang: string
  objectNumber: string
  tags: any[]
  plaqueDescription: string
  audioFile1?: any
  audioFileLabel1?: any
  audioFileLabel2?: any
  createdOn: string
  updatedOn: string
  adlibOverrides: AdlibOverride
}

interface AdlibOverride {
  titel?: any
  maker?: any
  etiketText?: any
}
