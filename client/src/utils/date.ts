import moment from "moment-timezone"

export function formatDateBrazil(data: string): string {
  return moment.utc(data).tz("America/Sao_Paulo").format("DD/MM/YYYY")
}
