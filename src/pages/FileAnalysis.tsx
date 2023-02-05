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
        <article key={`month-${month}`}>
          <h2>
            {month}:{' '}
            <span className="income">{recipientTotalsByMonths[month].totalIncome} EUR</span>{' '}
            <span className="expenses">{recipientTotalsByMonths[month].totalExpenses} EUR</span>
          </h2>
          {Object.keys(recipientRowsByMonths[month]).map((recipient) => (
            <details key={`month-${month}&recipient-${recipient}`}>
              <summary>
                {recipient}:{' '}
                <span
                  className={recipientTotalsByMonths[month][recipient] < 0 ? 'expenses' : 'income'}
                >
                  {recipientTotalsByMonths[month][recipient]} EUR
                </span>
              </summary>
              <ul className="mb-0">
                {recipientRowsByMonths[month][recipient].map((row, rowIndex) => (
                  <li key={`month-${month}&recipient-${recipient}&row-${rowIndex}`}>
                    {row.date}:{' '}
                    <span className={+row.amount.replace(',', '.') < 0 ? 'expenses' : 'income'}>
                      {row.amount} EUR
                    </span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </article>
      ))}
    </div>
  )
}

export default FileAnalysis
