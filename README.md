# 📦 isbr_util - 내부 로그 기록 유틸

회사 내부 웹앱에서 공통된 로그 기록을 위해 사용하는 유틸리티 패키지입니다.  
중앙 로그 서버(`usage_log`)로 로그를 전송하며, 사용자의 행동 흐름을 기록하고 분석할 수 있도록 돕습니다.

---

## ✨ 설치

```bash
npm install git+https://github.com/DaeGuL2/isbr_util.git
퍼블릭 레포면 바로 설치 가능.
프라이빗일 경우 SSH 키 또는 GitHub Personal Access Token을 사용해 설치해야 합니다.

⚙️ 환경 변수 설정
루트 디렉토리에 .env 파일을 만들고 다음 항목을 설정하세요:

env
복사
편집
REACT_APP_LOG_ENDPOINT=http://3.39.4.50:8080/api/log
REACT_APP_LOG_SECRET=your-log-secret-key
REACT_APP_LOG_ENDPOINT: 로그 수집 서버 주소

REACT_APP_LOG_SECRET: 로그 전송 시 헤더에 포함되는 보안 키

실제 인증은 서버에서 처리되며, 쿠키나 헤더 방식이 가능합니다.

🧠 사용 예시
js
복사
편집
import { sendLog } from 'isbr_util';

await sendLog({
  appName: '지원서 분석기',
  functionName: 'PDF 다운로드 클릭',
  userName: '홍길동',
  extra: {
    파일명: 'hong_resume.pdf',
    분석결과: '요약 성공',
  },
});
📌 파라미터 설명
필드명	필수	타입	설명
appName	✅	string	로그를 발생시킨 앱 이름
functionName	✅	string	수행한 기능 또는 동작
userName	✅	string	사용자 이름 또는 ID
extra	⛔	object	(선택) 추가 정보(JSON 형태)
📤 전송되는 데이터 구조 (서버로 전송 시)
json
복사
편집
{
  "app_name": "지원서 분석기",
  "function_name": "PDF 다운로드 클릭",
  "user_name": "홍길동",
  "createdAt": "2025-04-09T14:30:00.000Z",
  "extra": {
    "파일명": "hong_resume.pdf",
    "분석결과": "요약 성공"
  }
}
createdAt은 자동으로 현재 시각(ISO 포맷)으로 추가됨

🐛 에러 처리
환경 변수가 누락되면 다음과 같은 에러가 발생합니다:

bash
복사
편집
❌ 환경변수가 설정되지 않았습니다. .env 파일 확인!
로그 서버가 실패 응답을 반환한 경우:

복사
편집
❌ 로그 전송 실패: 인증 오류 또는 서버 문제
로그 ID를 정상적으로 반환하면:

복사
편집
✅ 로그 전송 완료: log_id_abc123
🧪 테스트용 환경변수 템플릿
.env.template 예시:

env
복사
편집
REACT_APP_LOG_ENDPOINT=
REACT_APP_LOG_SECRET=
📄 변경 이력
버전	변경 내용
v1.0.0	최초 릴리즈: 로그 전송 기능 및 인증 키 포함
🧠 기타 참고
이 패키지는 프론트엔드 환경(React, Vite 등) 또는 서버사이드에서 모두 사용 가능합니다.

fetch 기반으로 구현되어 있으므로 브라우저 또는 Node.js 18+ 이상 환경에서 사용 가능합니다.

🙋 문의 및 개선 제안
제작자: @DaeGuL2

피드백은 내부 슬랙 또는 GitHub Issue로 주세요.

yaml
복사
편집

---

✔️ 그대로 복사해서 `README.md` 파일에 붙여 넣으면 끝!  
필요하면 이 내용을 `.md` 파일로도 만들어서 zip으로 줄 수 있어 😎  
다음은 자동 테스트나 타입스크립트 확장도 가능!
