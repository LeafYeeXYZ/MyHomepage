import '../App.css'
import Weather from './Weather.jsx'
import Links from './Links.jsx'
import Compass from './Compass.jsx'
import Cover from './Cover.jsx'

function App() {
  return (
    <main className='container'>
      <Weather />
      <Compass />
      <Links />
      <Cover />
    </main>
  )
}

export default App
