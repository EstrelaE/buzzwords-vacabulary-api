document.querySelector("button").addEventListener("click", getWords);

function getWords() {
  // const choice = document.querySelector("input").value;
  const url = `https://corporatebs-generator.sameerkumar.website/`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector(".words").innerHTML = "";
      words = data.phrase.split(" ");
      words.forEach((word) => {
        document.querySelector(
          ".words"
        ).innerHTML += `<li><a href="#">${word}</a></li>`;
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.querySelectorAll("a").addEventListener("click", getDefinition);
function getDefinition() {
  // const choice = document.querySelector("input").value;
  const apiKey = "7323707fd8948f53cb2542f0d2e2657da03a78df";
  const url = `https://owlbot.info/api/v4/dictionary/owl`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
