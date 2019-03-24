// import Link from 'next/link'
import styled from 'styled-components'
import SearchForm from './SearchForm'
import Menu from './Menu'

// const linkStyle = {
//   marginRight: 15
// }

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 101;
  margin-bottom: 10px;
`

const Icon = styled.img`
  width: 50px;
  height: 50px;
`

const Header = () => (
  <Wrapper>
    <Icon src='/static/icon.png' alt='my image' />
    <SearchForm />
    <Menu />
    {/* <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href='/about'>
      <a style={linkStyle}>About</a>
    </Link> */}
  </Wrapper>
)

export default Header
