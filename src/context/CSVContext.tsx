import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { RowType } from '../utils/parseCSV'

type CSVContextType = {
  headers: string[]
  setHeaders: Dispatch<SetStateAction<string[]>>
  rows: RowType[]
  setRows: Dispatch<SetStateAction<RowType[]>>
}

export const CSVContext = createContext<CSVContextType | null>(null)

type CSVContextProviderProps = {
  children: ReactNode
}

export function CSVContextProvider({ children }: CSVContextProviderProps) {
  const [headers, setHeaders] = useState<string[]>([])
  const [rows, setRows] = useState<RowType[]>([])

  return (
    <CSVContext.Provider value={{ headers, setHeaders, rows, setRows }}>
      {children}
    </CSVContext.Provider>
  )
}

export const useCSVContext = () => {
  const csvContext = useContext(CSVContext)

  if (!csvContext) throw new Error('useCSVContext has to be used within <CSVContext.Provider>')

  return csvContext
}
