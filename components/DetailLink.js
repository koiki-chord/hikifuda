import styled from 'styled-components'
import Link from 'next/link'

const Div = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const Icon = styled.img`
  width: 32px;
  height: 32px;
`

const Span = styled.span`
  font-size: 24px;
`
const DetailLink = ({ message }) => (
  <Div>
    <Icon src='/static/svg/allow.svg' />
    <Span>{message}</Span>
  </Div>
)

export default DetailLink
