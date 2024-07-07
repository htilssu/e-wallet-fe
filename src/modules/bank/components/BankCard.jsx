const BankCard = () => {
  return (
    <div className="w-full h-full relative rounded-[20px] overflow-hidden">
      <div className="w-full h-full left-0 top-0 absolute bg-black">
        <div
          className={
            "w-1/2 h-full bg-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute bg-center bg-no-repeat bg-[url('/card_bg.jpg')]"
          }
        />
        <div className="w-full text-white p-3 h-2/5 bottom-0 left-0 absolute bg-cover bg-[url('/card_infoholder.png')] z-10">
          <div>Tran Trung </div>
          <div>3/27</div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
