import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="song-list-container">
      <SongList />
    </div>
    <div className="song-detail-container">
      <SongDetail />
    </div>
    </div>
  );
}

export default App;
