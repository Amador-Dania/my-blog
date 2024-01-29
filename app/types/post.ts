import Author from "./author";

export default interface Post {
  id: number;
  title: string;
  author: Author;
  publicationDate: string;
  content: string;
}
