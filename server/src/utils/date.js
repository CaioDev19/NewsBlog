const moment = require("moment-timezone")

function formatToUtcTimeZone() {
  return moment.utc().format()
}

module.exports = {
  formatToUtcTimeZone,
}
