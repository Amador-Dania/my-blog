import Post from "./post";

export default interface author {
  id: string;
  email: string;
  name: string;
  posts: Post[];
}
