import UserModeling from "./Modeling/Modeling";
import { informations, activity, averageSessions, performance } from "../../mocks/data/users/index";

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
          reject("Utilisateur non trouvé !");
        }
      });

      return promiseData;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Retrieves all modeled mocked data from a user
   * @param {string} userId 
   */

  async getAllData(userId) {
    return Promise.all([
      this.getInformations(userId),
      this.getActivity(userId),
      this.getAverageSessions(userId),
      this.getPerformance(userId)
    ]);
  }

  /**
   * Retrieves informations mocked data from a user then modeling it 
   * @returns modeled user informations data
   * @param {string} userId 
   */

  async getInformations(userId) {
    const userInformations = await this.#resolveOrThrow(informations[userId]);
    return modeling.informations(userInformations);
  }

  /**
   * Retrieves activity mocked data from a user then modeling it 
   * @returns modeled user activity data
   * @param {string} userId 
   */

  async getActivity(userId) {
    const userActivity = await this.#resolveOrThrow(activity[userId]);
    return modeling.activity(userActivity);
  }

  /**
   * Retrieves average mocked data from a user then modeling it 
   * @returns modeled user average data
   * @param {string} userId 
   */

  async getAverageSessions(userId) {
    const userAverageSessions = await this.#resolveOrThrow(averageSessions[userId]);
    return modeling.averageSessions(userAverageSessions);
  }

  /**
   * Retrieves performance mocked data from a user then modeling it 
   * @returns modeled user performance data
   * @param {string} userId 
   */

  async getPerformance(userId) {
    const userPerformance = await this.#resolveOrThrow(performance[userId]);
    return modeling.performance(userPerformance);
  }
}

const userServiceMock = new UserServiceMock();

export default userServiceMock;