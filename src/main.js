import './app.css'
import App from './App.svelte'

console.log('VITE_APP_API_URL =', import.meta.env.VITE_APP_API_URL)

const app = new App({
  target: document.getElementById('app'),
})

export default app
