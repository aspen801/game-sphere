import api from "./config";

const resource = "api-categories";

export const getItems = () => api.get(resource).then((data) => data.json());
