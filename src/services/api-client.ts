import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  // baseURL: "https://api.mobygames.com/v1/",
  params: {
    key: "8e52734bc1bd41e0b6adc7d37a9be296",
  },
});
