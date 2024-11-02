import Chance from 'chance'

const c = new Chance()

export const randomUUID = (): string => c.guid()
export const randomName = (): string => c.name()
export const randomEmail = (): string => c.email()
export const randomId = (): string => c.fbid()
export const randomJobTitle = (): string => c.profession()
export const randomCompanyName = (): string => c.company()
export const randomSentence = (words = 5): string => c.sentence({ words })
export const randomTitleText = (words = 3): string => c.sentence({ words })
export const randomParagraph = (sentences = 3): string => c.paragraph({ sentences })