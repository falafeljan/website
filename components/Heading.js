import styled from 'styled-components'

const Heading = styled.h1`
  margin: 0 0 25px;
  font-size: inherit;
  font-weight: normal;
  line-height: 100%;
`

const BodyHeading = styled(Heading)`
  font-weight: bold;
  margin-top: 37px;
`

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
