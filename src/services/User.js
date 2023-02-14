import UserModeling from "./Modeling";

class UserService extends UserModeling {
  #API_USER_URL = "http://localhost:3000/user";

  async #fetchData(url) {
    const response = await fetch(url);
    if (response.status === false) {
      throw new Error("failed to fetch");
    }

    const { data } = await response.json();
    return data;
  }

  /**
   * Retrieves informations from a user
   * @param {string} userId 
   */

  async getMainData(userId) {
    const apiUrl = `${this.#API_USER_URL}/${userId}`;
    const userIdentity = await this.#fetchData(apiUrl);
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
    const apiUrl = `${this.#API_USER_URL}/${userId}/activity`;

    const userActivity = await this.#fetchData(apiUrl);
    return this.activityModeling(userActivity);
  }

  /**
  * Retrieves average sessions from a user
  * @param {string} userId 
  */

  async getAverageSessions(userId) {
    const apiUrl = `${this.#API_USER_URL}/${userId}/average-sessions`;

    const userAverageSessions = await this.#fetchData(apiUrl);
    return this.averageSessionsModeling(userAverageSessions);
  }

  /**
  * Retrieves performance from a user
  * @param {string} userId 
  */

  async getPerformance(userId) {
    const apiUrl = `${this.#API_USER_URL}/${userId}/performance`;

    const userPerformance = await this.#fetchData(apiUrl);
    return this.performanceModeling(userPerformance);
  }
}

export default new UserService();