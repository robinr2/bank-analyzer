import { RowType } from './parseCSV'

type RowsGroupedByRecipientType = {
  [key: string]: RowType[]
}
type RowsGroupedByMonthAndRecipientType = {
  [key: string]: RowsGroupedByRecipientType
}

const getMonth = (date: string) => date.split('.')[1]

export const groupRowsByMonthAndRecipient = (rows: RowType[]) => {
  const months = [
    ...new Set(
      rows.reduce((acc: string[], row) => {
        if (!row.date) return acc
        const month = getMonth(row.date)
        return [month, ...acc]
      }, [])
    ),
  ]

  const recipients = [
    ...new Set(
      rows.reduce((acc: string[], row) => {
        if (!row.recipient) return acc
        return [row.recipient, ...acc]
      }, [])
    ),
  ]

  const rowsGroupedByMonthAndRecipient: RowsGroupedByMonthAndRecipientType = {}
  for (const month of months) {
    const rowsGroupedByRecipient: RowsGroupedByRecipientType = {}
    for (const recipient of recipients) {
      for (const row of rows) {
        if (
          row.date &&
          getMonth(row.date) === month &&
          row.recipient &&
          row.recipient === recipient
        ) {
          if (rowsGroupedByRecipient[recipient]) {
            rowsGroupedByRecipient[recipient].push(row)
            continue
          }
          rowsGroupedByRecipient[recipient] = [row]
        }
      }
    }
    rowsGroupedByMonthAndRecipient[month] = rowsGroupedByRecipient
  }

  return rowsGroupedByMonthAndRecipient
}
