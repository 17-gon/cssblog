
const config = {
  content: ['./build/**/*.html'],
  safelist: {
    greedy: [/c-flex|c-container|js|is-|u-w-|u-hidden/]
  },
  dynamicAttributes: ['aria-expanded', 'aria-expanded', 'data-logic', 'data-href', 'data-st-effect'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
}

module.exports = config
