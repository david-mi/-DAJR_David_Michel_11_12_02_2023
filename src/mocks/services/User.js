import UserModeling from "../../services/Modeling";
import { usersMock } from "../data/user";

class UserMockService extends UserModeling {
  /**
   * Retrieves informations from a user
   * @param {string} userId 
   */

  async getMainData(userId) {
    const userIdentity = await new Promise((resolve, reject) => {
      if (usersMock[userId]) {
        resolve(usersMock[userId].main);
      } reject("User Not found !");
    });

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
    const userActivity = await new Promise((resolve, reject) => {
      if (usersMock[userId]) {
        resolve(usersMock[userId].activity);
      } reject("User Not found !");
    });

    return this.activityModeling(userActivity);
  }

  /**
  * Retrieves average sessions from a user
  * @param {string} userId 
  */

  async getAverageSessions(userId) {
    const userAverageSessions = await new Promise((resolve, reject) => {
      if (usersMock[userId]) {
        resolve(usersMock[userId].averageSessions);
      } reject("User Not found !");
    });

    return this.averageSessionsModeling(userAverageSessions);
  }

  /**
  * Retrieves performance from a user
  * @param {string} userId 
  */

  async getPerformance(userId) {
    const userPerformance = await new Promise((resolve, reject) => {
      if (usersMock[userId]) {
        resolve(usersMock[userId].performance);
      } reject("User Not found !");
    });

    return this.performanceModeling(userPerformance);
  }
}

export default new UserMockService();