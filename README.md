# typescript_server

typescript + express

폴더구조

src
  | core : 전체적인 설정파일 및 공통모듈 정의
      | code : enum 타입의 코드 정의모음
      | config : 설정파일
      | middleware : 미들웨어
      | model : 객체 response 객체모델 
      | response : http 응답객체 
      | util : 유틸성 공통함수 
  | env : environment 파일
  | models : DB 스키마 정의
      | types : DB 스키마 타입
  | public : 정적파일 위치
  | routes : 컨트롤러 및 비지니스 로직 라우터
      | board :
      | category :
      | comment : 
      | mail : 
      | post : 
      | user : 
   server.ts : 메인 실행 파일