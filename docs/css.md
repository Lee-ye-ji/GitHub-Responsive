## ๐งก CSS

<em><strong> 1) reset.css</strong></em>
  > ๊ฐ ๋ธ๋ผ์ฐ์ ๋ง๋ค ์ค์  ๋์ด์๋ ๊ธฐ๋ณธ ์คํ์ผ์ด ๋ค ๋ค๋ฅด๊ธฐ ๋๋ฌธ์ <em><strong>reset.css</strong></em>์ ์ฌ์ฉํจ <br>
  > ๊ธฐ๋ณธ์ ์ผ๋ก ํ๊ทธ๊ฐ ๊ฐ์ง๊ณ  ์๋ ๊ฐ๊ฒฉ์ด๋ ์์ ๋ฑ์ ํต์ผ ์ํค๋ ์์์ด ํ์ํ๊ธฐ์ ์ฌ์ฉ <br>
  > <b> โ  ์ฃผ์ํ  ์ </b><br>
  > ๋ด๊ฐ ๋ง๋๋ css๋ณด๋ค ๋จผ์  ์์ฑ๋์ด์ผ ํจ โ <em><strong>๋ค์ ํธ์ถ๋๋ฉด ์ด๊ธฐํ ๋  ์ ์๊ธฐ ๋๋ฌธ!!</strong></em> <br>
  > <em><strong>cdn</strong></em>์ ์ด์ฉํ์ฌ ํ๋ก์ ํธ ์ ํ ์ค๋ก ์ด๊ธฐํ ๊ฐ๋ฅ!

<em><strong> 2) ์ผ๋ฐ์ ์ธ ์น ํฐํธ ์ฌ์ด์ฆ </strong></em>
  > ์ผ๋ฐ์ ์ธ ์น ํฐํธ ์ฌ์ด์ฆ๋ <em><strong>16px</strong></em>์ด๋ค. <br>
  > ๊ทธ๋์ 16px๋ก ์ต์์๋ฃจํธ์ ๊ณ ์ ์ํค๋ฉด ํน์๋ผ๋ ๋ชจ๋ฅด๋ ์ํฉ์ ๋๋นํ  ์ ์์. 

<em><strong> 3) BEM ์๋ช๊ท์น </strong></em>
  > <em><strong>BEM ์๋ช๊ท์น</strong></em>์ CSS ์๋ช๊ท์น์ด๋ผ๊ณ ๋ ํจ. <br>
  >
  - __ : ~์ ์ผ๋ถ๋ถ  
  ``` html
  <div class="body__container"></div>
  ```
  > class ์ด๋ฆ์ ์ธ๋๋ฐ( _ _ )๋ฅผ ๋ ๋ฒ ์ฌ์ฉํ ์๋ฏธ๋ ***~์ ์ผ๋ถ๋ถ***์ด๋ค๋ผ๋ ์๋ฏธ<br>
  > ์ฆ, body์ ์ผ๋ถ๋ถ์ธ ์ปจํ์ด๋๋ค๋ผ๋ ์๋ฏธ<br>
  > ์ผ๋ถ๋ถ โ ๊ตฌ์กฐ์ ์ธ ์ผ๋ถ๋ถ
  
  - -- : ~์ ์ํ
  ``` html
  btn success
  btn danger
  btn warning

  <div class="btn--success"></div>
  <div class="btn--danger"></div>
  <div class="btn--warning"></div>
  ```
  > ๋ฒํผ ์ค์ ์ฑ๊ณต์ ์๋ฏธ๋ฅผ ์ฃผ๋ ์ํ, ์ํ์ ์๋ฏธ๋ฅผ ์ฃผ๋ ์ํ, ๊ฒฝ๊ณ ์ ์๋ฏธ๋ฅผ ์ฃผ๋ ์ํ๋ฅผ ์๋ฏธ<br>
  > ํ์ดํ ์ฆ, ๋์ฌ๊ธฐํธ ( - - )๋ฅผ ๋ ๋ฒ ์ฌ์ฉ
  
  - -์ผ๋ฐ์ ์ธ ์๋ช
  ```html
  toggle btn

  <div class="toggle-btn"></div>
  ```
  > ํ ๊ธ์ธ ๋ฒํผ์ ์๋ฏธํ๋ ๊ฒ์ ํ์ดํ ( - ) ํ ๋ฒ๋ง ์ฌ์ฉ


<em><strong> 4) Vender Prefix(๋ธ๋ผ์ฐ์  ์์ฒด๋ณ ์ ๋์ฌ) </strong></em>
  > input์์ ์๋ ๊ธ์์ ๋ฐ๊พธ๋ ๋ฐฉ๋ฒ <br>
  > <em><strong>๐ Vender Prefix(๋ธ๋ผ์ฐ์  ์์ฒด๋ณ ์ ๋์ฌ)</strong></em> <br>
  > ํ์ค์ด ์๋ ์น๋ธ๋ผ์ฐ์ ๋ณ๋ก ์คํ์ ์ผ๋ก ์ฌ์ฉํ๋ ๊ธฐ๋ฅ์ ์ ๊ณตํจ <br>
  > ์ฆ, ์น ๋ธ๋ผ์ฐ์  ๊ณต๊ธ์๊ฐ ์๋ก์ด ์คํ์ ์ธ ๊ธฐ๋ฅ์ ์ ๊ณตํ  ๋ <br>
  > ์ด์  ๋ฒ์ ์ ์น ๋ธ๋ผ์ฐ์ ์ ๊ทธ ์ฌ์ค์ ์๋ ค์ฃผ๊ธฐ ์ํด ์ฌ์ฉํ๋ ์ ๋์ฌ(prefix)๋ฅผ ์๋ฏธ
  > ![Untitled](https://user-images.githubusercontent.com/59958929/122028403-f88c4500-ce06-11eb-8dc7-136db5a25aa3.png)
  ``` css
  /* Vender Prefix(๋ธ๋ผ์ฐ์  ์์ฒด๋ณ ์ ๋์ฌ) */
  .input--text::-webkit-input-placeholder{ color: red; }
  .input--text::-ms-input-placeholder{ color: red; }
  .input--text::-moz-input-placeholder{ color: red; }
  .input--text::-o-input-placeholder{ color: red; } 
  /* o - ์คํ๋ผ ๋ธ๋ผ์ฐ์ ์์๋ input placeholder๋ฅผ ์ง์ํ์ง ์์ผ๋ฏ๋ก ๋ฌด์๋ฏธํจ */
  ```

<em><strong> 5) margin: 0 auto; </strong></em>
  > ๊ฐ์ด๋ฐ ์ ๋ ฌ์ ๋ํ๋ด๋ ์ฝ๋ <br>
  > ๋จ, width๊ฐ์ด ์กด์ฌํด์ผ ๊ฐ์ด๋ฐ๋ก ํ์๋จ
  ``` css
  margin: 0 auto;
  ```
  
<em><strong> 6) display: flex; </strong></em>
  > ์์ ์์๋ค์ด <b>์ํ์ ๋ ฌ</b>์ด ๋๋ ์ฝ๋

  > <em><strong> justify-content:center; โ ์ํ์ ๋ ฌ </strong></em> <br>
  > ์์ ์์์ ์ํ์ ๋ ฌ์ ํ๋ ค๋ฉด โ justify-content:center;์ ์์ฑ์ ์จ์ผํจ <br>
  > <em><strong> align-items: center; โ ์์ง์ ๋ ฌ </strong></em> <br>
  > but, height ์์ฑ์ด ์์ด์ผ ์ ์ฉ๋จ โ height: 100%;

<em><strong> 7) text-indent </strong></em>
  > img์ alt ์์ฑ์ฒ๋ผ ๋์ฒด ํ์คํธ๋ก ์ฌ์ฉ ๊ฐ๋ฅ<br>
  > <em><strong>text-indent</strong></em> โ ๋ค์ฌ์ฐ๊ธฐ ์์ฑ (์ฐ์ธก์ผ๋ก ๋ฐ๋ฆผ)
  ``` css
  text-indent: -9999px;
  /* ์ผ์ชฝ์ผ๋ก ๋ฐ๋ฆผ ํ๋ฉด์์  ์ฌ๋ผ์ก์ง๋ง 
      HTML ๊ตฌ์กฐ์ ์ผ๋ก  ๋จ์์๊ธฐ์
      ๋์ฒด ํ์คํธ ์ญํ ์ ํ  ์ ์์ */
  ```
  > 9999 โ ๋ช์์ ์ธ ๊ฒ(์ฝ์๊ฐ์ ์๋ฏธ)  

<em><strong> 8) order ์์ฑ </strong></em>
  > ์์ ๋ค๋ก ๋ฏธ๋ฃจ๊ธฐ (์ซ์์ ๊ฐ์ด ๋์์๋ก ์์๊ฐ ๋ค๋ก ๋ฐ๋ ค๋จ)
  ``` css
  header .btn-group{
    order: 2;
  }
  #search-form{
      order: 1;
  }
  .sub-menu{
      /* order: 0;  ์๋ต๊ฐ๋ฅ */
  }
  ```

<em><strong> 9) ์์ด๋(id) ์ ํ์ </strong></em>
  > ์์ด๋ ์ ํ์๊ฐ ๋ถ์ฌ๋์ด์์ ๊ฒฝ์ฐ์๋ ๊ณ ์ ํ ์์์ด๊ธฐ ๋๋ฌธ์ <br>
  > ๋ถ๋ชจ์ ์กฐ์์ ํ์๊ฐ ๋ช์๋  ํ์๊ฐ ์๋ค! <br>
  > ๋ช์ํ๋ ๊ฒ ๋นํจ์จ์ ์<br>
  > (๋จ, class๊ฒฝ์ฐ์๋ ์กฐ์ ์ ํ์ ๋ช์ํด์ผํจ!)
  ``` html
  <form id="search-form" method="POST" action="">
    <input type="text" id="search" class="input--text" placeholder="Search GitHub">
    <input type="submit" value="Submit">
  </form>
  ```
  ``` css
  /* #search-form*/ #search{
    
  }
  ```

<em><strong> 10) box-sizing: border-box; </strong></em>
  > padding๊ณผ border ์์ฑ ํน์ง ์ค์ ์์ ์ปค์ง์ด ์์ <br>
  > ์ด๋ฅผ ๋ฐฉ์งํ๊ณ ์ <em><strong>box-sizing: border-box;</strong></em>๋ฅผ ์ถ๊ฐ

<em><strong> 11) position: relative; </strong></em>
  > <em><strong>position:relative;</strong></em>๋ ์์น์ ๊ธฐ์ค์ ์ค์ ํ๋ ๊ฒ์ด ์๊ธฐ์์ ์ผ๋ก ์ค์  ํ๋ ๊ฒ<br>
  > ๋ ์ด์์์๋ ์ํฅ์ ์ฃผ์ง ์์
  
  > <em><strong>position:absolute;</strong></em>๋ ๋ถ๋ชจ์์์ ํฌ์ง์์ด ์๋์ง ์๋์ง ํ์ธํ๊ธฐ์<br> 
  > ๊ณ์ ํ๊ณ  ์ฌ๋ผ๊ฐ ๋ธ๋ผ์ฐ์ ๊น์ง ๊ฐ ์ ์์<br>
  > ๊ทธ๋ ๊ธฐ์ ์ค๊ฐ์ ๋ฉ์ถ๊ธฐ ํ๊ธฐ ์ํด์ ๊ณตํต ๋ถ๋ถ์ <em><strong>position:relative;</strong></em>๋ฅผ ์ถ๊ฐ

<em><strong> 12) ๋ฐ์ํ๋ฐฉ์ </strong></em>
  ``` css
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   /* repeat์ ๋ค์ด๊ฐ๋ ์ซ์๋ฅผ ๋ณ๊ฒฝํด์ฃผ๋ฉด ๋จ! */
  ```
  > ํ์ง๋ง grid๋ฅผ ์ฌ์ฉํ๋ฉด ๊ตฌํ์ ๋ธ๋ผ์ฐ์ ๋ฅผ ์ฌ์ฉํ๋ ์ฌ์ฉ์์๊ฒ๋ ์ ๋์ํ์ง ์์ ์ ์์<br>
  > ๊ทธ๋ ๊ธฐ์ ์๋์ ๊ฐ์ด ์ฌ์ฉ๊ฐ๋ฅ
  ``` css
  float: left;
  width: 25%;
  ```

<em><strong> 13) ๋ฏธ๋์ด์ฟผ๋ฆฌ </strong></em>
  > orientation ๋ทฐํฌํธ๋ฐฉํฅ(portrait, landscape)
  ``` css
  /* ์ธ๋ก๊ฐ ๊ฐ๋ก๋ณด๋ค ๊ธด ์ํ๊ฐ ๋์์ ๋ : ํธ๋ํฐ ์ฌ์ด์ฆ */
  @media screen and(orientation:portrait){
    .container{
      height: 300px;
      background : blue;
    }
  }
  ```
  ``` css
  /* ๊ฐ๋ก๊ฐ ๋ ๊ธด ์ํ๊ฐ ๋์์ ๋ : ์ปดํจํฐ ์ฌ์ด์ฆ */
  /* @media screen and(orientation:landscape){ 
     ์๋ต ๋์์ ๊ฒฝ์ฐ */
  @media (orientation:landscape){
    .container{
      height: 300px;
      background : blue;
    }
  }
  ```
