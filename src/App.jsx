import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title}) => {

  const [hasLiked, setHasLiked] = useState(false)

  return (
    <div className="card" >
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
        </button>
    </div>
  )
}

  const App = () => {

    return (
      <div className="card-container">
        <Card title="Star Wars" rating={5} isCool={true}/>
        <Card title="Lord of the Rings" />
        <Card title="Harry Potter" />
      </div>
    )
  }

export default App

