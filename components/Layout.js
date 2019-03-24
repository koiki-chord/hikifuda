import styled from 'styled-components'
import Header from './Header'
import Card from './Card'
import Hr from './Hr'

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
    {props.children}
  </Div>
)

export default Layout
