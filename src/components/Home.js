import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FaPlus } from 'react-icons/fa'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 20px;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`
const CountDisplay = styled.div`
  display: inline-block;
  margin-left: 10px;
  user-select: none;
`

function Home(props) {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('Test Text')
  const [savedText, setSavedText] = useState('')
  const { totalCount, setTotalCount } = props
  return (
    <Container>
      <Section>
        <Title>Home</Title>
      </Section>
      <Section>
        <Row>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setCount(count + 1)
              setTotalCount(totalCount + 1)
            }}
          >
            <FaPlus />
          </Button>
          <CountDisplay>
            Count:
            {count}
          </CountDisplay>
        </Row>
      </Section>
      <Section>
        <Row>
          Text Value:
          {savedText}
        </Row>
        <Row>
          <Input value={text} onChange={evt => setText(evt.target.value)} />
          <Button
            variant="contained"
            color="primary"
            onClick={() => setSavedText(text)}
          >
            Submit
          </Button>
        </Row>
      </Section>
      <Section>
        <Row>Custom Count Hook: {totalCount}</Row>
      </Section>
    </Container>
  )
}

Home.propTypes = {
  totalCount: PropTypes.number,
  setTotalCount: PropTypes.func,
}

export default Home
