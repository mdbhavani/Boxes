const Box = (props) => {
  const { className, name } = props;
  return (
    <div className={className}>
      <p className="para">{name}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="con">
      <Box name="Small" className="small" />
      <Box name="Medium" className="medium" />
      <Box name="Large" className="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
