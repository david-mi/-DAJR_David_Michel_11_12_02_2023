import userServiceApi from "./services/User/User";
import userServiceMock from "./services/User/UserMock";

const apiEnvironment = process.env.REACT_APP_API_HOST !== undefined;

export const userService = apiEnvironment
  ? userServiceApi
  : userServiceMock;