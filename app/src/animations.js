import animation from 'nanoanimation'

export function makeFadeIn(additionalTimingProperties = {}) {
  const keyframes = [{opacity: 0}, {opacity: 1}]

  const timingProperties = {
    duration: 125,
    fill: 'forwards',
    easing: 'ease-in-out',
  }

  return animation(
    keyframes,
    Object.assign({}, timingProperties, additionalTimingProperties),
  )
}

export const fadeIn = makeFadeIn()
