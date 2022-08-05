import "bootstrap/dist/css/bootstrap.min.css";
import './assets/global-styles/app-global.css';
import Layout from "./components/Layout/Layout";
import { Home } from './pages';

function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  )
}

export default App;
