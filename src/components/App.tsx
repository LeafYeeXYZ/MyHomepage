import '../styles/App.css'
import { Weather } from './Weather'
import { Links } from './Links'
import { Compass } from './Compass'
import { Cover } from './Cover'

export function App() {
  return (
    <main className='container'>
      <Weather />
      <Compass />
      <Links />
      <Cover />
    </main>
  )
}