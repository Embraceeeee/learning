//  点击删除 active 类名

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // 删除其他元素的 active类
    panels.forEach((item) => {
      item.classList.remove("active");
    });
    // 为当前点击的元素加多一个 active的类
    panel.classList.add("active");
  });
});
