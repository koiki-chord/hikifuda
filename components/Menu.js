import styled from 'styled-components'

const Div = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
`
const Icon = styled.img`
  padding-top: 10px;
  width: 32px;
  height: 32px;
`

const Menu = () => (
  <Div>
    <Icon src='/static/svg/humberger.svg' />
  </Div>
)

export default Menu
