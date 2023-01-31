import { useEffect, useState } from 'react'

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

export const useParseCSV = (file: File) => {
  const [rows, setRows] = useState<Row[]>([])
  const [headers, setHeaders] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const parseCSV = (csvString: string) => {
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

      return { translatedHeaders, mappedRows }
    }

    const fileReader = new FileReader()

    fileReader.readAsText(file)

    fileReader.onload = () => {
      if (typeof fileReader.result !== 'string') {
        setError(
          'Expected datatype of result to be string but received result as ' +
            typeof fileReader.result
        )
        return
      }

      const { translatedHeaders, mappedRows } = parseCSV(fileReader.result)
      setRows(mappedRows)
      setHeaders(translatedHeaders.filter((header) => header !== null))
      setIsLoading(false)
    }

    fileReader.onerror = () => {
      setError(fileReader.error?.message)
    }
  }, [])

  return { headers, rows, isLoading, error }
}
