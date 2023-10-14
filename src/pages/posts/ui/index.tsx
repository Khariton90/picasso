import { useEffect, useState } from "react";
import { postApi } from "services/post-service";
import { Loader } from "widgets/loader";
import { useInView } from "react-intersection-observer";
import { PostList } from "widgets/post-list";
import "./style.css";

const MAX_LIMIT = 100;
const DEFAULT_LIMIT = 10;

export function PostsPage(): JSX.Element {
  const [currentLimit, setCurrentLimit] = useState(DEFAULT_LIMIT);
  const [fetching, setFetching] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1.0,
  })

  const { data: posts, isLoading, error } = postApi.useFetchPostsQuery(currentLimit);

  useEffect(() => {
    if (inView) {
      setFetching(prev => prev = true);
    }
  }, [inView, isLoading]);

  useEffect(() => {
    if (fetching && currentLimit < MAX_LIMIT) {
      setCurrentLimit((prev) => prev + DEFAULT_LIMIT);
    }

    setFetching(prev => prev = false);
  }, [currentLimit, fetching])


  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return (
      <h1>Произошла ошибка 404</h1>
    )
  }

  return (
    <>
      <div className="page posts-page">
        <h1>Список постов:</h1>
        {posts && <PostList posts={posts} />}
      </div>
      <footer ref={ref} className="footer">{inView}</footer>
    </>

  )
}