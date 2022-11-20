import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import type { WebImage } from '../../types/maker'

interface OptimizedImageProps {
  image: WebImage
  alt: string
}

const OptimizedImage = ({ image, alt }: OptimizedImageProps) => {
  const [isLoadStarted, setLoadStarted] = useState(false)

  const handleLoadStarted = () => {
    setLoadStarted(true)
  }
  const handleLoadEnd = () => {
    setLoadStarted(false)
  }

  return (
    <div className="relative">
      <LazyLoadImage
        className={`${isLoadStarted ? 'blur-md' : ''}`}
        src={image.url}
        alt={alt}
        width={image.width}
        height={image.height}
        beforeLoad={handleLoadStarted}
        afterLoad={handleLoadEnd}
      />
    </div>
  )
}

export default OptimizedImage
