import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { postApi } from "services/post-service";
import { Loader } from "widgets/loader";

export function PostDetails(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams();
  const paramId = id ? parseInt(id, 10) : 0;
  const { data: post, isLoading } = postApi.useFetchPostItemQuery(paramId)

  if (isLoading) {
    return <Loader />
  }

  if (post) {
    return (
      <div className="page posts-item-page">
        <h1 style={{ textTransform: "uppercase" }}>{post.title}</h1>
        <p>{post.body}</p>
        <Button type="primary" onClick={() => navigate("/")}>Вернуться</Button>
      </div>
    )
  }

  return (
    <div className="page">
      <h1>Не удалось загрузить пост под номером №{id}</h1>
      <Button type="primary" onClick={() => navigate("/")}>Вернуться</Button>
    </div>
  )

}