import thumbnail from './thumbnail.jpg';
import './App.css';

function App() {
  return (
    <div className="app">
        <img src={thumbnail} className="thumbnail" alt="thumbnail" />
        <h2>Demo video title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veniam debitis illum rem atque enim excepturi cum est, veritatis maiores!
        </p>
        <a href='/video'>
        <button type="button">watch now</button>
        </a>
    </div>
  );
}

export default App;
