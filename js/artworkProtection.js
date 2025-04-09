//block the user from right clicking and saving my art
document.addEventListener("contextmenu", e => e.preventDefault());

//block the user from dragging and dropping the art
document.querySelectorAll("img, video").forEach(el => {
  el.setAttribute("draggable", "false");
});

//block the user from selecting the art
document.addEventListener("selectstart", e => e.preventDefault());

//block the user from using keyboard shortcuts to download my art
document.addEventListener("keydown", function (e) {
  
  if (
    (e.ctrlKey && (e.key === "s" || e.key === "u")) || 
    (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
    (e.key === "F12")
  ) {
    e.preventDefault();
    console.log("Nope! Sorry, you can't use my art without permission. Contact me if you want to use it. You wouldnt download a car, would you?");
  }
});
