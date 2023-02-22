import React from 'react';
import styles from "./home.module.css";
import UserCard from "../../components/UserCard/UserCard";
import { GymLogo } from "../../components/svg";

const Home = () => {
  const usersId = ["12", "18"];

  return (
    <div className={styles.home}>
      {usersId.map((userId) => {
        return (
          <UserCard
            key={userId}
            userId={userId}
            Logo={GymLogo}
          />
        );
      })}
    </div>
  );
};

export default Home;