(()=>{

window.addEventListener('load', () => {
  const tabMenu = document.getElementById("js-tab")
  const menuDetail = tabMenu.querySelectorAll("[data-id]")
  const menuMoreDetail = tabMenu.querySelectorAll("[data-menu]")
  console.log(menuMoreDetail)
  for(let i = 0; i < menuDetail.length; i++) {
    //タブメニュークリック時
    
    menuDetail[i].addEventListener('click', (e) => {
      const init = () => {
        menuMoreDetail[i].style.display = 'block';
      };
      init();

      //クリックされた要素（メニュー要素）を取得
      let currentMenu = e.currentTarget;
      //ターゲットとなる要素（タブメニューdata属性ちと等しいid値を持つコンテンツ要素を取得
      let currentContent = document.getElementById(currentMenu.dataset.id);
      console.log(currentContent)

      // すべてのタブメニューの'is-active'クラスを削除
      for(let i = 0; i < menuDetail.length; i++) {
        menuDetail[i].classList.remove('is-active');
      }
      // クリックしたタブメニューに'is-active'クラスを追加
      currentMenu.classList.add('is-active');

       // タブコンテンツを非アクティブにする
       for(let i = 0; i < menuMoreDetail.length; i++) {
         menuMoreDetail[i].classList.remove('is-active');
       }
       // 対象コンテンツ(指定したIDの要素があったら)を表示させる
       if(currentContent !== null) {
         currentContent.classList.add('is-active');
       } else {
         currentContent.classList.remove('is-active');
       }

    })
  }    
    

    


  
})

})();