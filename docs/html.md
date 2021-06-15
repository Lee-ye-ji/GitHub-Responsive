## ❤️ HTML

<em><strong> 1) user-scaleable=no</strong></em>
  > 사용자가 손가락으로 확대하거나 축소하는 것을 사용하지 않겠다.</br>
  > 즉, 사용자가 디바이스에서 확대하거나 축소할 때 레이아웃이 망가지는 것을 막겠다는 의미</br>
  > 최대할 수 있는 값과 최소할 수 있는 값을 고정시킴으로써 확대 축소를 원천봉쇄!!!하는 작업</br>
  > <em><b>maximum-scale=1, minimumscale=1</b></em>
  ```html
  <meta name="viewport" content="width=device-width, inital-scale=1, user-scaleable=no, maximum-scale=1, minimumscale=1">
  ```
  
<em><strong> 2) content="IE=edge"</strong></em>
  > 인터넷 익스플로어 사용 시 렌더링되는 방식이 존재하는 데 <em><b>IE=edge</b></em>는 최신의 방식으로 해달라는 의미</br>
  ```html
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
  ```
  
<em><strong> 3) meta property="og:type" content="website" </strong></em>
  > <em><b>property</b></em>는 단순하게 속성이라는 의미를 가지고 있음</br>
  > <em><b>og</b></em> → <em><b>Open Graph</b></em>즉, 정보를 의미함</br>
  > 정보는 타입이고 그 타입은 웹사이트다라는 의미를 저장
  ```html
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="GitHub">
  <meta property="og:title" content="Lee Ye Ji Clone GitHub">
  <meta property="og:description" content="GitHub Responsive Page">
  <meta property="og:image" content="img/bg.jpg">
  <meta property="og:url" content="https://github.com/">

  <!-- Twitter Card -->
  <meta property="twitter:card" content="summary">
  <meta property="twitter:site" content="GitHub">
  <meta property="twitter:title" content="Lee Ye Ji Clone GitHub">
  <meta property="twitter:description" content="GitHub Responsive Page">
  <meta property="twitter:image" content="img/bg.jpg">
  <meta property="twitter:url" content="https://github.com/">
  ```
  
  > <em><b>Open Graph</b></em> 외부에 제공할 정보를 정의, 정의 되어있는 것이 <em><b>Twitter Card</b></em></br>
  > <em><b>Open Graph</b></em>는 대표적으로 페이스북에서 많이 활용됨</br>
  > 카카오채팅을 통해 url을 보낼시 보여지는 이미지와 같은 문구를 나타냄(즉, 검색엔진)
 
<em><strong> 4) 파비콘(Favicon)</strong></em>
  > 파비콘(Favicon)은 사이트를 대표하는 아이콘
  ```html
  <link rel="icon" href="./favicon.ico">
  ```
  > 스마트폰에서 동일하게 사용되려면 밑에 코드를 작성해주어야함
  ```html
  <link rel="apple-touch-icon" href="favicon.ico">
  ```
  > 인터넷 익스플로러에서 파비콘을 적용하려면 밑에 코드처럼 작성해주는 게 원칙이나 </br>
  > 루트 폴더에서 icon이 있는지 확인하고 있으면 자동으로 아이콘을 표시해주기에 직접 작성할 필요는 없음!
  ```html
  <link rel="short cut icon" type="image/x-icon" href="favicon.ico">
  ```
  
<em><strong> 5) body 태그</strong></em>
  > <em><b>body 태그</b></em>는 전체적인 구조를 나타내는 태그이기 때문에 아래 코드 처럼 만들어서 바디태그 처럼 사용
  ```html
   <div class="body__container">

  </div>
  ```  

<em><strong> 6) form 태그</strong></em>
  > 서버로 제출될 데이터 방식이기에 고유함으로 <em><b>id 속성</b></em>을 추가해야함 

<em><strong> 7) clearfix</strong></em>
  > float이 들어간 요소는 공중으로 쪼그라들게 됨 </br>
  > 즉, 부모요소가 제대로 감쌀 수 없는 형태가 됨<br>
  > →  <em><b>clearfix 클래스를 정의해 놓고 float이 들어가는 부모 요소에  clearfix를 부여해주어야 함(=해결할 수 있는 방법)</b></em>
  ```html
  <div class="container clearfix">
        <div class="item"></div>
        <div class="item"></div>
  </div>
  ```  
  ``` css
  .clearfix::after{
    content: "";
    clear: both;
    display: block;
  }
  ``` 
  
