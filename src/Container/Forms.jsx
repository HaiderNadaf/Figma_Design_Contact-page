import React, { useState } from "react";
const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here
    console.log("Form Data Submitted: ", formData);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="forms">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="forms">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="forms">
          <label htmlFor="Text">Text:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-dark SUBMIT">
          SUBMIT
        </button>
        <div></div>
      </form>
    </section>
  );
};

export default Forms;
