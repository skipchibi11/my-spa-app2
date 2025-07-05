import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Card from "./components/Card";
import "./App.css"; // Importing the CSS file

function Home() {
  const cards = [
    {
      title: "El poder de la lampara",
      author: "John Smith",
      description: "Lorem ipsum carrots, enhanced undergraduate developer, but they do occaecat time and vitality.",
      image: "/images/sample.png", // publicフォルダ内の画像を参照
    },
    {
      title: "El poder de la lampara",
      author: "John Smith",
      description: "Lorem ipsum carrots, enhanced undergraduate developer, but they do occaecat time and vitality.",
      image: "/images/sample.png", // publicフォルダ内の画像を参照
    },
  ];

  return (
    <div>
      <div class="site-title">Fityloop</div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
