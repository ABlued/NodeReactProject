# NODESINSA STORE 프로젝트 !

##### 안녕하세요 웹뿌링클치킨이 아니라 웹뿌론트엔드가 되고싶은 삐약삐약 주니어치킨개발자 ABlued입니다!

Node.js, React, MongoDB로 만든 의류 온라인쇼핑몰 NodeSinSa Store프로젝트에 대해 소개해드리겠습니다.

프로젝트 개요
---

프로젝트 목적 : css, js에서 새롭게 배운 개념들을 활용하고 JSON 파일 데이터를 비동기적으로 받아오기  
참여자 : ABlued  
사용 스택 : React Hooks, Nodejs, MongoDB, Express, Redux 
작업 환경 : VSCode  

주로 쓰인 개념들 
---
  
+ CSS
    + antd-design
  
+ React
    + rendering, props, Axios, Redux
  
+ Node.js
    + router, req&res, json, middleware, Auth, Express
  
+ MongoDB
    + MongoAPI, model

느낀 점 및 부족한 점
---

##### 느낀 점
처음으로 서버와 클라이언트를 동시에 다뤄보는거라 난이도가 너무 어려웠지만  
서버에서도 React의 컴포넌트처럼 router형식으로 체계적으로 나눠져있어서 코드의 재사용이 가능하다는 것을 배웠다.
  
##### 부족한 점
업로드한 이미지가 시간순으로 올림차순 정렬되어 있어야하는데 내림차순으로 되어있다.  
이러면 최신 게시물이 맨 아래로 배치되어 불편하게 된다.(각각의 상품마다 index라는 키값을 주어 가장 늦게 업로드될수록 value값을 크게 준다. 그 다음 value값을 기준으로 올림차순으로 정렬을 한다.)  

이 프로젝트는 John Ahn 선생님의 유투브 따라하며 배우는 노드, 리액트 시리즈 - 쇼핑몰 사이트 만들기 강좌수업을 기반으로 진행한 프로젝트입니다!  

강의 링크 : https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%87%BC%ED%95%91%EB%AA%B0/dashboard

![노드리액트쇼핑몰](https://user-images.githubusercontent.com/53801395/115142924-37a84f00-a07f-11eb-9668-49d6b7dcfa20.jpg)