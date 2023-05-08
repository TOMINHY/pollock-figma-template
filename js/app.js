window.addEventListener("load",function() {
  const menuToggle = document.querySelector(".header-menu-toggle");
  const menu = this.document.querySelector(".header-menu");
  menuToggle && menuToggle.addEventListener("click", handleToggle);
  function handleToggle(e) {
    menu && menu.classList.add("active");
  }
  document.addEventListener("click", handleClickOutSide);
  function handleClickOutSide(e) {
    if(e.target.matches(".header-menu-toggle") || e.target.matches(".header-menu, .header-menu *")) {
      return;
    }
    menu && menu.classList.remove("active");
  }
});

const headerItem = document.querySelectorAll(".header-item");
headerItem.forEach(function(item,index) {
  item.onclick = function(e) {
    const itemActive = document.querySelector(".header-item.active");
    itemActive.classList.remove("active");
    this.classList.add("active");
  }
})
