document.addEventListener("DOMContentLoaded", () => {
  let counter = 0;
  let isPaused = false;
  const counterElement = document.getElementById("counter");
  const minus = document.getElementById("minus");
  const plus = document.getElementById("plus");
  const heart = document.getElementById("heart");
  const pause = document.getElementById("pause");
  const form = document.querySelector("form");
  const input = document.querySelector("input#comment-input");
  const likesList = document.querySelector("ul.likes");
  const submit = document.querySelector("button#submit");
  let myArr = [];

  setInterval(function () {
    if (!isPaused) {
      addCount();
    } else {
      counter += 0;
    }
  }, 1000);

  function addCount() {
    counter += 1;
    counterElement.textContent = counter;
  }

  minus.addEventListener("click", minusFn);
  function minusFn() {
    counter -= 1;
    counterElement.textContent = counter;
  }
  plus.addEventListener("click", plusFn);
  function plusFn() {
    counter += 1;
    counterElement.textContent = counter;
  }

  pause.addEventListener("click", pauseFn);
  function pauseFn() {
    if (isPaused === false) {
      isPaused = true;
      counterElement.textContent = counter;
      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
      submit.disabled = true;
      pause.textContent = "resume";
    } else {
      isPaused = false;
      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      submit.disabled = false;
      pause.textContent = "pause";
    }
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let p = document.createElement("p");
    let comment = e.target["comment-input"].value;
    p.append(comment);
    document.getElementById("list").appendChild(p);
    form.reset();
  });
});
