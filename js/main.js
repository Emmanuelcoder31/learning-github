// Javascript  Api
// Callbacks,Promises,Thenables, and Async/Await
//workflow Function

const requestData = async (firstName, lastName) => {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?firstname =${firstName}&lastName{lastName}`
  );
  const jsonResponse = await response.json();

  console.log(jsonResponse.value);
};
requestData();
