import styled from 'styled-components'

const renderAs = tagName => ({children, ...props}) => (
  <BodyHeading {...props} as={tagName}>
    {children}
  </BodyHeading>
)

export default Heading

export const H2 = renderAs('h2')
export const H3 = renderAs('h3')
export const H4 = renderAs('h4')
export const H5 = renderAs('h5')

export const MarkdownHeading = ({children, level, ...props}) => (
  <BodyHeading {...props} as={`h${level}`}>
    {children}
  </BodyHeading>
)
