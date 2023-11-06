import React from 'react'
import "./CardBlock.css"
import CardBlockItem from './CardBlockItem'

const episodeList = [
	{
		img:"https://www.figma.com/file/Fn88HQzfmrE7xCHG0yPsEW/image/0993e56f529b6efc25efc3e321d6655835061406",
		title:"Should you get outboard audio gear?",
		text:"Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.",
		tags:"Gear",
		numOfEpisode:"3",
	},
	{
		img:"https://www.figma.com/file/Fn88HQzfmrE7xCHG0yPsEW/image/2dc74b40297660480ff9140760d8f8d49c3b802b",
		title:"Should you get outboard audio gear?",
		text:"Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.",
		tags:"Tips & Tricks",
		numOfEpisode:"2",
	},
	{
		img:"https://s3-alpha-sig.figma.com/img/e1c7/f584/97be37456f84917e644d4c5caa3c2850?Expires=1699833600&Signature=JR~A7PadbFF724Fyv2ijPO6TvWzkpZP4DhI4xrONIaNUS4ADzo8yXAW2i4bmazSjGQGdFdcyfEdwpH5aVwgFRbb8URQtlB6BwudksZrFpGfqfmHs0OH~pXW0wwer6L81Dhdk60oVGAhlyg81lY2eRuVpQEa6q564W1QQpb7Mra-rWoYhxFrT-ukUBBaHBJQNJZBzjc7MRcZGtZX~TViw3VBTL9geCek1rHioDZrYDS2rQIC5S4Hn3cxE~cQUK-BHcSFsT0ZVzAlYk4l8edIpOD3D2VKKaGLvBa0J5Q546x7wf5UAji3jA-Gy0iPrzhTmPyXF-GoF-RM2zWcQSlqMwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
		title:"The best microphone under $200",
		text:"With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.",
		tags:"Gear",
		numOfEpisode:"1",
	},	
]

const mapEpisodeList = episodeList.map((item)=>(
	<div>
		<CardBlockItem img={item.img} title={item.title} tags={item.tags} numOfEpisode={item.numOfEpisode} text={item.text} />
	</div>
))

const CardBlock = () => {
	return (
		<div className='card_block_colum'>
			{mapEpisodeList}
		</div>
	)
}

export default CardBlock