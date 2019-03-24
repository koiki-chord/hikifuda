import styled from 'styled-components'

const Title = styled.h1`
  margin: 0px;
`

const H1 = props => <Title>{props.title}</Title>

H1.defaultProps = {
  title: 'Title'
}

export default H1
