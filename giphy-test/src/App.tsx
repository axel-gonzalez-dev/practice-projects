import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [gifs, setGifs] = useState([]);
  const [inputValue, setInputValue] = useState<string>('cats');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);

    console.log('value is:', e.currentTarget.value);
  };

  const getGyphs = () => {

    try {
      const apiKey="";

      const gifs = fetch('https://api.giphy.com/v1/gifs/search?api_key='+ apiKey+ '='+ inputValue +'&limit=25&offset=0&rating=r&lang=en')
        .then(res => res.json())
        .then(data => {
          setGifs(data?.data)
        }
        );

    } catch (err) {
      console.error(err);
    }

  };

  useEffect(() => {
    getGyphs();
  }, []);

  return (
    <div className="App">
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-primary">Primary button</button>
      </div>

      <main>
        <div className="input-group flex-nowrap">
          <input type="text" className="form-control" placeholder="Search emojis" aria-label="Search emojis" onChange={handleChange} aria-describedby="addon-wrapping" value={inputValue} />
          <span onClick={getGyphs} className="input-group-text" id="addon-wrapping"><img src={reactLogo} alt="" /> Search</span>
        </div>

        <div className="">
          {
            gifs.map((gif, index) => (
              <img src={gif?.images?.original.url} alt="" key={index} />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default App
