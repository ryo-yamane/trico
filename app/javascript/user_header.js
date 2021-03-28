window.addEventListener('load', () => {
  const menuLists = document.querySelectorAll("list");
  menuLists.forEach(function(target){
  target.addEventListener('mouseenter',() => {
    target.setAttribute("style","background-color:#FFBEDA;")
  });
  })
  
  })
