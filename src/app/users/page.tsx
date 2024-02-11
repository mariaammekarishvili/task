import Layout from "@/components/Layout";
import UserTable from "@/components/UserTable/UserTable";

const Users: React.FC = () => {
  return (
    <Layout title="მომხმარებლები">
      <UserTable />
    </Layout>
  );
};

export default Users