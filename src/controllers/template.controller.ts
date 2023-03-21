import { Request, Response } from "express";
import TemplateService from "../services/template.service";
import { parsePhone, parseText } from "../utils/parse";

export default class TemplateController {
    public static async getFormatPhone(req: Request, res: Response) {
        try {
            const { phone } = req.body
            const phoneInString = parsePhone(phone)
            const phoneType = await TemplateService.validatePhoneType(phoneInString)
            return res.status(200).json(phoneType)
        } catch (e) {
            return res.status(400).json(`Invalid Phone`)
        }
    }

    public static async sendSmS(req: Request, res: Response) {
        try {
            const { phone, textToSend } = req.body
            const phoneInString = parsePhone(phone)
            const text = parseText(textToSend)
            await TemplateService.validatePhoneType(phoneInString)
            await  TemplateService.sendSms(phoneInString, text)
            return res.status(200).json('SmS Sent')
        } catch (e) {
            return res.status(400).json(`Invalid Phone`)
        }
    }
}
