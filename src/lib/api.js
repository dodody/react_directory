import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const apiServer = process.env.NODE_ENV === "development" ? "https://dev-dody.com" : "https://dody.com";

// const postTest = (data) =>
//   axios.post(`${apiServer}/test`, data, {
//     headers: { "Content-Type": "application/json" },
//   });

// export { postTest };
