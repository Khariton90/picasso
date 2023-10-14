import { Route, Routes } from "react-router-dom";
import { PostsPage } from "./posts";
import { PostDetails } from "./post-details";


export function Routing(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/:id" element={<PostDetails />} />
    </Routes>
  )
}