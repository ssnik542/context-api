const ip = document.querySelector("#checkurl");
const btn = document.querySelector("button");
const btnMore = document.querySelector(".button-28");
const msg = document.querySelector("#alert-message");
let x = ip.value;
let ans;
const loader = document.querySelector(".lds-ring");
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  ans = validURL(x);
  ip.value = "";
  msg.innerText = ans;
  btnMore.style.display = "block";
  loader.style.display = "inline-block";
  setTimeout(() => {
    loader.style.display = "none";
  }, 100);
});

const pop = document.querySelector(".popup-window");
const popup = document.querySelector(".popup");
const close = document.querySelector(".popup-close");

if (msg.innerText == "") {
  btnMore.style.display = "none";
}
btnMore.addEventListener("click", () => {
  pop.style.display = "block";
  btnMore.style.display = "none";
  btn.style.display = "none";
});
pop.addEventListener("click", () => {
  pop.style.display = "none";
  btn.style.display = "block";
  document.querySelector("#alert-message").innerText = "";
});
close.addEventListener("click", () => {
  pop.style.display = "none";
  btn.style.display = "block";
  document.querySelector("#alert-message").innerText = "";
});
