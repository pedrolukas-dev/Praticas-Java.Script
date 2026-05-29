import './App.css'
import { Route, Router } from 'react-router-dom'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import Homepage from './assets/pages/Homepage'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <main>
          <Router>
            <Route path='/' element={<Homepage />} />
          </Router>
        </main>
      </Header>
    </>
  )
}

export default App
