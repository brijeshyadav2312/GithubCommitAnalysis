import './App.css';
import DetailCard from './components/Card';
import Header from './components/Header';
import PaginationComp from './components/Pagination';

function App() {
  return (
    <div className="App" style={{margin:'0 3rem'}}>
      <Header/>
      <DetailCard />
      <br/>
      <PaginationComp />
      <br/>
    </div>
  );
}

export default App;
