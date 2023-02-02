import { Fragment, useMemo } from 'react'
import { useCSVDataContext } from '../context/CSVDataContext'
import { groupRowsByMonthAndRecipient } from '../utils/groupRowsByMonthAndRecipient'

function FileAnalysis() {
  const { rows } = useCSVDataContext()

  const rowsGroupedByMonthAndRecipient = useMemo(() => groupRowsByMonthAndRecipient(rows), [rows])

  return (
    <div>
      {Object.keys(rowsGroupedByMonthAndRecipient).map((month) => (
        <Fragment key={`month-${month}`}>
          <h2>{month}</h2>
          {Object.keys(rowsGroupedByMonthAndRecipient[month]).map((recipient) => (
            <Fragment key={`month-${month}&recipient-${recipient}`}>
              <h3>{recipient}</h3>
              {rowsGroupedByMonthAndRecipient[month][recipient].map((row, rowIndex) => (
                <p key={`month-${month}&recipient-${recipient}&row-${rowIndex}`}>
                  {row.date}: {row.amount} EUR
                </p>
              ))}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default FileAnalysis
