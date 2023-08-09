alertButton = document.getElementById("alert-button");
alertButton.addEventListener("click", () => {
  alert("get data");
  logMovies();
});

async function logMovies() {
  const response = await fetch(
    "https://my-json-server.typicode.com/typicode/demo/posts"
  );
  const movies = await response.json();
  console.log(movies);
}
