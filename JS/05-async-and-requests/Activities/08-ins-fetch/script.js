const callApi = () => {
  // The url to hit the API with the correct endpoints
  let requestUrl = "https://api.github.com/orgs/nodejs/repos";

  // fetch request gets a list of all the repos for the node.js organization
  fetch(requestUrl)
    // .then that accepts the response object from fetch() and returns a JSON object
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

callApi();
