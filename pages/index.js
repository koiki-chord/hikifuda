import Layout from '../components/Layout.js'
import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const Index = props => (
  <div>
    <Head>
      <title>Hikifuda - Community / Event Detail</title>
      <link
        href='https://fonts.googleapis.com/css?family=Spectral:400,700'
        rel='stylesheet'
      />
      <link
        rel='shortcut icon'
        href='/static/favicon.ico'
        type='/static/favicon.ico'
      />
    </Head>
    <Layout>
      <Title>Community Detail</Title>
      {/* <Link
        as={`/p/${props.community.id}`}
        href={`/post?id=${props.community.id}`}
      >
        <a>{props.community.name}</a>
      </Link> */}
    </Layout>
    <style global jsx>{`
      html {
        font-family: 'Spectral', serif;
      }
    `}</style>
  </div>
)

Index.getInitialProps = async function() {
  // TODO mock api response
  // const res = await fetch('http://www.mocky.io/v2/5c87b65d320000af133bd443')
  // const data = await res.json()

  const data = {}

  console.log('response', data)

  return {
    community: data
  }
}

export default Index
