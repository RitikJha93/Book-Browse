import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.tsx'
import '@smastrom/react-rating/style.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider >
)
