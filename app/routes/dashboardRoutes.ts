import PostList from "../components/postList/PostList";
import CreatePost from "../components/createPost/CreatePost";

const dashboardRoutes = [
  {
    path: "/dashboard/posts",
    component: PostList,
  },
  {
    path: "/dashboard/create",
    component: CreatePost,
  },
];

export default dashboardRoutes;
