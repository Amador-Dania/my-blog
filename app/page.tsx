import PostList from "./components/postList/PostList";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navigation/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Dashboard>
        <PostList />
      </Dashboard>
    </main>
  );
}
