import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter as Router } from 'react-router-dom/cjs/react-router-dom.min.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <App />
</Router>
)
