import { useMemo, useState } from 'react'
import { Layout, Paints } from './components'
import useFetchData from './hooks/useFetchData'
import { MakerArtsTypes } from './types/maker'

const App = () => {
  const [selectedPainter, setSelectedPainter] = useState<string>('')
  const [amount, setAmount] = useState<string>('1')

  const { data, isLoading } = useFetchData<MakerArtsTypes>(
    `/collection?key=${process.env.REACT_APP_API_TOKEN}`
  )

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPainter(e.target.value)
  }

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmount(e.target.value)
  }

  const painters = useMemo(() => {
    if (data) {
      const painters = data.facets.find(
        (item) => item.name === 'principalMaker'
      )!
      const sortedNames = painters.facets.sort((a, b) =>
        a.key.toLowerCase() > b.key.toLowerCase() ? 1 : -1
      )

      return sortedNames
    }
  }, [data])

  const amountArray = Array.from(Array(100).keys())

  return (
    <Layout title="Museum">
      <div className="museum">
        <section className="museum__searchContainer">
          <label htmlFor="painterSearch">Select a Painter </label>
          <select
            data-testid="painterSearch"
            onChange={handleSelect}
            value={selectedPainter}
          >
            {painters?.map((painter) => (
              <option key={painter.key} value={painter.key}>
                {painter.key}
              </option>
            ))}
          </select>

          <div className="museum__searchContainer--amount">
            <label htmlFor="amount">Amount</label>
            <select onChange={handleAmount} value={amount}>
              {amountArray.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className="museum__paintsContainer">
          {selectedPainter && (
            <Paints painter={selectedPainter} amount={amount} />
          )}
        </section>
      </div>
    </Layout>
  )
}

export default App
