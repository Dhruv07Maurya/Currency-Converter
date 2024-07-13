// for(code in countryList){
//   console.log(code,countryList[code]);
// }
let obj;
let btn = document.querySelector(".submit");
let input = document.querySelector(".input");
let img1 = document.querySelector(".from-cnt img");
let a = document.querySelector("#selectf");
let msg = document.querySelector(".final-val");
let opt1 = document.querySelector(".from select");
let opt2 = document.querySelector(".to select");
let newoptn1;
for (cc in countryList) {
  newoptn1 = document.createElement("option");
  newoptn1.innerText = cc;
  newoptn1.value = cc;
  a.append(newoptn1);
  a.addEventListener("change", (evt) => {
    updatee(evt.target);
  });
}
const updatee = (element) => {
  let currcode = element.value;
  let cntrycode = countryList[currcode];
  let newsrc = `https://flagsapi.com/${cntrycode}/flat/64.png`;
  img1.src = newsrc;
};

let b = document.querySelector(".selectt");
let img2 = document.querySelector(".to-cnt img");
let newoptn;
for (cc in countryList) {
  newoptn = document.createElement("option");
  newoptn.innerText = cc;
  newoptn.value = cc;
  b.append(newoptn);
  b.addEventListener("change", (evt) => {
    updatee2(evt.target);
  });
}
const updatee2 = (element) => {
  let currcode = element.value;
  let cntrycode = countryList[currcode];
  let newsrc = `https://flagsapi.com/${cntrycode}/flat/64.png`;
  img2.src = newsrc;
};

let url = "https://api.fxratesapi.com/latest";

const api = async () => {
  let info = await fetch(url);
  let data = await info.json();
  obj = data.rates;
  console.log(obj);
};
api();

btn.addEventListener("click", () => {
  let val = input.value;
  if (val <= 0) {
    input.value = 1;
    val = 1;
  }
  let amt1 = 1 / obj[`${opt1.value}`];
  let amt2 = obj[`${opt2.value}`];
  let finalamt = val * amt1 * amt2;

  msg.innerText = `${val} ${opt1.value} = ${finalamt} ${opt2.value}`;
});
