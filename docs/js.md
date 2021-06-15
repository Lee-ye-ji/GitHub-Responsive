## 💛 JavaScript

<em><strong> 1) defer</strong></em>
  ```html
  <script defer src="./main.js"></script>
  ```
  > defer → HTML 로딩이 끝났을 때 실행하겠다는 의미<br>
  > 순차적으로 읽히기에 HTML Head부분에 작성하면 다 읽지 못해 반응이 일어나지 않음<br>
  > 그 부분을 막기 위해 defer사용!

<em><strong> 2) 선언</strong></em>
  ```js
  (function (window, document){
      'use strict'; 
      // 엄격한 자바스크립트 문법을 통해서 작성한다는 의미
  })(window, document)
  ```
  > 전체 영역을 더럽히지 않게 구분화 함<br>
  > 즉, 모듈화 함

<em><strong> 3) 버튼 클릭</strong></em>
  ```js
  (function (window, document){
    'use strict'; 
    
    // 요소를 담고 있다는 의미로 $를 붙여줌
    const $toggles = document.querySelectorAll('.toggle'); // NodeList(유사배열)
    const $toggleBtn = document.getElementById('toggle-btn');
    
    $toggleBtn.addEventListener('click', function(){
        toggleElements();
    });

    function toggleElements(){
        // 유사배열을 반복시키기 위해선 -> [].forEach
        // 유사배열을 연결 -> [].forEach.call();
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.toggle('on');
        });
    }

  })(window, document)
  ```
  > toggles를 반복시키는 이유는 html에 toggle을 클래스를 가질 수 있는 갯수가 변경될 수도 <br>
  > 있기 때문에 토글클래스를 가지고 있는 요소들을 모아서 각각의 요소를 처리함<br>
  > classList→ 클래스를 제어해주는 요소
  > toggle → on이라는 없으면 추가해주고, 있으면 지우는 개념

<em><strong> 4) resize</strong></em>
  > 브라우저의 크기가 조절될 때 사용되는 것
  ```js
  window.addEventListener('resize', function(){
        // 만약에 조절되는 브라우저 크기가 1024보다 크다면
        // 토글을 꺼달라는 의미
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
