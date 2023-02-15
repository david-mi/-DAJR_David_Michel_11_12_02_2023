import UserModeling from "./Modeling";

const modeling = new UserModeling();
const apiHost = process.env.REACT_APP_API_HOST;

class UserService {

  /**
   * Fetch data based on {@link url}
   *
   * @param {string} url  
   * @returns fetched data or throws an Error
   */

  async #fetchData(url) {
    const response = await fetch(url);
    if (response.ok === false) {
      throw new Error("Failed to fetch");
    }

    const { data } = await response.json();
    return data;
  }

  /**
   * Retrieves all modeled data from a user
   * @returns all modeled user data
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
   * Retrieves main api informations from a user then modeling it 
   * @returns modeled user main data
   * @param {string} userId 
   */

  async getMainData(userId) {
    const apiUrl = `${apiHost}/user/${userId}`;
    const userIdentity = await this.#fetchData(apiUrl);
    return modeling.main(userIdentity);
  }

  /**
   * Retrieves activity api informations from a user then modeling it 
   * @returns modeled user activity data
   * @param {string} userId 
   */

  async getActivity(userId) {
    const apiUrl = `${apiHost}/user/${userId}/activity`;

    const userActivity = await this.#fetchData(apiUrl);
    return modeling.activity(userActivity);
  }

  /**
   * Retrieves average api informations from a user then modeling it 
   * @returns modeled user average data
   * @param {string} userId 
   */

  async getAverageSessions(userId) {
    const apiUrl = `${apiHost}/user/${userId}/average-sessions`;

    const userAverageSessions = await this.#fetchData(apiUrl);
    return modeling.averageSessions(userAverageSessions);
  }

  /**
   * Retrieves performance api informations from a user then modeling it 
   * @returns modeled user performance data
   * @param {string} userId 
   */

  async getPerformance(userId) {
    const apiUrl = `${apiHost}/user/${userId}/performance`;

    const userPerformance = await this.#fetchData(apiUrl);
    return modeling.performance(userPerformance);
  }
}

const userService = new UserService();

export default userService;