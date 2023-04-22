"use client";
const api = "https://jsonplaceholder.typicode.com/users";

const loadDataFromServer = async () => {
  const response = await fetch(api, { cache: "no-store" }); // force fetching is by default but you can ommit it by no-store
  return response.json();
};

export default async function Dashboard() {
  const users = await loadDataFromServer();
  return (
    <>
      <h1>My blog</h1>
      {users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </>
  );
}
