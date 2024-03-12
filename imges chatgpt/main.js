let api = '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';
"use strict";
var myimages = document.querySelector('.img');
var input = document.getElementById('inp');
var button = document.getElementById('btn');

let getimage = async () => {
  var method = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${api}`
    },
    body: JSON.stringify({
      "prompt": input.value,
      "n": 3,
      "size": "256x256"
    })
  };

  let res = await fetch("https://api.openai.com/v1/images/generations", method);
  let data = await res.json();
  console.log(data);
  let listImage = data.data;
  console.log(listImage)


  listImage.forEach(img => {
    const imgElement = ` 
    <div>
    <img src="${img.url}">
    </div> 
    `;

    myimages.insertAdjacentHTML("afterbegin", imgElement);
  });
}

