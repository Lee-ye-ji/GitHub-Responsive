## ๐ JavaScript

<em><strong> 1) defer</strong></em>
  ```html
  <script defer src="./main.js"></script>
  ```
  > defer โ HTML ๋ก๋ฉ์ด ๋๋ฌ์ ๋ ์คํํ๊ฒ ๋ค๋ ์๋ฏธ<br>
  > ์์ฐจ์ ์ผ๋ก ์ฝํ๊ธฐ์ HTML Head๋ถ๋ถ์ ์์ฑํ๋ฉด ๋ค ์ฝ์ง ๋ชปํด ๋ฐ์์ด ์ผ์ด๋์ง ์์<br>
  > ๊ทธ ๋ถ๋ถ์ ๋ง๊ธฐ ์ํด defer์ฌ์ฉ!

<em><strong> 2) ์ ์ธ</strong></em>
  ```js
  (function (window, document){
      'use strict'; 
      // ์๊ฒฉํ ์๋ฐ์คํฌ๋ฆฝํธ ๋ฌธ๋ฒ์ ํตํด์ ์์ฑํ๋ค๋ ์๋ฏธ
  })(window, document)
  ```
  > ์ ์ฒดย ์์ญ์ย ๋๋ฝํ์งย ์๊ฒย ๊ตฌ๋ถํย ํจ<br>
  > ์ฆ,ย ๋ชจ๋ํย ํจ

<em><strong> 3) ๋ฒํผ ํด๋ฆญ</strong></em>
  ```js
  (function (window, document){
    'use strict'; 
    
    // ์์๋ฅผ ๋ด๊ณ  ์๋ค๋ ์๋ฏธ๋ก $๋ฅผ ๋ถ์ฌ์ค
    const $toggles = document.querySelectorAll('.toggle'); // NodeList(์ ์ฌ๋ฐฐ์ด)
    const $toggleBtn = document.getElementById('toggle-btn');
    
    $toggleBtn.addEventListener('click', function(){
        toggleElements();
    });

    function toggleElements(){
        // ์ ์ฌ๋ฐฐ์ด์ ๋ฐ๋ณต์ํค๊ธฐ ์ํด์  -> [].forEach
        // ์ ์ฌ๋ฐฐ์ด์ ์ฐ๊ฒฐ -> [].forEach.call();
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.toggle('on');
        });
    }

  })(window, document)
  ```
  > toggles๋ฅผ ๋ฐ๋ณต์ํค๋ ์ด์ ๋ html์ toggle์ ํด๋์ค๋ฅผ ๊ฐ์ง ์ ์๋ ๊ฐฏ์๊ฐ ๋ณ๊ฒฝ๋  ์๋ <br>
  > ์๊ธฐ ๋๋ฌธ์ ํ ๊ธํด๋์ค๋ฅผ ๊ฐ์ง๊ณ  ์๋ ์์๋ค์ ๋ชจ์์ ๊ฐ๊ฐ์ ์์๋ฅผ ์ฒ๋ฆฌํจ<br>
  > classListโ ํด๋์ค๋ฅผ ์ ์ดํด์ฃผ๋ ์์
  > toggle โ on์ด๋ผ๋ ์์ผ๋ฉด ์ถ๊ฐํด์ฃผ๊ณ , ์์ผ๋ฉด ์ง์ฐ๋ ๊ฐ๋

<em><strong> 4) resize</strong></em>
  > ๋ธ๋ผ์ฐ์ ์ ํฌ๊ธฐ๊ฐ ์กฐ์ ๋  ๋ ์ฌ์ฉ๋๋ ๊ฒ
  ```js
  window.addEventListener('resize', function(){
        // ๋ง์ฝ์ ์กฐ์ ๋๋ ๋ธ๋ผ์ฐ์  ํฌ๊ธฐ๊ฐ 1024๋ณด๋ค ํฌ๋ค๋ฉด
        // ํ ๊ธ์ ๊บผ๋ฌ๋ผ๋ ์๋ฏธ
        if(window.innerWidth > 1024){
            // Off toggle element
            offElements();
        }
    });

  function offElements(){
          [].forEach.call($toggles, function(toggle) {
              toggle.classList.remove('on');
          });
   }
  ```
