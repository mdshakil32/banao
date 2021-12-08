import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation/Navigation';
import Banner from './Banner/Banner';
import NestedNav from './NestedNav/NestedNav';
import NewsFeed from './NewsFeed/NewsFeed';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <NestedNav></NestedNav>
      <NewsFeed></NewsFeed>
    </div>
  );
}

export default App;
