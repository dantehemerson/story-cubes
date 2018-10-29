import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const Container = styled.li`
	background: ${props => props.color ? props.color : 'gray'};
	border: 2px solid ${ props => props.color ? darken(0.03, props.color) : 'gray' };
	color: white;
	padding: 9px 15px;
	border-radius: 10px;
	margin: 4px 0;
`

const Title = styled.p`
	text-transform: uppercase;
	font-size: 15px;
`

export default props => (
	<Container color={props.color}>

		<Title>{ props.title }</Title>		
	</Container>
)