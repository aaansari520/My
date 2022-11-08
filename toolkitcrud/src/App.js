import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <div className="box">
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
