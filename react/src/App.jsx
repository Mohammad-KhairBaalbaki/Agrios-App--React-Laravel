import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import Info from './components/navbar/Info'
import Menu from './components/navbar/Menu'



function App() {
  

  return (
    <>
      <header>
        <Info/>
        <nav className='navbar' >
          <Menu/>
        </nav>
      </header>
      <main>
        
      </main>
      <footer>

      </footer>
      
    </>
  )
}

export default App
