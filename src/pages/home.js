import { useSelector } from "react-redux";

export const Home = () => {
  const username = useSelector((state) => state.user.value.username);
  const userprofession = useSelector((state) => state.user.value.profession);

  return (
    <div>
      <h1>THIS IS THE HOMEPAGE</h1> 
      <h2>{username}</h2>
      <h2>{userprofession}</h2>
    </div>
  );
}