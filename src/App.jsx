import './App.css'
import Footer from './components/footer/footer'
import Form from './components/form/Form'
import Navbar from './components/navbar/Navbar'
import Subscription from './components/subscription/Subscription'
import Subscribe from './components/subscription/Subscription'


function App() {

  return (
    <div className='app-container'>
      <Navbar/>
      <Form/>
      <Subscription/>
      <Footer/>

    </div>
  )
}

export default App
