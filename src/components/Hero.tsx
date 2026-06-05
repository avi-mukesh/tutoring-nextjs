const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        {/* Image lives in /public — see README. */}
        <img
          src="/lecture.webp"
          alt="Avi Mukesh at a chalkboard covered in equations"
        />
      </div>
      <span className="credit">Warwick · MMath · First Class</span>
      <div className="wrap hero-inner">
        <span className="eyebrow">Online maths tuition</span>
        <h1>
          Any topic.
          <br />
          Any time.
          <br />
          <em className="hl-word">
            Mastered.
            <svg
              className="underline"
              viewBox="0 0 300 24"
              preserveAspectRatio="none"
            >
              <path d="M4 15 C 60 6, 130 6, 180 12 C 230 18, 270 16, 296 9" />
            </svg>
          </em>
        </h1>
        <p className="lede">
          One-to-one tuition with a Warwick mathematician — patient, clear, and
          built around you.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-fill" data-magnetic>
            Arrange a free 15-min call
          </a>
          <a href="#works" className="btn" data-magnetic>
            How it works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
