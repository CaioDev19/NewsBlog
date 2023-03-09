const moment = require("moment-timezone")

function formatToBrTimeZone() {
  return moment.utc().format()
}

module.exports = {
  formatToBrTimeZone,
}
