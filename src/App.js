import './App.css';
import BasicTable from './components/BasicTable';
import Navbar from './components/Navbar';
import PaginationTable from './components/PaginationTable';
import SearchSection from './components/SearchSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchSection />
      {/* <BasicTable /> */}
      <PaginationTable />
    </div>
  );
}

export default App;
