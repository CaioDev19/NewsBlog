const { admin } = require("../config/firebase")

module.exports = {
  async checkToken(req, res, next) {
    const headerAuth = req.headers.authorization

    if (!headerAuth)
      return res.status(401).json({ message: "Token must be sent." })

    const token = headerAuth.split(" ")[1]

    try {
      const decodedToken = await admin.auth().verifyIdToken(token)

      if (!decodedToken) {
        return res.status(401).json({
          message:
            "To access this feature, a valid authentication token must be submitted.",
        })
      }

      req.admin = decodedToken
      return next()
    } catch (error) {
      console.log(error)

      return res.status(401).json({
        message:
          "To access this feature, a valid authentication token must be submitted.",
      })
    }
  },
}
