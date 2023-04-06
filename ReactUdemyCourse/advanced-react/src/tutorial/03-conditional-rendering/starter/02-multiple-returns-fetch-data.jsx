import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          isError(true);
          isLoading(false);
          return;
        }
        const users = await response.json();
        setUsers(users);
      } catch (e) {
        setIsError(true);
        console.log(e);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error...</h2>;
  }

  if (users !== null) {
    const { avatar_url, bio, company, name } = users;
    return (
      <section>
        <h2>Fetch Data</h2>
        <img
          src={avatar_url}
          alt={name}
          style={{ width: "150px", borderRadius: "25px" }}
        />
        <h2>{name}</h2>
        <h3>Work at {company}</h3>
        <h4>{bio}</h4>
      </section>
    );
  }
  return <h2>No Users</h2>;
};
export default MultipleReturnsFetchData;
