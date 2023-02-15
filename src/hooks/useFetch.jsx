import { useEffect, useState } from 'react';
import userServiceApi from "../services/user/User";
import userServiceMock from "../services/user/UserMock";

const userService = process.env.REACT_APP_DATA === "MOCK"
  ? userServiceMock
  : userServiceApi;


/**
 * @typedef {Object} useFetchReturn
 * @property {Lodgings | Lodging | null}  data
 * @property {boolean} loading
 * @property {Error | null} error
 */

/**
 * - Custom Hook to handle service calls
 * - While waiting for service response, {@link loading} is set to true
 * - If service throws an error, a new {@link error} is set
 * - If service returns data from user, setting it to {@link userData}
 * 
 * @param {string} userId 
 * @returns {useFetchReturn}
 */

const useFetch = (userId) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);

        const apiData = await userService.getAllData(userId);
        const [informations, activity, averageSessions, performance] = apiData;

        setUserData({ informations, activity, averageSessions, performance });
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return { userData, loading, error };
};

export default useFetch;