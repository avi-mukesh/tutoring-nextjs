const HowItWorks = () => {
  return (
    <section id="works">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">The arrangement</span>
          <h2>How it works.</h2>
          <p className="note">
            Arrange a free fifteen-minute video call today — no commitment, just
            a conversation about where you&apos;d like to go.
          </p>
        </div>

        <div className="works">
          <div className="work" data-reveal>
            <span className="num">01 / LEVEL</span>
            <h3>Any level</h3>
            <ul>
              <li>Primary</li>
              <li>GCSE</li>
              <li>A-Level</li>
            </ul>
          </div>
          <div className="work" data-reveal data-reveal-delay="1">
            <span className="num">02 / TOPIC</span>
            <h3>Any topic</h3>
            <ul>
              <li>Integration</li>
              <li>Vectors</li>
              <li>Statistics</li>
              <li>…and beyond</li>
            </ul>
          </div>
          <div className="work" data-reveal data-reveal-delay="2">
            <span className="num">03 / BOARD</span>
            <h3>Any exam board</h3>
            <ul>
              <li>AQA</li>
              <li>Edexcel</li>
              <li>OCR</li>
            </ul>
          </div>
        </div>

        <div className="online-band" data-reveal>
          <div>
            <span className="eyebrow">Wherever you are</span>
            <h3>All online.</h3>
            <p>
              Lessons run over a shared digital whiteboard, so every working is
              saved and sent home afterwards. Learn from your desk — and keep the
              notes forever.
            </p>
          </div>
          <div className="imgwrap">
            <img
              src="/computer.webp"
              alt="A laptop on a desk ready for an online lesson"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
