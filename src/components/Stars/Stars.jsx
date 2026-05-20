import { useMemo } from 'react'
import './Stars.css'

// Creates an array of random star config objects
function generateStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top:    Math.random() * 100,
    left:   Math.random() * 100,
    size:   Math.random() * 1.8 + 0.4,   // 0.4px – 2.2px
    delay:  Math.random() * 6,            // twinkle animation offset
    dur:    Math.random() * 3 + 3,        // 3s – 6s twinkle cycle
    layer:  Math.floor(Math.random() * 3) // 0 = near, 1 = mid, 2 = far
  }))
}

export default function Stars() {
  // useMemo so the star positions don't re-randomise on every render
  const stars = useMemo(() => generateStars(260), [])

  return (
    <div className="stars-canvas" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className={`star layer-${s.layer}`}
          style={{
            top:              `${s.top}%`,
            left:             `${s.left}%`,
            width:            `${s.size}px`,
            height:           `${s.size}px`,
            animationDelay:   `${s.delay}s`,
            animationDuration:`${s.dur}s`,
          }}
        />
      ))}

      {/* Nebula-like soft gradient blobs */}
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />

      {/* Shooting star elements */}
      <div className="shooting-star s1" />
      <div className="shooting-star s2" />
      <div className="shooting-star s3" />
    </div>
  )
}
