import React from 'react'

import './style.css'

function DevItem (props) {
	let { dev } = props
	return (
		<li key={dev._id} className="dev-item">
			<header>
			<img src={dev.avatar_url} alt="Avatar" />
			<div className="user-info">
				<strong>{dev.name}</strong>
				<span>{dev.techs.join(', ')}</span>
			</div>
			</header>
			<p onClick={console.log(dev)}>{dev.bio}</p>
			<a href={`https://github.com/${dev.github_username}`}>Acessar perfil do Github</a>
		</li>
	)
}

export default DevItem