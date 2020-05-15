export const slugify = (str = "") => {
  let slug = str
    .replace(/\s/g, "-")
  // If the value starts with a number, swap it out!
  // Doing this in a dumb way for now.
  if (slug.match(/^[\d]{1,2}-/)) {
    slug = slug.replace(/^[\d]{1,2}-/, "digit")
  }

  return slug
}

export const throttle = (func, limit) => {
  let lastFunc
  let lastRan
  return function() {
    const context = this
    const args = arguments
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function() {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}