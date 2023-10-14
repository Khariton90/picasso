import { Route, Routes } from "react-router-dom";
import { PostsPage } from "./posts";
import { PostDetails } from "./post-details";


export function Routing(): JSX.Element {
  return (
    <Routes>
      <Route path="/picasso/" element={<PostsPage />} />
      <Route path="/picasso/:id" element={<PostDetails />} />
    </Routes>
  )
}