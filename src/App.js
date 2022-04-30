import './styles/App.css'
import Header from './components/Header.jsx'
import Menu from './components/index/menu/Menu.jsx'
import Main from './components/index/main/Main.jsx'

function App() {
  return (
    <div className='App'>
      <Header />
      <Menu />
      <Main />
    </div>
  )
}

export default App
