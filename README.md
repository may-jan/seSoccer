# 목차

- [사용방법](#사용방법)
- [프로젝트 소개](#프로젝트-소개)
- [사용된 기술 스택](#사용된-기술-스택)
  - [Front-End](#front-end)
  - [Back-End](#back-end)
- [API Docs](#api-docs)
- [구현한 기능 목록](#구현한-기능-목록)
- [규칙](#규칙)
- [팀 노션](#팀-노션)
- [팀 소개](#팀-소개)

<br/>

# 사용방법
- sesoccer-api
	```bash
	$ git clone https://github.com/djshinnn/seSoccer-api.git
	```
	```bash
	$ npm install
	```
	```bash
	$ npm start
	```
- sesoccer
	```bash
	$ git clone https://github.com/Harimad/seSoccer.git
	```
	```bash
	$ npm install
	```
	```bash
	$ npm start
	```

- 회원가입
- 로그인
  - 테스트 계정
	```
	id : test@test.com
	pw : testtest
	```

<br/>

# 프로젝트 소개

<div align="center">
<img src="src/asset/images/sesoccer.png" alt="logo" width="300">
<br>
<p>
  <b>청년취업사관학교 새싹(SeSAC) 기업연계형 프론트엔드 실무 프로젝트 과정 2기</b>에서
	<br/>
	최종 프로젝트 진행 전, 팀 프로젝트의 경험을 쌓고자 모여 진행한 프로젝트입니다.</p>
<p>QATAR 월드컵 기간과 겹쳐 웝드컵을 주제로 웹페이지를 만들어보자고 결정하였고<br/>Naver와 Daum의 월드컵 페이지를 참고하여 진행하였습니다.</p>
</div>

<br/>

# 사용된 기술 스택

## Front-End

![](https://img.shields.io/badge/front_end-javascript-yellow?style=for-the-badge&logo=javascript)

![](https://img.shields.io/badge/front_end-react-skyblue?style=for-the-badge&logo=react)

![](https://img.shields.io/badge/front_end-mui-blue?style=for-the-badge&logo=mui)

![](https://img.shields.io/badge/💅%20front_end-styled_components-purple?style=for-the-badge)

![](https://img.shields.io/badge/%20front_end-sass-CC6699?style=for-the-badge&logo=sass)

## Back-End

![](https://img.shields.io/badge/back_end-express-green?style=for-the-badge&logo=express)

![](https://img.shields.io/badge/back_end-mongodb-olive?style=for-the-badge&logo=mongodb)

<br/>

# API Docs
### 순서

1. [sessac-api 폴더에서 (git pull)](https://github.com/djshinnn/seSoccer-api)
2. npm run dev로 실행
3. mongodb compass sessac-api 연결

### API

#### 회원가입 요청 - POST
- [http://localhost:5050/api/users/signup](http://localhost:5050/api/users/signup)
- body: nickName, email, password, checkPassword

#### 로그인 요청 - POST
- [http://localhost:5050/api/users/login](http://localhost:5050/api/users/login)
- body: email, password,

#### 예정경기 가져오기 - GET
- [http://localhost:5050/api/rounds](http://localhost:5050/api/rounds)

#### 예정경기 요청 - POST
- [http://localhost:5050/api/rounds](http://localhost:5050/api/rounds)
- body: round, date, homeTeam, homeTeamScore, awayTeam, awayTeamScore, homeTeamVote, awayTeamVote, drawTeamVote, homeTeamImg, awayTeamImg

<br/>

# 구현한 기능 목록

- 회원가입 기능 구현
- 로그인 기능 구현
- Vote 기능 구현
- 서버 데이터 연동(MongoDB)
- 스타일링 구현(MUI, Styled-components, SASS)
- 피그마 레이아웃 구성

<br/>

# 규칙

1. Github Process
	- git fork => git clone => git remote add upstream =>  git add => git commit => git push origin main => pull request => git pull upstream main
   <br>
   (*upstream: team repository, *origin: personal forked repository)
2. Commit message 작성 시 [commit type convention](https://github.com/pvdlg/conventional-commit-types)은 꼭 지키기
3. 오후 6시 회의 진행 (월, 수)

<br/>

# 팀 노션

[노션 바로가기](https://www.notion.so/b68a962f426541248dcb93e4c15d566d)

<br/>

# 팀 소개

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Role</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<a href="https://github.com/suhyeon21">간수현</a>
			</td>
			<td>Front-End</td>
		</tr>
		<tr>
			<td>
<a href="https://github.com/sognociel">박보미</a>
			</td>
			<td>Front-End</td>
		</tr>
				<tr>
			<td>
				<a href="https://github.com/may-jan">정재은</a>
			</td>
			<td>Front-End</td>
		</tr>
				<tr>
			<td>
				<a href="https://github.com/JungJaebin">정재빈</a>
			</td>
			<td>Front-End</td>
		</tr>
				<tr>
			<td>
				<a href="https://github.com/yongjae95">박용재</a>
			</td>
			<td>Front-End</td>
		</tr>
			<tr>
			<td>
				<a href="https://github.com/djshinnn">신동주</a>
			</td>
			<td>Front-End & Back-End</td>
		</tr>
		<tr>
			<td>
				<a href="https://github.com/Harimad">이성현</a>
			</td>
			<td>Front-End & Back-End</td>
		</tr>
	</tbody>
</table>


