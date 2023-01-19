import axios from "axios";

const fetchData = async (url, setState) => {
  try {
    const response = await axios.get(url);
    // console.log(response);
    setState(response);
  } catch (error) {
    console.error(error);
  }
};

// WITH FETCH
// // async function fetchData(url, errorMessage, callback) {
// //   try {
// //     const response = await fetch(url);
// //     const data = await response.json();
// //     return callback(data);
// //   } catch (e) {
// //     console.log(errorMessage);
// //   }
// // }

export default fetchData;
