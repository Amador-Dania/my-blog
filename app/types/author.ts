import Post from "./post";

export default interface Author {
  id: string;
  author: string;
  posts: Post[];
}
