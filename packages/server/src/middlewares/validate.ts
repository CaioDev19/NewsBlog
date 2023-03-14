import { NextFunction, Response, Request } from "express"
import { AnyZodObject } from "zod"

const { generateErrorMessage } = require("zod-error")

const options = {
  maxErrors: 1,
  delimiter: {
    component: " ",
  },
  path: {
    enabled: false,
  },
  code: {
    enabled: false,
  },
  message: {
    enabled: true,
    label: "",
  },
}

export function validate(schema: AnyZodObject) {
  return async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        file: req.file,
      })
      return next()
    } catch (error: any) {
      return res.status(400).json({
        message: generateErrorMessage(error.issues, options),
      })
    }
  }
}
