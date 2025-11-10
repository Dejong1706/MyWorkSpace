const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* 상단 아이콘 */}
      <div className="mb-4">
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center border border-purple-300">
          {/* 예시로 보라색 아이콘 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-purple-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>
      {/* 제목 및 설명 */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">업무 정리</h1>
        <p className="text-md text-gray-500">
          Dejong&apos;s Personal Work Management System
        </p>
      </div>
      {/* 로그인 폼 */}
      <div className="bg-white rounded-xl shadow-md px-8 py-8 w-full max-w-md">
        <div className="mb-4">
          <label className="block mb-1 text-gray-700 font-semibold">
            아이디
          </label>
          <div className="flex items-center border rounded-lg px-3 bg-gray-100">
            {/* 보라색 아이콘 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              className="w-full bg-transparent outline-none py-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700 font-semibold">
            비밀번호
          </label>
          <div className="flex items-center border rounded-lg px-3 bg-gray-100">
            {/* 보라색 아이콘 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11V7a4 4 0 018 0v4M7 11h10M7 11v7h10V11M7 11a4 4 0 018 0"
              />
            </svg>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full bg-transparent outline-none py-2"
            />
          </div>
        </div>
        <div className="flex justify-end items-center mb-6">
          <div className="text-sm">
            <a href="#" className="text-purple-500 underline">
              회원가입
            </a>
          </div>
        </div>
        <button className="w-full py-3 bg-purple-500 text-white rounded-lg font-bold text-lg hover:bg-purple-600 transition">
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
