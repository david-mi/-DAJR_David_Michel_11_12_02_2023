class UserService {
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
    const data = await this.#fetchData(apiUrl);
    return data;
  }

  /**
  * Retrieves all data from a user
  * @param {string} userId 
  */

  async getAllData(userId) {
    const data = Promise.all([
      this.getMainData(userId),
      this.getActivity(userId),
      this.getAverageSessions(userId),
      this.getPerformance(userId)
    ]);

    return data;
  }

  /**
  * Retrieves activity from a user
  * @param {string} userId 
  */

  async getActivity(userId) {
    const apiUrl = `${this.#API_USER_URL}/${userId}/activity`;

    return await this.#fetchData(apiUrl);
  }

  /**
  * Retrieves average sessions from a user
  * @param {string} userId 
  */

  async getAverageSessions(userId) {
    const apiUrl = `${this.#API_USER_URL}/${userId}/average-sessions`;

    return await this.#fetchData(apiUrl);
  }

  /**
  * Retrieves performance from a user
  * @param {string} userId 
  */

  async getPerformance(userId) {
    const apiUrl = `${this.#API_USER_URL}/${userId}/performance`;

    return await this.#fetchData(apiUrl);
  }
}

export default new UserService();