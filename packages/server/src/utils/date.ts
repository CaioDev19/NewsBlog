import moment from "moment-timezone"

export function formatToUtcTimeZone() {
  return moment.utc().format()
}
