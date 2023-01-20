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

module.exports = {
  validate(schema) {
    return async function (req, res, next) {
      try {
        await schema.parseAsync({
          body: req.body,
          query: req.query,
          params: req.params,
          file: req.file,
        })
        return next()
      } catch (error) {
        return res.status(400).json({
          message: generateErrorMessage(error.issues, options),
        })
      }
    }
  },
}
