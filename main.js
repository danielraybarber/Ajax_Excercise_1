const ajaxPostRequest = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", ajaxPostRequest);

const ajaxPostRequest10 = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/10")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", ajaxPostRequest10);

const ajaxPostRequest12 = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/12/comments")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", ajaxPostRequest12);

const ajaxPostRequest2 = () => {
  fetch("https://jsonplaceholder.typicode.com/posts?userId=2")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", ajaxPostRequest2);

const ajaxCreatePost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Hi I'm a Title",
      body: "This is my body",
      userId: 777,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", ajaxCreatePost);

const render = () => {
  fetch("http://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      // Traditional for loop
      var all = "";
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        all += "<p>" + "Name: " + data[i].name + "</p>";
        console.log(all);
      }
    });
};

const ajaxReplace12 = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "Replaced title of 12",
      body: "Replaced body of 12",
      userId: 247,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

let btn6 = document.getElementById("btn6");
btn6.addEventListener("click", ajaxReplace12, render);

const ajaxUpdate12 = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "PUT",
    body: JSON.stringify({
      title: "No titles here",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then((json) => render(json));
};

let btn7 = document.getElementById("btn7");
btn7.addEventListener("click", ajaxUpdate12);
