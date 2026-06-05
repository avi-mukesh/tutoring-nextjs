const items = (
  <span>
    Primary <b>·</b> GCSE <b>·</b> A-Level <b>·</b> Further Maths <b>·</b> AQA{" "}
    <b>·</b> Edexcel <b>·</b> OCR <b>·</b> Integration <b>·</b> Vectors <b>·</b>{" "}
    Statistics <b>·</b>
  </span>
);

const Ticker = () => {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {items}
        {items}
      </div>
    </div>
  );
};

export default Ticker;
