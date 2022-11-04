const About = ({ metadata }) => {
  return (
    <div>
      <h2>About Me</h2>
      <div className="main--box">
        {metadata.map((element) => {
          return <p key={JSON.stringify(element.info)}>{element.info}</p>;
        })}
      </div>
    </div>
  );
};

export default About;
