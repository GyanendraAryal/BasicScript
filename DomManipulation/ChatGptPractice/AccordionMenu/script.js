document.querySelectorAll(".accordino").forEach(accordino => {
  const icon = accordino.querySelector(".icon");
  const answer = accordino.querySelector(".answer");

  icon.addEventListener("click", () => {
    const isActive = accordino.classList.toggle("active");
    icon.classList.toggle("active");

    // Show or hide the answer
    answer.style.display = isActive ? "block" : "none";
  });
});
