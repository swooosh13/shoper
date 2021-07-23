import { Footer, Header } from './components/index';
import { Content } from './components/Content/Content';

import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <div className="body">
        <Header />
        <Content />
        <Footer />
      </div>

    </div>
  );
}

export default App;
