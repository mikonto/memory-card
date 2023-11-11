function fetchRandomGif() {
  const api_key = "p5gRdw3cry6bnB2rgt2l30bJgTEhMlY3";
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => data.data.images.original.url)
    .catch((error) => console.error("Error fetching data:", error));
}

export default fetchRandomGif;
