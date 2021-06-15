(function (window, document){
    'use strict'; 
    
    // 요소를 담고 있다는 의미로 $를 붙여줌
    const $toggles = document.querySelectorAll('.toggle'); // NodeList(유사배열)
    const $toggleBtn = document.getElementById('toggle-btn');
    
    $toggleBtn.addEventListener('click', function(){
        toggleElements();
    });

    window.addEventListener('resize', function(){
        // 만약에 조절되는 브라우저 크기가 1024보다 크다면
        // 토글을 꺼달라는 의미
        if(window.innerWidth > 1024){
            // Off toggle element
            offElements();
        }
    });

    function toggleElements(){
        // 유사배열을 반복시키기 위해선 -> [].forEach
        // 유사배열을 연결 -> [].forEach.call();
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements(){
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.remove('on');
        });
    }

})(window, document)