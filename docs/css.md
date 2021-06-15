## 🧡 CSS

<em><strong> 1) reset.css</strong></em>
  > 각 브라우저마다 설정 되어있는 기본 스타일이 다 다르기 때문에 <em><strong>reset.css</strong></em>을 사용함 <br>
  > 기본적으로 태그가 가지고 있는 간격이나 색상 등을 통일 시키는 작업이 필요하기에 사용 <br>
  > <b> ⚠ 주의할 점</b><br>
  > 내가 만드는 css보다 먼저 작성되어야 함 → <em><strong>뒤에 호출되면 초기화 될 수 있기 때문!!</strong></em> <br>
  > <em><strong>cdn</strong></em>을 이용하여 프로젝트 시 한 줄로 초기화 가능!

<em><strong> 2) 일반적인 웹 폰트 사이즈 </strong></em>
  > 일반적인 웹 폰트 사이즈는 <em><strong>16px</strong></em>이다. <br>
  > 그래서 16px로 최상위루트에 고정시키면 혹시라도 모르는 상황에 대비할 수 있음. 

<em><strong> 3) BEM 작명규칙 </strong></em>
  > <em><strong>BEM 작명규칙</strong></em>은 CSS 작명규칙이라고도 함. <br>
  >
  - __ : ~의 일부분  
  ``` html
  <div class="body__container"></div>
  ```
  > class 이름에 언더바( _ _ )를 두 번 사용한 의미는 ***~의 일부분***이다라는 의미<br>
  > 즉, body의 일부분인 컨테이너다라는 의미<br>
  > 일부분 → 구조적인 일부분
  
  - -- : ~의 상태
  ``` html
  btn success
  btn danger
  btn warning

  <div class="btn--success"></div>
  <div class="btn--danger"></div>
  <div class="btn--warning"></div>
  ```
  > 버튼 중의 성공을 의미를 주는 상태, 위험의 의미를 주는 상태, 경고의 의미를 주는 상태를 의미<br>
  > 하이픈 즉, 대쉬기호 ( - - )를 두 번 사용
  
  - -일반적인 작명
  ```html
  toggle btn

  <div class="toggle-btn"></div>
  ```
  > 토글인 버튼을 의미하는 것은 하이픈 ( - ) 한 번만 사용


<em><strong> 4) Vender Prefix(브라우저 업체별 접두사) </strong></em>
  > input안에 있는 글자색 바꾸는 방법 <br>
  > <em><strong>🌐 Vender Prefix(브라우저 업체별 접두사)</strong></em> <br>
  > 표준이 아닌 웹브라우저별로 실험적으로 사용하는 기능을 제공함 <br>
  > 즉, 웹 브라우저 공급자가 새로운 실험적인 기능을 제공할 때 <br>
  > 이전 버전의 웹 브라우저에 그 사실을 알려주기 위해 사용하는 접두사(prefix)를 의미
  > ![Untitled](https://user-images.githubusercontent.com/59958929/122028403-f88c4500-ce06-11eb-8dc7-136db5a25aa3.png)
  ``` css
  /* Vender Prefix(브라우저 업체별 접두사) */
  .input--text::-webkit-input-placeholder{ color: red; }
  .input--text::-ms-input-placeholder{ color: red; }
  .input--text::-moz-input-placeholder{ color: red; }
  .input--text::-o-input-placeholder{ color: red; } 
  /* o - 오페라 브라우저에서는 input placeholder를 지원하지 않으므로 무의미함 */
  ```

<em><strong> 5) margin: 0 auto; </strong></em>
  > 가운데 정렬을 나타내는 코드 <br>
  > 단, width값이 존재해야 가운데로 표시됨
  ``` css
  margin: 0 auto;
  ```
  
<em><strong> 6) display: flex; </strong></em>
  > 자식 요소들이 <b>수평정렬</b>이 되는 코드

  > <em><strong> justify-content:center; → 수평정렬 </strong></em> <br>
  > 자식 요소의 수평정렬을 하려면 → justify-content:center;의 속성을 써야함 <br>
  > <em><strong> align-items: center; → 수직정렬 </strong></em> <br>
  > but, height 속성이 있어야 적용됨 → height: 100%;

<em><strong> 7) text-indent </strong></em>
  > img의 alt 속성처럼 대체 텍스트로 사용 가능<br>
  > <em><strong>text-indent</strong></em> → 들여쓰기 속성 (우측으로 밀림)
  ``` css
  text-indent: -9999px;
  /* 왼쪽으로 밀림 화면에선 사라졌지만 
      HTML 구조적으론 남아있기에
      대체 텍스트 역할을 할 수 있음 */
  ```
  > 9999 → 명시적인 것(약속같은 의미)  

<em><strong> 8) order 속성 </strong></em>
  > 순서 뒤로 미루기 (숫자의 값이 높을수록 순서가 뒤로 밀려남)
  ``` css
  header .btn-group{
    order: 2;
  }
  #search-form{
      order: 1;
  }
  .sub-menu{
      /* order: 0;  생략가능 */
  }
  ```

<em><strong> 9) 아이디(id) 선택자 </strong></em>
  > 아이디 선택자가 부여되어있을 경우에는 고유한 요소이기 때문에 <br>
  > 부모의 조상선택자가 명시될 필요가 없다! <br>
  > 명시하는 게 비효율적임<br>
  > (단, class경우에는 조상 선택자 명시해야함!)
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
  > padding과 border 속성 특징 중에 요소 커짐이 있음 <br>
  > 이를 방지하고자 <em><strong>box-sizing: border-box;</strong></em>를 추가

<em><strong> 11) position: relative; </strong></em>
  > <em><strong>position:relative;</strong></em>는 위치의 기준을 설정하는 것이 자기자신으로 설정 하는 것<br>
  > 레이아웃에는 영향을 주지 않음
  
  > <em><strong>position:absolute;</strong></em>는 부모요소에 포지션이 있는지 없는지 확인하기에<br> 
  > 계속 타고 올라가 브라우저까지 갈 수 있음<br>
  > 그렇기에 중간에 멈추기 하기 위해서 공통 부분에 <em><strong>position:relative;</strong></em>를 추가

<em><strong> 12) 반응형방식 </strong></em>
  ``` css
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   /* repeat에 들어가는 숫자를 변경해주면 됨! */
  ```
  > 하지만 grid를 사용하면 구형의 브라우저를 사용하는 사용자에게는 잘 동작하지 않을 수 있음<br>
  > 그렇기에 아래와 같이 사용가능
  ``` css
  float: left;
  width: 25%;
  ```

<em><strong> 13) 미디어쿼리 </strong></em>
  > orientation 뷰포트방향(portrait, landscape)
  ``` css
  /* 세로가 가로보다 긴 상태가 되었을 때 : 핸드폰 사이즈 */
  @media screen and(orientation:portrait){
    .container{
      height: 300px;
      background : blue;
    }
  }
  ```
  ``` css
  /* 가로가 더 긴 상태가 되었을 때 : 컴퓨터 사이즈 */
  /* @media screen and(orientation:landscape){ 
     생략 되었을 경우 */
  @media (orientation:landscape){
    .container{
      height: 300px;
      background : blue;
    }
  }
  ```
