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
    console.log(mergedResults);
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
    const id = extractIdFromString(ship.url);
    return { ...ship, id };
  });

  return shipListWithId;
};

const extractIdFromString = (string) => {
  let id;
  if (string.slice(-3, -2) >= "0" && string.slice(-3, -2) <= "9") {
    id = parseInt(string.slice(-3, -1));
  } else {
    id = parseInt(string.slice(-2, -1));
  }

  return id;
};

export default fetchData;
export { extractIdFromString };
