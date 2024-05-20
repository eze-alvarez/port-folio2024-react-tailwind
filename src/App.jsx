import { Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from '../src/routes/Home'
import Education from '../src/routes/Education'
import Projects from '../src/routes/Projects'
import Contact from '../src/routes/Contact'
import Footer from './components/Footer'
import ProjectDisplay from './routes/ProjectDisplay'
import FloatingIcons from './components/FloatingIcons'
import Thanks from './routes/Thanks'
import Error from './routes/Error'

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/education'>
        <Education />
      </Route>

      <Route path='/projects'>
        <Projects />
      </Route>

      <Route path='/project/:id'>
        <ProjectDisplay />
      </Route>
        
      <Route path='/contact'>
        <Contact />
      </Route>

      <Route path='/thanks'>
        <Thanks />
      </Route>

      <Route path='/'>
        <Error />
      </Route>

    </Switch>
    <FloatingIcons />
    <Footer />
  </>
     
  )
}

export default App
