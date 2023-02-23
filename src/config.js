import userServiceApi from "./services/User/User";
import userServiceMock from "./services/User/UserMock";

const userServices = {
  "MOCK": userServiceMock,
  "API": userServiceApi
};

export const userService = userServices[process.env.REACT_APP_ENV_DATA];