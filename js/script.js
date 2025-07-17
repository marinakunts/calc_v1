const inputPLN = document.querySelector("#pln"),
  inputUsd = document.querySelector("#usd");

inputPLN.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  //   request.open(method, URL, async, login, pass);
  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputPLN.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "Error";
    }
  });

  // status
  // statusText
  // response
  // readyState
});
