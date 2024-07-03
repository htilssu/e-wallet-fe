export function PageNotFound() {
  return (
    <div className={"h-screen w-full p-10 flex justify-center items-center"}>
      <div className={"w-full flex flex-col justify-center items-center"}>
        <img src="/404.svg" className={"h-full w-1/3"} alt="404" />
        <button
          className={
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          }
        >
          Quay về trang chủ
        </button>
      </div>
    </div>
  );
}
