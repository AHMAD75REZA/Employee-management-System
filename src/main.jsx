import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContext from './context/AuthContext.jsx'
// import TaskContext from './context/TaskContext.jsx'
// localStorage.clear() local storage ko clear kr diya hai


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
       
        <App />
       
    </AuthContext>
  </StrictMode>,
)
