const Buttons = () => {
  const OnVia = () => {
    console.log("hi");
  };

  return (
    <div className="button-container">
      <div className="button">
        <button type="button " className="btn btn-dark btn1" onClick={OnVia}>
          VIA SUPPORT CHAT
        </button>
        <button type="button btn" className="btn btn-dark btn1 ">
          VIA CALLS
        </button>
      </div>

      <div className="btn3">
        <button className="email-button">VIA EMAIL FORM</button>
      </div>
    </div>
  );
};

export default Buttons;
