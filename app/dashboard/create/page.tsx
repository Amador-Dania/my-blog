import CreatePost from "@/app/components/createPost/CreatePost";
import Dashboard from "@/app/components/dashboard/Dashboard";

export default function Create() {
  return (
    <>
      <Dashboard>
        <CreatePost />
      </Dashboard>
    </>
  );
}
