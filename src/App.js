import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app">
        <Header />
        {/* App body */}
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widget */}
    </div>
  );
}

export default App;
