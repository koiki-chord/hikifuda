import Layout from '../components/Layout.js'
import styled from 'styled-components'

const Title = styled.p`
  color: red;
  font-size: 50px;
`

export default () => (
  <Layout>
    <Title>Hello Next.js</Title>
  </Layout>
)
