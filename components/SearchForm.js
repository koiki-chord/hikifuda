import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #eee;
  width: 100%;
  height: 50px;
`

const Input = styled.input`
  outline: 0;
  width: 100%;
  min-width: 270px;
  padding: 0 10px;
  border: 0px;
  border-radius: 2px;
  background: none;
  &:hover {
    color: #7fbfff;
  }
`

const Button = styled.button`
  height: 50px;
  background: none;
  color: #666;
  border: none;
  font-size: 20px;
`
const Icon = styled.img`
  width: 24px;
`

const SearchForm = () => (
  <Div>
    <Input name='search' type='search' placeholder='Please input your text' />
    <Button type='submit'>
      <Icon src='/static/svg/glass.svg' />
    </Button>
  </Div>
)

export default SearchForm
