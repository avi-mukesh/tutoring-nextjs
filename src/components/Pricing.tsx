type Tier = {
  tier: string;
  price: string;
  desc: string;
  feature?: boolean;
};

const tiers: Tier[] = [
  {
    tier: "A-Level",
    price: "40",
    desc: "Pure, mechanics & statistics. Exam technique that turns method marks into full marks.",
    feature: true,
  },
  {
    tier: "GCSE",
    price: "30",
    desc: "Foundation to higher tier — confidence built topic by topic, ahead of the paper.",
  },
  {
    tier: "Primary",
    price: "20",
    desc: "Friendly, patient foundations that make numbers feel like play, not pressure.",
  },
];

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">Plain &amp; fair</span>
          <h2>Pricing.</h2>
          <p className="note">
            Starting hourly rates by level. No packages, no lock-in.
          </p>
        </div>

        <div className="price-grid">
          {tiers.map((t, i) => (
            <div
              key={t.tier}
              className={`price${t.feature ? " feature" : ""}`}
              data-reveal
              data-reveal-delay={i === 0 ? undefined : String(i)}
            >
              <span className="tier">{t.tier}</span>
              <div className="amount">
                <sup>£</sup>
                {t.price}
              </div>
              <span className="per">per hour</span>
              <p className="desc">{t.desc}</p>
            </div>
          ))}
        </div>

        <p className="price-foot">
          * Further Maths is an additional £5 per hour.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
