import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/users";

function UserDetailPage() {
  const { id } = useParams();

  const { data: user, isLoading, error } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Link to="/">← Артка</Link>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Телефон: {user.phone}</p>
      <p>Сайт: {user.website}</p>
      <p>Шаар: {user.address.city}</p>
      <p>Компания: {user.company.name}</p>
    </div>
  );
}

export default UserDetailPage;
