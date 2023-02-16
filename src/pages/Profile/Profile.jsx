import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import SideNav from "../../components/SideNav/SideNav";
import Statistics from "../../components/Statistics/Statistics";
import styles from "./profile.module.css";
import { profileNavLinks } from "./profileNavLinks";

const Profile = () => {
  const { userId } = useParams();
  const { userData, loading, error } = useFetch(userId);

  if (loading) return "chargement...";
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