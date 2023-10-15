"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h4>에러가 발생했습니다.</h4>
      <button
        onClick={() => {
          reset();
        }}
      >
        다시 시도
      </button>
      <span>에러내용</span>
      <p>{error}</p>
    </div>
  );
}
