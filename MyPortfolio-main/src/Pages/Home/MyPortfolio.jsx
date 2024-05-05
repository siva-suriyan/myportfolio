import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
        <a href="https://github.com/siva-suriyan" className="btn btn-github">
           Visit My GitHub
        </a>

        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <br />
                <p className="text-md">{item.description}</p>
              </div>
              <a href={item.Github} target="_blank" rel="noopener noreferrer" className="text-sm portfolio--link">
                View Github
                
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
