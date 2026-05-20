import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            // Unobserve after reveal so it only fires once
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    // Observe every element that has the reveal class
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
