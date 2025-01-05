const DeliveryInfo = () => {
  return (
    <div className="mt-[67px] max-w-[1440px] mx-auto bg-[#fbebb5] p-3 lg:p-0">
      <div className="py-[96px] max-w-[1240px] mx-auto flex flex-col md:flex-row text-center md:text-start gap-4">
        {/* Free Delivery */}
        <div>
          <h4 className="text-[32px] font-medium">Free Delivery</h4>
          <p className="text-xl text-[#9F9F9F]">
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>

        {/* 90 Days Return */}
        <div>
          <h4 className="text-[32px] font-medium">90 Days Return</h4>
          <p className="text-xl text-[#9F9F9F]">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>

        {/* Secure Payment */}
        <div>
          <h4 className="text-[32px] font-medium">Secure Payment</h4>
          <p className="text-xl text-[#9F9F9F]">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
