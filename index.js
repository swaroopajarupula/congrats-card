const element = (
  <div>
    <div className="bg-container"></div>
    <h1 className="main-heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="heading">Kiran V</h1>
      <p className="para">Vishnu Institute of Computer Education and Technology,Bhimavaram</p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" className="image"
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
