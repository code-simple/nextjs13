"use client";

import useSWR from "swr";

const fetcher = (path) =>
  fetch(`https://jsonplaceholder.typicode.com${path}`).then((res) =>
    res.json()
  );

export default function Dashboard() {
  const users = useSWR("/users", fetcher);
  console.log(users);
  if (users.isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>My blog</h1>
      {users.data?.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </>
  );
}

// Alternative Method : Recommended by NextJs13 Docs
// const api = "https://jsonplaceholder.typicode.com/users";

// const loadDataFromServer = async () => {
//   const response = await fetch(api, { cache: "no-store" }); // force fetching is by default but you can ommit it by no-store
//   return response.json();
// };

// export default async function Dashboard() {
//   const users = await loadDataFromServer();
//   return (
//     <>
//       <h1>My blog</h1>
//       {users.map((user) => (
//         <h1 key={user.id}>{user.name}</h1>
//       ))}
//     </>
//   );
// }
