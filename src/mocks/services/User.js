import { usersMock } from "../data/user";

class UserMockService {
  /**
   * Retrieves informations from a user
   * @param {string} userId 
   */

  async getMainData(userId) {
    return new Promise((resolve, reject) => {
      if (usersMock[userId]) {
        resolve(usersMock[userId].main);
      } reject("User Not found !");
    });
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
    return new Promise((resolve, reject) => {
      if (usersMock[userId]) {
        resolve(usersMock[userId].activity);
      } reject("User Not found !");
    });
  }

  /**
  * Retrieves average sessions from a user
  * @param {string} userId 
  */

  async getAverageSessions(userId) {
    return new Promise((resolve, reject) => {
      if (usersMock[userId]) {
        resolve(usersMock[userId].averageSessions);
      } reject("User Not found !");
    });
  }

  /**
  * Retrieves performance from a user
  * @param {string} userId 
  */

  async getPerformance(userId) {
    return new Promise((resolve, reject) => {
      if (usersMock[userId]) {
        resolve(usersMock[userId].performance);
      } reject("User Not found !");
    });
  }
}

export default new UserMockService();