import { RowType } from './parseCSV'

type RecipientRowsType = {
  [key: string]: RowType[]
}

type RecipientRowsByMonthsType = {
  [key: string]: RecipientRowsType
}

type RecipientTotalsType = {
  totalIncome: number
  totalExpenses: number
  [key: string]: number
}

type RecipientTotalsByMonthsType = {
  [key: string]: RecipientTotalsType
}

const getMonth = (date: string) => date.split('.')[1]

const getMonthsAndRecipients = (rows: RowType[]) => {
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

  return { months, recipients }
}

const rowMatchesMonthAndRecipient = (row: RowType, month: string, recipient: string) => {
  return row.date && getMonth(row.date) === month && row.recipient && row.recipient === recipient
}

export const groupRecipientRowsByMonths = (rows: RowType[]) => {
  const { months, recipients } = getMonthsAndRecipients(rows)

  const recipientRowsByMonths: RecipientRowsByMonthsType = {}
  for (const month of months) {
    const recipientRows: RecipientRowsType = {}
    for (const recipient of recipients) {
      for (const row of rows) {
        if (!rowMatchesMonthAndRecipient(row, month, recipient)) continue
        recipientRows[recipient] = recipientRows[recipient]
          ? [row, ...recipientRows[recipient]]
          : [row]
      }
    }
    recipientRowsByMonths[month] = recipientRows
  }

  return recipientRowsByMonths
}

export const groupRecipientTotalsByMonths = (rows: RowType[]) => {
  const { months, recipients } = getMonthsAndRecipients(rows)

  const recipientTotalsByMonths: RecipientTotalsByMonthsType = {}
  for (const month of months) {
    const recipientTotals: RecipientTotalsType = { totalIncome: 0, totalExpenses: 0 }
    for (const recipient of recipients) {
      recipientTotals[recipient] = 0
      for (const row of rows) {
        if (rowMatchesMonthAndRecipient(row, month, recipient)) {
          const amount = row.amount
          recipientTotals[recipient] += amount
          if (amount < 0) {
            recipientTotals.totalExpenses += amount
            continue
          }
          recipientTotals.totalIncome += amount
        }
      }
    }
    recipientTotalsByMonths[month] = recipientTotals
  }

  return recipientTotalsByMonths
}
