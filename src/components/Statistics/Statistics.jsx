import { Heading, Nutrients } from "./index";
import styles from "./statistics.module.css";

const Statistics = ({ userData }) => {
  const { informations } = userData;

  return (
    <section className={styles.statistics}>
      <Heading identity={informations.identity} />
      <Nutrients nutrients={informations.nutrients} />
    </section>
  );
};

export default Statistics;