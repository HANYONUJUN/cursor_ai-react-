import * as U from './util'
// prettier-ignore
export const picsumUrl = (width: number, height: number) : string =>
    `https://picsum.photos/id/${U.random(1, 100)}/${width}/${height}`

export const randomImage = (
    w: 1000, 
    h: 800,
    delta:number = 200

): string => picsumUrl(U.random(w,w + delta), U.random(h,h+delta))

export const randomAvatar = ()=> {
    const size = U.random(200, 400)
    return picsumUrl(size, size)
}
