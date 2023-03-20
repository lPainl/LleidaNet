export const isNumber = (numberReq: number) => {
    return !isNaN(numberReq)
}
export const isString = (stringReq: any) => {
    return typeof stringReq === 'string' || stringReq instanceof String
}

export const containPlus = (phoneReq: string): boolean => {
    return phoneReq.charAt(0) === '+'
}

export const containDoubleZero = (phoneReq: string): boolean => {
    return phoneReq.charAt(1) + phoneReq.charAt(1) === '00'
}

