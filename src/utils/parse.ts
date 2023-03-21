import { isString } from "./validators";

export const parsePhone = (phoneReq: any) => {
    if(!isString(phoneReq) || phoneReq.length > 17) {
        throw Error('Invalid Phone')
    }
    return phoneReq.replace(' ', '')
}

export const parseText = (textReq: any) => {
    if(!isString(textReq)) {
        throw Error('Invalid Text')
    }
    return textReq
}