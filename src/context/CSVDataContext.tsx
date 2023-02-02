import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { RowType } from '../utils/parseCSV'

type CSVDataContextType = {
  headers: string[]
  setHeaders: Dispatch<SetStateAction<string[]>>
  rows: RowType[]
  setRows: Dispatch<SetStateAction<RowType[]>>
}

export const CSVDataContext = createContext<CSVDataContextType | null>(null)

type CSVDataContextProviderProps = {
  children: ReactNode
}

export function CSVDataContextProvider({ children }: CSVDataContextProviderProps) {
  const [headers, setHeaders] = useState<string[]>([])
  const [rows, setRows] = useState<RowType[]>([])

  return (
    <CSVDataContext.Provider value={{ headers, setHeaders, rows, setRows }}>
      {children}
    </CSVDataContext.Provider>
  )
}

export const useCSVDataContext = () => {
  const csvDataContext = useContext(CSVDataContext)

  if (!csvDataContext)
    throw new Error('useCSVDataContext has to be used within <CSVDataContext.Provider>')

  return csvDataContext
}
