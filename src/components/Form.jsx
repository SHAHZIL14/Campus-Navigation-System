import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted");
    // Handle form submission logic (e.g., send data to server)
  };

  return (
    <div className="form-container w-full bg-purple-200 flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group m-5 p-5">
          <label htmlFor="name">Name</label>
          <br />
          <input 
          className="border-2 rounded-lg w-full border-product-color"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group m-5 p-5 ">
          <label htmlFor="email">Email</label>
          <br />
          <input 
          className="border-2 rounded-lg w-full border-product-color"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group m-5 p-5">
          <label htmlFor="phone">Phone</label>
          <br />
          <input 
          className="border-2 rounded-lg w-full border-product-color"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
