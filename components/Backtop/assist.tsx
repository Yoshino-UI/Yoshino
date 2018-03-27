export const backTop = (durations:number, callback: () => void | undefined) => {
  let dom: HTMLElement;
  if (document.documentElement.scrollTop) {
    dom = document.documentElement
  } else {
    dom = document.body
  }
  const scrollTop = dom.scrollTop

  for (var i = 60; i >= 0; i--) {
    setTimeout((i => {
      return () => {
        dom.scrollTop = scrollTop * i / 60
        if (i === 0 && typeof callback === 'function') {
          callback()
        }
      }
    })(i), durations * (1 - i / 60))
  }
}
