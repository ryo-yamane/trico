(()=>{





  document.addEventListener('DOMContentLoaded', () => {
    // タブメニュークラス'.js-tab-trigger'を持つ要素を取得
    const tabTriggers = document.querySelectorAll('.js-tab-trigger');
    // タブコンテンツクラス'.js-tab-target'を持つ要素を取得
    const tabTargets = document.querySelectorAll('.js-tab-target');
    const doc = document;
    const tab = doc.getElementById('js-tab');
    const nav = tab.querySelectorAll('[data-id]');
    const content = tab.querySelectorAll('[data-menu]')
    
    const init = () => {
      content[0].style.display = 'block';
    };
    init();
   
    //クリックされたらイベント発火
    const handleClick = (e) => {
      e.preventDefault();

      //クリックされたnavとそのdata取得
      const $this = e.target;
      const targetVal = $this.dataset.nav;

      //対象外のnav, content全て一旦リセットする
    let index = 0;
    while(index < nav.length){
      content[index].style.display = 'none';
      nav[index].classList.remove('is-active');
      index++;
    }

      //対象のコンテンツをアクティブ化する
      tab.querySelectorAll('[data-menu="' + targetVal + '"]')[0].style.display = 'none';
      nav[targetVal].classList.add('is-active');
    };

    //前navに対してイベント発火
    let index = 0;
    while (index < nav.length){
      nav[index].addEventListener('click', (e) => handleClick(e));
      index++;
    }
  
  });
  
  })();

  

  document.addEventListener('DOMContentLoaded', () => {
    // タブメニュークラス'.js-tab-trigger'を持つ要素を取得
    const tabTriggers = document.querySelectorAll('.js-tab-trigger');
    // タブコンテンツクラス'.js-tab-target'を持つ要素を取得
    const tabTargets = document.querySelectorAll('.js-tab-target');
  
    // 要素の数の分だけループ処理をして値を取り出す
    for (let i = 0; i < tabTriggers.length; i++) {
        // タブメニュークリック時
        tabTriggers[i].addEventListener('click', (e) => {
            // クリックされた要素（メニュー要素[トリガー要素]）を取得
            let currentMenu = e.currentTarget;
            // ターゲットとなる要素（タブメニューdata属性値と等しいid値を持つコンテンツ要素[ターゲット要素]）を取得
            let currentContent = document.getElementById(currentMenu.dataset.id);
  
            // すべてのタブメニューの'is-active'クラスを削除
            for (let i = 0; i < tabTriggers.length; i++) {
                tabTriggers[i].classList.remove('is-active');
            }
            // クリックしたタブメニューに'is-active'クラスを追加
            currentMenu.classList.add('is-active');
  
            // タブコンテンツを非アクティブにする
            for (let i = 0; i < tabTargets.length; i++) {
                tabTargets[i].classList.remove('is-active');
            }
            // 対象コンテンツ(指定したIDの要素があったら)を表示させる
            if(currentContent !== null) {
                currentContent.classList.add('is-active');
            }
        });
    }
  });