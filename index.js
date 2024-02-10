document.querySelectorAll(".fa").forEach((item) => {
  item.addEventListener("click", handleClick);
});

let prev = null;

function handleClick() {
  const ans = this.querySelector(".ans");
  const plus = this.querySelector(".plus");

  if (prev === this) {
    ans.classList.remove("p-visible");
    plus.setAttribute("src", "./assets/images/icon-plus.svg");
    prev = null;
    return;
  }

  if (prev) {
    prev.querySelector(".ans").classList.remove("p-visible");
    prev
      .querySelector(".plus")
      .setAttribute("src", "./assets/images/icon-plus.svg");
  }

  prev = this;
  ans.classList.add("p-visible");
  plus.setAttribute("src", "./assets/images/icon-minus.svg");
}
