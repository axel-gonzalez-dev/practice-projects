import { useState } from 'react'
import './App.scss'

//Images
import logo from './assets/restaurant-background.jpg';

// Component
import Navbar from './components/Navbar/index';

function App() {

  return (
    <>
      < Navbar />

      <main>

        <section className='hero'>
          <h1>Good Food, great vives</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aliquam dignissimos tempore vel quod eligendi ab quidem minima et fugit.</p>
          <button>Book a table</button>
        </section>

      </main>
    </>
  )
}

export default App
