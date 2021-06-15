#### ❤️ HTML
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
