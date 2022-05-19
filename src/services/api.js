import axios from "axios";

const api = axios.create({
  baseURL: "https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/",
});

export default api;
