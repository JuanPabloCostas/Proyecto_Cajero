
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import { IniciarSesion } from './windows/IniciarSesion'
import { Menu } from './windows/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<IniciarSesion />}/>
              
              <Route exact path="/Menu" element={<Menu />}/>
              <Route exact path="/IniciarSesion" element={<IniciarSesion />}/>
              <Route exact path="/Caja" element={<SeleccionBeca/>}/>

              <Route render={() => <h1>Not found!</h1>} />
            </Routes>
          </div>
        </Router>
    </>
  )
}

export default App
