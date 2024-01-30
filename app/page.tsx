import PostList from "./components/postList/PostList";
import Dashboard from "./components/dashboard/Dashboard";

export default function Home() {
  return (
    <main>
      <Dashboard>
        <PostList />
      </Dashboard>
    </main>
  );
}
