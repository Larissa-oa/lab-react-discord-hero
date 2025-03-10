import { useState } from 'react'
import discordLogo from './assets/logo.png'
import menuIcon from './assets/menu.png'
import backgroundImage from './assets/background.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "App">
<nav><img id='discordLogo' src={discordLogo} alt='Discord Logo'/>
<img id='menuIcon' src={menuIcon} alt='Menu icon'/>
</nav>
<header><h1>Imagine a place...</h1></header>
<section id='container'>
<p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends con spend time together. A place that makes it easy to talk every day and hang out more often.</p>
<button id ='download-btn'>Download for Mac</button>
<button id = 'open-btn'>Open Discord on your browser</button>
</section>
<section id='background-image'>
<img src={backgroundImage} alt='Background Image' />
</section>

</div>
  )
}

export default App
