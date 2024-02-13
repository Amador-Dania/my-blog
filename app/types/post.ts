import author from "./author";

export default interface Post {
  id: number;
  author: author;
  title: string;
  createdAt: string;
  content: string;
}
