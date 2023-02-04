type HeaderTranslationsType = 'recipient' | 'amount' | 'date' | 'id'

export type RowType = Record<HeaderTranslationsType, string>

const headerTranslations: Record<string, HeaderTranslationsType> = {
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
  const headers = data[0].reduce((acc: string[], header) => {
    return headerTranslations[header] ? [headerTranslations[header], ...acc] : acc
  }, [])

  const rows: RowType[] = []
  for (let i = 1; i < data.length; i++) {
    const row: RowType = { amount: '', id: '', recipient: '', date: '' }
    for (let j = 0; j < data[i].length; j++) {
      const translatedHeader = headerTranslations[data[0][j]]
      if (translatedHeader) {
        row[translatedHeader] = data[i][j]
      }
    }
    rows.push(row)
  }

  console.log(headers)
  console.log(rows)

  return { headers, rows }
}
