let beers = ["erdinger", "corona", "delirium"];

showDom("array1", beers);
showDom("array2", beers);

function show(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log[i];
  }
}

function showDom(element, arr) {
  document.getElementById(element).innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    document.getElementById(element).innerHTML += `<div>${arr[i]}<div>`;
  }
}
