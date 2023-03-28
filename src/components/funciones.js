import axios from "axios";

export const getData = (setData, options, setLoader) => {
  setLoader(true);
  axios
    .request(options)
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.error(error);
    })
    .finally(() => {
      setLoader(false);
    });
};
