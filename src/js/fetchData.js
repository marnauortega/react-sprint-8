import axios from "axios";

const fetchData = async (url, setState, page = 1, previousResponse = []) => {
  try {
    const response = await axios.get(url + `?page=${page}`);
    const results = accessNestedResults(response);
    const resultsWithId = addIdToResults(results);
    const mergedResults = [...previousResponse, ...resultsWithId];

    if (response.data.next) {
      page++;

      fetchData(url, setState, page, mergedResults);
      return;
    }

    setState(mergedResults);
  } catch (error) {
    console.error(error);
  }
};

const accessNestedResults = (array) => {
  return array.data.results;
};

// WITH FETCH
// const fetchData = async (url, setState, page = 1, previousResponse = []) => {
//   try {
//     const response = await fetch(url + `?page=${page}`);
//     const data = await response.json();
//     const results = accessNestedResults(data);
//     const resultsWithId = addIdToResults(results);
//     const mergedResults = [...previousResponse, ...resultsWithId];

//     if (response.next) {
//       // console.log(page, Math.ceil(data.count / 10));
//       page++;

//       fetchData(url, setState, page, mergedResults);
//       return;
//     }

//     setState(mergedResults);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const accessNestedResults = (array) => {
//   return array.results;
// };

const addIdToResults = (shipList) => {
  const shipListWithId = shipList.map((ship) => {
    let id;
    if (ship.url.slice(-3, -2) >= "0" && ship.url.slice(-3, -2) <= "9") {
      id = { id: parseInt(ship.url.slice(-3, -1)) };
    } else {
      id = { id: parseInt(ship.url.slice(-2, -1)) };
    }
    return { ...ship, ...id };
  });

  return shipListWithId;
};

export default fetchData;
