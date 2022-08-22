import { Home } from "./components/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { PageLayout } from "./PageLayout";
import { Create } from "./Form/Create";
import { BlogDetails } from "./components/BlogDetails";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />}/>
        <Route path="/create" element={<Create />} />
        <Route path="/blogs/:title" element={<BlogDetails />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
