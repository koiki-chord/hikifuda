import Layout from '../components/Layout.js'
import styled from 'styled-components'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const Index = props => (
  <Layout>
    <Title>Community Detail</Title>
    <Link
      as={`/p/${props.community.id}`}
      href={`/post?id=${props.community.id}`}
    >
      <a>{props.community.name}</a>
    </Link>
  </Layout>
)

Index.getInitialProps = async function() {
  // TODO mock api response
  const res = await fetch('http://www.mocky.io/v2/5c87b65d320000af133bd443')
  const data = await res.json()

  console.log('response', data)

  return {
    community: data
  }
}

export default Index
