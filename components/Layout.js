import styled from 'styled-components'
import Header from './Header'
import Card from './Card'
import Hr from './Hr'
import H1 from './H1'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

const Layout = props => (
  <Div>
    <Header />
    <Card />
    <Hr />
    <H1 title='Events' />
    {props.events.map(() => (
      <Card />
    ))}
    {props.children}
  </Div>
)

export default Layout
