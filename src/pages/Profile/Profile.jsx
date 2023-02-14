import useFetch from "../../hooks/useFetch";
import styles from "./profile.module.css";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();
  const { userData, wait, error } = useFetch(userId);

  if (error) return error.message;
  if (userData === null) return null;

  return (
    <div className="App">
      <p><b>main:</b> {JSON.stringify(userData.main, null, 2)}</p>
      <br />
      <p><b>activity:</b> {JSON.stringify(userData.activity, null, 2)}</p>
      <br />
      <p><b>averageSessions:</b> {JSON.stringify(userData.averageSessions, null, 2)}</p>
      <br />
      <p><b>performance:</b> {JSON.stringify(userData.performance, null, 2)}</p>
      <br />
    </div>
  );
};

export default Profile;