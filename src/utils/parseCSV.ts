const HEADER = {
  RECIPIENT: 'recipient',
  AMOUNT: 'amount',
  DATE: 'date',
  ID: 'id',
} as const

export type RowType = {
  [HEADER.RECIPIENT]: string
  [HEADER.AMOUNT]: number
  [HEADER.DATE]: string
  [HEADER.ID]: string
}

export type HeaderType = keyof RowType

const headerTranslations: Record<string, HeaderType> = {
  'Beguenstigter/Zahlungspflichtiger': 'recipient',
  Betrag: 'amount',
  Buchungstag: 'date',
  'Kontonummer/IBAN': 'id',
}

const getDataFromCSVString = (csvString: string) => {
  return csvString.split(/\r?\n/).map((row) => row.replace(/\"/g, '').split(';'))
}

export const parseCSV = async (file: File) => {
  const csvString = await file.text()
  const data = getDataFromCSVString(csvString)
  const headers = data[0].reduce((acc: HeaderType[], header) => {
    return headerTranslations[header] ? [headerTranslations[header], ...acc] : acc
  }, [])

  const rows: RowType[] = []
  for (let i = 1; i < data.length; i++) {
    const row: RowType = { amount: 0, id: '', recipient: '', date: '' }
    for (let j = 0; j < data[i].length; j++) {
      const translatedHeader = headerTranslations[data[0][j]]
      if (!translatedHeader) continue
      switch (translatedHeader) {
        case HEADER.AMOUNT:
          row[HEADER.AMOUNT] = +data[i][j].replace(',', '.')
          break
        // case HEADER.DATE:
        //   const [day, month, year] = data[i][j].split('.')
        //   const date = new Date(+year, +month - 1, +day).toLocaleDateString()
        //   row[HEADER.DATE] = date
        //   break
        default:
          row[translatedHeader] = data[i][j]
      }
    }
    rows.push(row)
  }

  return { headers, rows }
}
