import "./style.css";

document.querySelector("#app").innerHTML = `
  <div id="customDiv">
    <h1>${import.meta.url}</h1>
    <h1>${import.meta.resolve("./template.html")}</h1>

    <h1>${new URL("./template.html", import.meta.url)}</h1>
    <h1>${import.meta.resolve("./template.html")}</h1>
    <h1>${import.meta.resolve("html")}</h1>
    <h1>${await fetch(import.meta.resolve("./template.html")).then((res) =>
      res.text()
    )}</h1>
  </div>
`;
