import { memo, useState } from 'react'
import useFetchData from '../../hooks/useFetchData'
import { MakerArtsTypes } from '../../types/maker'
import ArtPiece from '../ArtPiece/ArtPiece'

interface PaintsProps {
  painter: string
  amount: string
}

const Paints = memo(({ painter, amount }: PaintsProps) => {
  const [page, setPage] = useState(0)

  const { data, isLoading } = useFetchData<MakerArtsTypes>(
    `/collection?key=${
      process.env.REACT_APP_API_TOKEN
    }&involvedMaker=${encodeURI(painter)}${
      +amount > 0 ? `&ps=${amount}` : null
    }&p=${page}`
  )

  const filteredData = data?.artObjects.map((item) => ({
    id: item.id,
    title: item.title,
    painter: item.principalOrFirstMaker,
    links: item.links,
    image: item.webImage || {
      url: '/images/rijks.png',
    },
  }))

  const handlePage = (type: 'next' | 'previous') => {
    if (type === 'next') {
      setPage((prev) => prev + 1)
    } else if (type === 'previous') {
      setPage((prev) => {
        if (prev > 0) {
          return prev - 1
        } else {
          return prev
        }
      })
    }
  }

  return (
    <>
      {data?.artObjects.length === 0 && (
        <p className="flex items-center justify-center w-full mx-auto my-10 text-center text-black">
          No paintings found
        </p>
      )}
      <div className="navButtons">
        <button
          className="navButtons--prev"
          onClick={() => handlePage('previous')}
        >
          Previous page
        </button>
        <span>{page}</span>
        <button className="navButtons--next" onClick={() => handlePage('next')}>
          Next Page
        </button>
      </div>
      <div className="gallery">
        {isLoading ? (
          <div className="flex flex-wrap items-center justify-around w-full h-full gap-5">
            loading
          </div>
        ) : null}

        {filteredData?.map((item) => {
          return <ArtPiece key={item.id} data={item} />
        })}
      </div>
    </>
  )
})

export default Paints
