import useFetch from "../../hooks/useFetch";
import styles from "./profile.module.css";
import { useParams } from "react-router-dom";
import SideNav from "../../components/SideNav/SideNav";
import { profileNavLinks } from "./profileNavLinks";
import Statistics from "../../components/Statistics/Statistics";

const Profile = () => {
  const { userId } = useParams();
  const { userData, wait, error } = useFetch(userId);

  if (error) return error.message;
  if (userData === null) return null;

  return (
    <div className={styles.profile}>
      <SideNav copyrights="Copyright, SportSee 2020" links={profileNavLinks} />
      <Statistics userData={userData} />
    </div>
  );
};

export default Profile;