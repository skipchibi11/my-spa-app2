import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>ホーム</h2>;
}

function Login() {
  return <h2>ログインページ</h2>;
}

function NotFound() {
  return <h2>ページが見つかりません</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">ホーム</Link> | <Link to="/login">ログイン</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;