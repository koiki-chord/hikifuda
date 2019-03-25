import styled from 'styled-components'
import Header from './Header'
import Card from './Card'
import Hr from './Hr'
import H1 from './H1'
import DetailLink from './DetailLink'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

const Layout = props => (
  <Div>
    <Header />
    <Card list={false} />
    <Hr />
    <H1 title='Events' />
    {props.events.map(event => (
      <Card key={event.id} list />
    ))}
    <DetailLink message='Go to Event List' />
    <Hr />
    <H1 title='About this commuity' />
    {props.children}
  </Div>
)

export default Layout
