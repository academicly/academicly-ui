export const CONFIG = {
  ENV_NAME: "development"
};
export const CONSTANTS = { ERROR_MESSAGE: {} };
// @ts-ignore
CONSTANTS.ERROR_MESSAGE.LIST_DELETE = "Request to delete list item failed:";
// @ts-ignore
CONSTANTS.ERROR_MESSAGE.LIST_ADD = "Request to add list item failed:";
// @ts-ignore
CONSTANTS.ERROR_MESSAGE.LIST_GET = "Request to get list items failed:";
// @ts-ignore
CONSTANTS.ERROR_MESSAGE.LIST_EMPTY_MESSAGE = "Please enter a valid message";
// @ts-ignore
CONSTANTS.ERROR_MESSAGE.GRID_GET = "Request to get grid text failed:";
// @ts-ignore
CONSTANTS.ERROR_MESSAGE.MASTERDETAIL_GET =
  "Request to get master detail text failed:";
// @ts-ignore
CONSTANTS.ENDPOINT = {};
// @ts-ignore
CONSTANTS.ENDPOINT.LIST = "/api/list";
// @ts-ignore
CONSTANTS.ENDPOINT.GRID = "/api/grid";
// @ts-ignore
CONSTANTS.ENDPOINT.MASTERDETAIL = "/api/masterdetail";

export default CONFIG;
