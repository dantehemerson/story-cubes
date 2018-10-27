import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
	
`

class Home extends React.Component {
	render() {
		return(
			<Container>
				Home
				<Link to='/about'>Go to About</Link>
			</Container>
		)
	}
}

export default Home