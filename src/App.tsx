import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
    </Routes>
  );
}

export default App;
