import Author from "./author";

export default interface Post {
  id: number;
  title: string;
  author: string;
  publication_date: string;
  content: string;
}
