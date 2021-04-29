(()=>{

window.addEventListener('load', () => {
  const tabMenu = document.getElementById("js-tab")
  const menuDetail = tabMenu.querySelectorAll("[data-id]")
  const menuMoreDetail = tabMenu.querySelectorAll("[data-menu]")
  const tabMenuDetails = tabMenu.querySelectorAll(".tab-menu-detail");
  for(let i = 0; i < menuDetail.length; i++) {
    //タブメニュークリック時
    
    menuDetail[i].addEventListener('click', (e) => {
      const init = () => {
        menuMoreDetail[i].style.display = 'block';
        console.log(menuMoreDetail)
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

      //クリックされた時に is-active を追加/削除
      for (const tabMenuDetail of tabMenuDetails) {
        console.log(tabMenuDetail)
        if (tabMenuDetail.id === currentMenu.dataset.id) {
         tabMenuDetail.classList.add('is-active');
        } else {
         tabMenuDetail.classList.remove('is-active');
        }
      }
       // タブコンテンツを非アクティブにする
       //for(let i = 0; i < menuMoreDetail.length; i++) {
        // menuMoreDetail[i].classList.remove('is-active');
       
       // 対象コンテンツ(指定したIDの要素があったら)を表示させる
      // if(currentContent !== null) {
       //  currentContent.classList.add('is-active');
      // } else {
      //   currentContent.classList.remove('is-active');
      // }


      //ここから
      const menuDetailSub = tabMenu.querySelectorAll("[unko-id]")
      const menuMoreDetailSub = tabMenu.querySelectorAll("[unko-menu]")
      const tabMenuDetailsSub = tabMenu.querySelectorAll(".tab-content__item");

      for(let i = 0; i < menuDetailSub.length; i++) {
      menuDetailSub[i].addEventListener('click', (e) =>{
        const taketakeshi = () =>{
          menuMoreDetailSub[i].style.display = 'block';
          console.log(menuDetailSub)
        };
        taketakeshi();
       
        //クリックされた要素（メニュー要素）を取得
      let currentMenuSub = e.currentTarget;
      //ターゲットとなる要素（タブメニューdata属性ちと等しいid値を持つコンテンツ要素を取得
      let currentContentSub = document.getElementById(currentMenuSub.dataset.id);
      console.log(currentContentSub)

        // すべてのタブメニューの'is-active'クラスを削除
      for(let i = 0; i < menuDetailSub.length; i++) {
        menuDetailSub[i].classList.remove('is-active');
      }
      // クリックしたタブメニューに'is-active'クラスを追加
      currentMenu.classList.add('is-active');

      //クリックされた時に is-active を追加/削除
      for (const tabMenuDetailSub of tabMenuDetailsSub) {
        console.log(tabMenuDetailSub)
        if (tabMenuDetailSub.id === currentMenuSub.dataset.id) {
         tabMenuDetailSub.classList.add('is-active');
        } else {
         tabMenuDetailSub.classList.remove('is-active');
        }
      }
      })}

      






       //ここまで



    })
  }    
    


    


  
})

})();