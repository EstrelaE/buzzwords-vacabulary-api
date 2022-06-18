document.querySelector("button").addEventListener("click", getWords);

function getWords() {
  // const choice = document.querySelector("input").value;
  const url = `https://corporatebs-generator.sameerkumar.website/`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector(".words").innerHTML = "";
      document.querySelector("#definition").innerText = "";
      document.querySelector("#example").innerText = "";
      words = data.phrase.replaceAll('"', "");
      words = words.split(" ");
      words.forEach((word) => {
        const li = document.createElement("li");
        li.textContent = word;
        li.classList.add(word);
        document.querySelector("ul").appendChild(li);
      });

      //get definition
      const lis = document.querySelectorAll("li");
      lis.forEach((e) => e.addEventListener("click", getDefinition));
      function getDefinition(e) {
        let choice = e.srcElement.innerText;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${choice}`;
        fetch(url)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data[0]);
            document.querySelector("#definition").innerText =
              data[0].meanings[0].definitions[0].definition;
            if (data[0].phonetic) {
              document.querySelector("#phonetics").innerText = data[0].phonetic;
            }
            if (data[0].meanings[0].definitions[0].example) {
              document.querySelector(
                "#example"
              ).innerText = `"${data[0].meanings[0].definitions[0].example}"`;
            }
          })

          .catch((err) => {
            console.log(`error ${err}`);
            if (err) {
              alert("can't help you with that one");
            }
          });
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
