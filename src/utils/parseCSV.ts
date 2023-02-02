export type Row = {
  [key: string]: string
}

type HeaderTranslation = {
  [key: string]: string
}

const HEADERS = {
  RECIPIENT: 'recipient',
  AMOUNT: 'amount',
  DATE: 'date',
  ID: 'id',
} as const

const headerTranslation: HeaderTranslation = {
  'Beguenstigter/Zahlungspflichtiger': HEADERS.RECIPIENT,
  Betrag: HEADERS.AMOUNT,
  Buchungstag: HEADERS.DATE,
  'Kontonummer/IBAN': HEADERS.ID,
}

export const parseCSV = async (file: File) => {
  const csvString = await file.text()
  const data = csvString.split(/\r?\n/).map((row) => row.replace(/\"/g, '').split(';'))
  const translatedHeaders = data[0].map((header) => headerTranslation[header] ?? null)
  const mappedRows: Row[] = []
  for (let i = 1; i < data.length; i++) {
    const row: Row = {}
    for (let j = 0; j < translatedHeaders.length; j++) {
      if (translatedHeaders[j] !== null) {
        row[translatedHeaders[j]] = data[i][j]
      }
    }
    mappedRows.push(row)
  }

  return {
    headers: translatedHeaders.filter((header) => header !== null),
    rows: mappedRows,
  }
}