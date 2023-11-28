// Thêm sự kiện click vào các thẻ li
const frequentQueries = document.querySelectorAll(".questionItem");
console.log(frequentQueries);
frequentQueries.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("show")) {
      e.currentTarget.classList.remove("show");
      return;
    }
    removeShow();
    e.currentTarget.classList.toggle("show");
    // removeShow();
    // if (e.currentTarget.classList.contains("show")) {
    //   e.currentTarget.classList.remove("show");
    // } else {
    //   e.currentTarget.classList.add("show");
    // }
  });
});

function removeShow() {
  frequentQueries.forEach((item) => {
    item.classList.remove("show");
  });
}
