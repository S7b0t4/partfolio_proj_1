import React from 'react'
import "./MainPart5.css"

import MainPart5Item from './Item/MainPart5Item'

const comment = [
	{
		text:"I can’t recommend this podcast enough",
		author:"Betty Lacey",
		stars: 5,
	},
	{
		text:"I can’t recommend this podcast enough",
		author:"Betty Lacey",
		stars: 5,
	},
	{
		text:"I can’t recommend this podcast enough",
		author:"Betty Lacey",
		stars: 5,
	},
	{
		text:"I can’t recommend this podcast enough",
		author:"Betty Lacey",
		stars: 5,
	},
	{
		text:"I can’t recommend this podcast enough",
		author:"Betty Lacey",
		stars: 5,
	},
	{
		text:"I can’t recommend this podcast enough",
		author:"Betty Lacey",
		stars: 5,
	},
]
const mapComment = comment.map((obj)=>(
	<MainPart5Item text={obj.text} author={obj.author} stars={obj.stars} />
))

const MainPart5 = () => {
	return (
		<div className='main_part_5'>
			{mapComment}
		</div>
	)
}

export default MainPart5