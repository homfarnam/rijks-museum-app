import { useLayoutEffect, useRef, useState } from 'react'
import { Link, WebImage } from '../../types/maker'
import OptimizedImage from '../OptimizedImage/OptimizedImage'

interface ArtPieceProps {
  data: {
    id: string
    title: string
    painter: string
    links: Link
    image: WebImage
  }
}

const ArtPiece = ({ data }: ArtPieceProps) => {
  const [loading, setloading] = useState(true)
  const imageRef = useRef<HTMLElement>(null)
  const [hiddenTexts, setHiddenTexts] = useState({
    title: '',
    show: false,
  })

  useLayoutEffect(() => {
    if (imageRef.current && imageRef.current?.clientHeight) {
      const height = imageRef.current?.clientHeight

      setHiddenTexts({
        title: data.title,
        show: height < 180,
      })
    }
  }, [imageRef, data])

  return (
    <article className="gallery__paint" ref={imageRef}>
      <div className="gallery__paint--cover" />
      <OptimizedImage image={data.image} alt={data.title} />

      <div className="gallery__paint__details">
        <div className={`gallery__paint__details__top`}>
          <span>{data.title}</span>
          <p>{data.painter}</p>
        </div>
        <div className="mt-auto">
          <a
            href={data.links.web}
            className="px-4 py-1 text-black bg-white rounded-md bg-opacity-60"
          >
            Link to the painting
          </a>
        </div>
      </div>
    </article>
  )
}

export default ArtPiece
