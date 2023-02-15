import UserModeling from "./Modeling";
import { main, activity, averageSessions, performance } from "../../mocks/data/users/index";

const modeling = new UserModeling();

class UserServiceMock {

  /**
   * Await a promise that resolve with {@link userData} if it exist or 
   * reject with an error message if not
   * 
   * - if promise rejects, throw an error
   * 
   * @param {Object} userData data retrieved from mock
   */

  async #resolveOrThrow(userData) {
    try {
      const promiseData = await new Promise((resolve, reject) => {
        if (userData) {
          resolve(userData);
        } else {
          reject("User Not found !");
        }
      });

      return promiseData;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Retrieves all data from a user
   * @param {string} userId 
   */

  async getAllData(userId) {
    return Promise.all([
      this.getMainData(userId),
      this.getActivity(userId),
      this.getAverageSessions(userId),
      this.getPerformance(userId)
    ]);
  }

  /**
   * Retrieves informations from a user
   * @param {string} userId 
   */

  async getMainData(userId) {
    const userIdentity = await this.#resolveOrThrow(main[userId]);
    return modeling.main(userIdentity);
  }

  /**
   * Retrieves activity from a user
   * @param {string} userId 
   */

  async getActivity(userId) {
    const userActivity = await this.#resolveOrThrow(activity[userId]);
    return modeling.activity(userActivity);
  }

  /**
   * Retrieves average sessions from a user
   * @param {string} userId 
   */

  async getAverageSessions(userId) {
    const userAverageSessions = await this.#resolveOrThrow(averageSessions[userId]);
    return modeling.averageSessions(userAverageSessions);
  }

  /**
   * Retrieves performance from a user
   * @param {string} userId 
   */

  async getPerformance(userId) {
    const userPerformance = await this.#resolveOrThrow(performance[userId]);
    return modeling.performance(userPerformance);
  }
}

const userServiceMock = new UserServiceMock();

export default userServiceMock;