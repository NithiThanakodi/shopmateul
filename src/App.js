import './App.css';
import { Header, Footer } from './components/';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className="mx-w-lg ">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
