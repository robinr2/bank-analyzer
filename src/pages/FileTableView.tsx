import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

type FileTableViewProps = {
  file: File | null
}

type Row = {
  [key: string]: string
}

const HEADERS = {
  RECIPIENT: 'recipient',
  AMOUNT: 'amount',
  DATE: 'date',
  ID: 'id',
} as const

type HeaderTranslation = {
  [key: string]: string
}

const headerTranslation: HeaderTranslation = {
  'Beguenstigter/Zahlungspflichtiger': HEADERS.RECIPIENT,
  Betrag: HEADERS.AMOUNT,
  Buchungstag: HEADERS.DATE,
  'Kontonummer/IBAN': HEADERS.ID,
}

function FileTableView({ file }: FileTableViewProps) {
  if (file === null) return <Navigate to="/" replace />

  useEffect(() => {
    const fileReader = new FileReader()

    fileReader.readAsText(file)

    fileReader.onload = () => {
      if (typeof fileReader.result !== 'string') {
        console.error(
          'Expected datatype of result to be string but received result as ' +
            typeof fileReader.result
        )
        return
      }

      const data = fileReader.result.split(/\r?\n/).map((row) => row.replace(/\"/g, '').split(';'))
      const headers = data[0].map((header) => headerTranslation[header] ?? null)
      const rows: Row[] = []
      for (let i = 1; i < data.length; i++) {
        const row: Row = {}
        for (let j = 0; j < headers.length; j++) {
          if (headers[j] !== null) {
            row[headers[j]] = data[i][j]
          }
        }
        rows.push(row)
      }
    }

    fileReader.onerror = () => {
      console.error(fileReader.error)
    }
  }, [])

  return <h1>{file.name}</h1>
}

export default FileTableView
