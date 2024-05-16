##### HTML학습

#### 1일차
- 기본적인 HTML형태작성
- <style>을 이용하여 텍스트 형태변환
- <a>태그를 이용하여 웹페이지 태그만들기

![a태그](https://raw.githubusercontent.com/Hsegunn/HTMLStudy/main/image/image1.png)

#### 2일차
- 텍스트 폰트 변경하기
- 태그를 이용하여 리스트 만들기
- 테이블태그를 이용하여 표 만들기

![테이블](https://raw.githubusercontent.com/Hsegunn/HTMLStudy/main/image/image2.png)

- 웹페이지에 사진띄우기, 동영상 및 오디오 재생하기

![사진](https://raw.githubusercontent.com/Hsegunn/HTMLStudy/main/image/image3.png)

#### 3일차
- form 태그를 이용한 html 학습

![form태그](https://raw.githubusercontent.com/Hsegunn/HTMLStudy/main/image/image4.png)

#### 4일차
- HTML 태그성질 학습
- 태그 성질에 따른 분류
    - 블록 요소 태그
        - html, body, div, p, ul, ol, li, dl, dt ...
        - 기본 가로 공간의 크기가 부모태그와 동일하게 인식
        - 연속해서 작성하면 세로로 배열됨
        - 공간값이 적용됨(w, h)
    - 인라인 요소 태그
        - a, span, strong, i, em ...
        - 기본 가로 공간의 크기가 안쪽에 포함된 내용만큼만 인식(CONTENT)
        - 연속해서 작성하면 가로로 배열됨
        - 공간값이 적용 안됨
    - 인라인 블록요소 태그
        - img, input, button ...
        - 기본 가로 공간의 크기가 안쪽에 포함된 내용만큼 인식
        - 연속해서 작성하면 가로배열
        - 공간값이 적용됨
- CSS 학습

#### 5일차
- CSS 선택자 학습
    - 구조 선택자: 특정 위치에 있는 태그를 선택할 때 사용
    - 속성 선택자: input 태그의 type속성에 사용
    - 상태 선택자: 입력 양식의 상태를 선택할 때 사용
    - 반응 선택자: 사용자가 마우스로 특정한 행동을 취했을 때 CSS 속성을 지정 할 수 있음

    ![반응 선택자](https://raw.githubusercontent.com/Hsegunn/HTMLStudy/main/image/image5.gif)

#### 6일차
- CSS 학습
    - CSS display학습
    - border를 이용하여 body 꾸미기

    ![borderSolid](https://raw.githubusercontent.com/Hsegunn/HTMLStudy/main/image/image6.png)

    - background 이미지 삽입

    ![backgroundIMG](https://raw.githubusercontent.com/Hsegunn/HTMLStudy/main/image/image7.png)

#### 7일차
- CSS 학습
    - font-family를 이용하여 글꼴바꾸기
    - text-align을 이용하여 글 정렬하기
    - text-shadow를 이용하여 글에 그림자넣기
    - position을 이용하여 도형의 위치를 지정

#### 8일차
- CSS 단위 적용기준
    - 부모요소에 따라서 사이즈가 변경되어야 하는 경우: % , em
      그렇지 않을 경우: 뷰포트, rem
    - 요소의 너비 또는 높이에 따라서 사이즈가 변경되어야 하는 경우: % , 뷰포트
      폰트에 따라서 크기가 변경될 경우: em, rem
    - em VS rem
        - rem은 루트요소에 있는 폰트 사이즈에 따라서 크기가 결정됨
        - em은 부모요소에 있는 폰트 사이즈에 따라서 크기가 결정됨

#### 9일차
- CSS 미디어 쿼리 (미디어 쿼리문사용 시 띄어쓰기 주의할 것 띄어쓰기를 안하면 적용이 안됨)
    - @media screen and (max-width: 767px): 뷰포트의 가로너비가 767px 이상인 경우 적용 

#### 10일차
- 자바 스크립트 학습
    - 전역변수와 지역변수
    - 함수 호이스팅
    - 동적타입
    - 반복문과 조건문
- 학습 내용을 바탕으로 예제문제 풀이

#### 11일차
- 자바 스크립트 학습
    - 함수와 파라미터
    - 반복문을 활용한 배열출력
    - 화살표 함수와 콜백함수

#### 12일차
- 자바 스크립트 학습
    - 클래스 학습
    - HTMLCollection : javascript가 문서객체에 접근해서 받아오는 리턴타입(배열)
    - HTMLCollection 객체를 반환하는 메서드(DOM요소에 접근)
        - getElementByTagName('name')
        - getElementByClassName('name')
        - getElementById('id')

#### 13일차
- 자바 스크립트 내용정리
    - DOM (Document Object Model)
        - 자바스크립트를 HTML에 적용하기 위해서 HTML의 요소를 문서객체형태로 이해하는 것
    - DOM API
        - Document : <html> dom 트리의 루트노드 (문서전체)
        - Element : 각 태그
        - arribute : 속성
        - style : css
        - collection : 배열..
    - textContent : 노드의 text에 접근하여 출력

#### 14일차
- 자바 스크립트 학습
    - async
        - callback: js에서 함수는 object. 그래서, 함수는 다른 함수의 인자로 쓰일 수도 어떤 함수에 의해 리턴 될 
                    수도 있음. 이런 함수를 고차 함수. 결국, 인자로 넘겨지는 함수를 콜백 함수라고 한다
        - async await
            - promise: 콜백함수 대신에 사용하는 비동기 오브젝트, producer와 consumer를 연결해주는 js객체
            - Producer: promise를 사용해서 비동기 실행함수를 만들고 실행결과 성공하면 resolve(value)호출,
                        결과값을 consumer에게 전달 실패하면 reject(error)를 전달
            - 상태: 대기(pending), 거절(reject), 이행(fulfilled)
            - consumer: then()

#### 15일차
- 자바 스크립트 학습
    - Fetch API: 백엔드와 통신하는 API, fetch(url, option) return은 promise타입의 객체
    - .then(): promise를 처리할 수 있는 메서드
