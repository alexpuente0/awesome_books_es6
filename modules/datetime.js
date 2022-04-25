const setTime = () => {
  const time = document.getElementById("datetime");

  time.textContent = new Date().toLocaleString("en-US");
};
setTime();
