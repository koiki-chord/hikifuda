import styled from 'styled-components'

const Div = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c9c9c9 url(/static/svg/no_photo_fuji.svg) no-repeat center center;
  background-size: auto 200px;
`
const Span = styled.span`
  color: #434343;
  font-size: 32px;
  font-weight: bold;
`

const Card = props => (
  <Div>
    <Span>{props.title}</Span>
  </Div>
)

Card.defaultProps = {
  title: 'Community Name'
}

export default Card
