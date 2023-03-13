import { Request } from "express"
import { ParamsDictionary } from "express-serve-static-core"

export interface CustomRequest extends Request {
  [index: string]: any
}

export interface CustomBodyParamsRequest<
  T,
  U extends ParamsDictionary
> extends CustomRequest {
  body: T
  params: U
  file: Express.Multer.File
}
