// ハンバーガーメニュー

const menuBtn = document.querySelector('.boxMenu');
menuBtn.addEventListener('click',function(){
    const menuBtnLine = document.querySelectorAll('.boxMenu_line');
    menuBtnLine.forEach(line => {
        line.classList.toggle('boxMenu_line--isOpen');
    });
    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav--isOpen');
    const bg = document.querySelector('.navBg');
    bg.classList.toggle('navBg--isActive');
});


// スクロールイベント
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const appearPoint = windowHeight * 0.8;


window.addEventListener('scroll', function() {
        const scroll = window.scrollY;

    // mainVisualのwidthをスクロール量に応じて大きく/小さくする
        const images = document.querySelectorAll('.mainV_img');
    images.forEach(function(img) {
        if(windowWidth > 900){
            let newWidth = 34 + scroll * 0.05;
            if(newWidth >100)newWidth = 100;
            img.style.width = newWidth + '%';
        }else{
            let newWidth = 100 - scroll * 0.2;
            if(newWidth < 34) newWidth=34;
            img.style.width = newWidth + '%';
        }
    });
    
    // conceptが画面下30%まできたらactiveを付与
        const concept = this.document.querySelector('.concept');
        const conceptHeightToTop = concept.getBoundingClientRect().top;
        if(conceptHeightToTop < appearPoint){
            concept.classList.add("active");
          }else {
            concept.classList.remove("active");
          }

        const titles = this.document.querySelectorAll('.titles_title');
        titles.forEach(title=>{
            const titlesHeightToTop = title.getBoundingClientRect().top;
          if(titlesHeightToTop < appearPoint){
            title.classList.add('visible');
          }else{
            title.classList.remove('visible');
          }
        });
    });


// ギャラリー表示
let mySwiper = new Swiper('.gallery .swiper', {

  // オプション設定
  loop: false,
  // autoplay: {
  //   delay: 1000,
  //   disableOnInteraction: false,
  // },
  // loopedSlides: 0,
  pagination: {
    el: '.gallery .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.gallery .swiper-button-next',
    prevEl: '.gallery .swiper-button-prev',
  },

  speed: 5000,
  effect: 'slide',
  slidesPerView: 3.5, // 画像の表示枚数
  spaceBetween: 20, // 画像間の余白（px）
});


// faqアコーディオン
const faq = document.querySelectorAll(".faq_head"); // js-ac要素を取得し変数に格納
  function acToggle() { // クリック時に発火する関数を作成
    const content = this.nextElementSibling; // js-ac要素の「次の要素」を取得し変数に格納 
    content.classList.toggle("isOpen");// js-ac要素の「次の要素」
    const faq = this; // js-ac要素自身を変数に格納
    faq.classList.toggle('isOpen'); // js-ac要素にis-openつけ外し
  }

  for (let i = 0; i < faq.length; i++){
    faq[i].addEventListener("click", acToggle)
  }


// ニュースのフィルタリング
document.addEventListener("DOMContentLoaded", function() {
  // 初期表示（すべて表示）
  let items = document.querySelectorAll('.content_item');
  items.forEach(function(item) {
    item.style.display = 'block';
  });

  // タブがクリックされたときの動作
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      // すべてのタブのアクティブスタイルをリセット
      tabs.forEach(function(innerTab) {
        innerTab.classList.remove('active');
      });

      // クリックされたタブをアクティブに
      this.classList.add('active');

      // カテゴリに応じて内容を表示/非表示
      let category = this.getAttribute('data-category');
      if (category === 'all') {
        items.forEach(function(item) {
          item.style.display = 'block';
        });
      } else {
        items.forEach(function(item) {
          if (item.classList.contains(category)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      }
    });
  });
});

