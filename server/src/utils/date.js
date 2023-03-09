const moment = require("moment-timezone")

function formatToBrTimeZone(date) {
  return moment(date).tz("America/Sao_Paulo").format("DD/MM/YYYY")
}

module.exports = {
  formatToBrTimeZone,
}
