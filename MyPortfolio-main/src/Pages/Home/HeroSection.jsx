export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm SIVA SURIYAN</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Computer Science</span>
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
            Java, DSA, OOPs, Frontend Development.
          </p>
        
          <br />
          <a href="https://www.linkedin.com/in/siva-suriyan-102681220/" className="btn btn-primary">Get In Touch</a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
