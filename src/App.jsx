import Home from './pages/Home';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { ChatWidget } from './components/chat/chat-widget';

function App() {
  return (
    <div className="site-shell">
      <Home />
      <Footer />
      <BackToTop />
      <ChatWidget />
    </div>
  );
}

export default App;
