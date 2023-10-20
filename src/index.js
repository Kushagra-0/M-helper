import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <img className="controlKeys" src="/keyControls.png" alt="control keys" />
  </>,
)
