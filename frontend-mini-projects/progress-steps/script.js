const progress = document.getElementById("progress");

const circles = document.querySelectorAll(".circle");

const prevBtn = document.getElementById("prev");

const nextBtn = document.getElementById("next");

var currentValue = 1;




function update() {
  // 圆环更新逻辑，小于当前currentValue值得赋予active类
  circles.forEach((circle, index) => {
    console.log(index);
    if (index < currentValue) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // 设置进度条的长度
  progress.style.width = `${((currentValue - 1) / 3) * 100}%`;

  // 更新button 状态
  prevBtn.disabled = false;
  nextBtn.disabled = false;
  if (currentValue == 4) {
    nextBtn.disabled = true;
  } else if (currentValue == 1) {
    prevBtn.disabled = true;
  }

}

prevBtn.addEventListener("click", () => {
  currentValue--;
  update();
});

nextBtn.addEventListener("click", () => {
  currentValue++;
  update();
});
