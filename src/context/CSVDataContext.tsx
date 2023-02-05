import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { HeaderType, RowType } from '../utils/parseCSV'

type CSVDataContextType = {
  headers: HeaderType[]
  setHeaders: Dispatch<SetStateAction<HeaderType[]>>
  rows: RowType[]
  setRows: Dispatch<SetStateAction<RowType[]>>
}

export const CSVDataContext = createContext<CSVDataContextType | null>(null)

type CSVDataContextProviderProps = {
  children: ReactNode
}

export function CSVDataContextProvider({ children }: CSVDataContextProviderProps) {
  const [headers, setHeaders] = useState<HeaderType[]>([])
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
