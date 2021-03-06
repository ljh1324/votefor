# Vote For
- 각 분야마다 여러 정당들의 공약을 보여주고 사용자가 원하는 공약을 선택하여 제출하면 선택된 공약들이 어떤 정당에서 낸 공약인지 비율을 보여주는 웹 앱
- 사용자가 공약을 선택할 때는 어떤 정당에서 낸 공약인지 비공개이며 정당의 비율을 보여줄 때 선택한 공약과 함께 정당을 공개

## 프론트엔드 개발 버전 실행
```
$ cd frontend
$ npm install
$ npm start
```

## 백엔드 개발 버전 실행
```
$ cd server
$ npm install
$ npm run dev
```

## 빌드 및 배포
```
$ cd frontend
$ npm run build
$ cp -r build/ ../server/frontend_build
$ cd ../server
$ npm install
$ npm install pm2 -g
$ npm run build
$ npm start
```

## 사용 기술
- Express: Node.js를 위한 빠르고 간편한 웹 프레임워크
- MySQL: 관계형 데이터베이스 관리 시스템
- Sequelize: Node.js 기반의 ORM. PostgreSQL, MySQL, MariaDB, SQLite, MS-SQL을 지원
- React: 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리
- Styled Components: CSS-in-JS 라이브러리
- Babel: ES6/ES7 코드를 ECMAScript5 코드로 transpiling 하기 위한 도구
- ESLint: 코드에 특정 스타일과 규칙을 적용시킬 수 있는 정적 분석 툴