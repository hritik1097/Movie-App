import './App.css';
import Header from './component/Header';
import Movies from './component/Movies';
import movies from './data.json';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className="main">
        {
          movies.map((element) => {
            return (
              <Movies
                title={element.Title}
                year={element.Year}
                img={element.Poster}

              />
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
