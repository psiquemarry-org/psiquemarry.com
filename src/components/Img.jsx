import { useEffect, useRef, useState } from 'react'

const Img = ({ src, alt, className = '', ...rest }) => {
  const ref = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(Boolean(ref.current?.complete))
  }, [src])

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`img-fade ${loaded ? 'is-loaded' : ''} ${className}`.trim()}
      onLoad={() => setLoaded(true)}
      onError={(e) => (e.currentTarget.style.opacity = 0)}
      {...rest}
    />
  )
}

export default Img
