import express from 'express'
import TemplateController from '../controllers/template.controller'

const templateRouter = express.Router()

templateRouter.post('/formatPhone', TemplateController.getFormatPhone)
templateRouter.post('/sendSmS', TemplateController.sendSmS)


export default templateRouter
