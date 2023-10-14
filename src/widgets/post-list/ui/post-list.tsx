import { List, Button } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { Post } from "services/post-service"

type PostListProps = {
  posts: Post[]
}

export function PostList({ posts }: PostListProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <List
      className="post-list-wrapper"
      itemLayout="horizontal"
      dataSource={posts}
      renderItem={(item) => (
        <List.Item className="trunc">
          <List.Item.Meta
            title={<Link className="post-title" to={item.id.toString()}>{item.id}{') '}{item.title}</Link>}
            description={item.body}
          />
          <Button type="primary" onClick={() => navigate(`${item.id}`)}>Просмотр</Button>
        </List.Item>
      )}
    />
  )
}