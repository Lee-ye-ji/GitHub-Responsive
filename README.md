# GitHub main page
GitHub 사이트의 메인 페이지를 반응형으로 작업합니다.

## Deployment / 배포
https://lee-ye-ji.github.io/GitHub-Responsive/

## Media(Grid) options
| 종류 | 디바이스 | 단위(px) |
|:---:|:---:|:---:|
| Large Devices | Desktops | 1024px 이상 |
| Medium Devices | Tablets | 1024px 이하 |
| Small Devices | Tablets + Phones | 768px 이하 |

## Organize information
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
  <em><strong> 3) <meta property="og:type" content="website"></strong></em>
  > <em><b>property</b></em>는 단순하게 속성이라는 의미를 가지고 있음</br>
  ```html
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
  ```
    
