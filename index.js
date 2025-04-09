// index.js
export async function sendLog({ appName, functionName, userName, extra = {} }) {
    const endpoint = process.env.REACT_APP_LOG_ENDPOINT;
    const secret = process.env.REACT_APP_LOG_SECRET;
  
    if (!endpoint || !secret) {
      throw new Error('❌ 환경변수가 설정되지 않았습니다. .env 파일 확인!');
    }
  
    const response = await fetch(endpoint, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'LOG_SECRET': secret,
      },
      body: JSON.stringify({
        app_name: appName,
        function_name: functionName,
        user_name: userName,
        createdAt: new Date().toISOString(), // ✅ 현재 날짜/시간 추가
        extra,
      }),
    });
  
    const result = await response.json();
  
    if (!response.ok) {
      console.error('❌ 로그 전송 실패:', result.message);
      throw new Error(result.message);
    }
  
    console.log('✅ 로그 전송 완료:', result.log_id);
    return result.log_id;
  }
  