import UserModeling from "../../services/user/Modeling";
import { usersMock } from "../data/user";

class UserMockService extends UserModeling {
  async resolveOrThrow(data) {
    try {
      const promiseData = await new Promise((resolve, reject) => {
        if (data) {
          resolve(data);
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
   * Retrieves informations from a user
   * @param {string} userId 
   */

  async getMainData(userId) {
    const userIdentity = await this.resolveOrThrow(usersMock[userId]?.main);
    return this.mainModeling(userIdentity);
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
  * Retrieves activity from a user
  * @param {string} userId 
  */

  async getActivity(userId) {
    const userActivity = await this.resolveOrThrow(usersMock[userId]?.activity);
    return this.activityModeling(userActivity);
  }

  /**
  * Retrieves average sessions from a user
  * @param {string} userId 
  */

  async getAverageSessions(userId) {
    const userAverageSessions = await this.resolveOrThrow(usersMock[userId]?.averageSessions);
    return this.averageSessionsModeling(userAverageSessions);
  }

  /**
  * Retrieves performance from a user
  * @param {string} userId 
  */

  async getPerformance(userId) {
    const userPerformance = await this.resolveOrThrow(usersMock[userId]?.performance);
    return this.performanceModeling(userPerformance);
  }
}

export default new UserMockService();