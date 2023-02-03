import { Fragment, useMemo } from 'react'
import { useCSVDataContext } from '../context/CSVDataContext'
import { groupRecipientRowsByMonths, groupRecipientTotalsByMonths } from '../utils/groupRows'

function FileAnalysis() {
  const { rows } = useCSVDataContext()

  const recipientRowsByMonths = useMemo(() => groupRecipientRowsByMonths(rows), [rows])
  const recipientTotalsByMonths = useMemo(() => groupRecipientTotalsByMonths(rows), [rows])

  return (
    <div>
      {Object.keys(recipientRowsByMonths).map((month) => (
        <Fragment key={`month-${month}`}>
          <h2>
            {month}:{' '}
            <span className="income">{recipientTotalsByMonths[month].totalIncome} EUR</span>{' '}
            <span className="expenses">{recipientTotalsByMonths[month].totalExpenses} EUR</span>
          </h2>
          {Object.keys(recipientRowsByMonths[month]).map((recipient) => (
            <Fragment key={`month-${month}&recipient-${recipient}`}>
              <h3>
                {recipient}: {recipientTotalsByMonths[month][recipient]} EUR
              </h3>
              {recipientRowsByMonths[month][recipient].map((row, rowIndex) => (
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
