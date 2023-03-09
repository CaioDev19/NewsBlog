const moment = require("moment-timezone")

function formatToBrTimeZone(date) {
  return moment(date).tz("America/Sao_Paulo").format()
}

module.exports = {
  formatToBrTimeZone,
}
