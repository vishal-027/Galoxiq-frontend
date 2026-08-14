import Home from './pages/Home.jsx'
import './App.css'

// This is the top of the app. Right now it just shows the Home
// page. When you add more pages (About, Plans, Contact) later,
// you'll add react-router here to switch between them.
function App() {
  return (
    <div className="app">
      <Home />
    </div>
  )
}

export default App
