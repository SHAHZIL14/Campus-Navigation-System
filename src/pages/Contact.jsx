import { useState } from "react";
import { GeneralHeadingBox } from "../index";

function Contact() {
  const screenWidth = window.innerWidth;
  let lg = screenWidth > 768 ? true : false;

  function validateIndianPhoneNumber(phoneNumber) {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
    const regex = /^[789]\d{9}$/;
    if (regex.test(cleanedPhoneNumber)) {
      return true; 
    } else {
      return false; 
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const [formData, setFormData] = useState({
    userName: "",
    userMailId: "",
    userPhoneNumber: "",
    userRoleAtCollege: "",
    userMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if(formData.userPhoneNumber.length>0 && !validateIndianPhoneNumber(formData.userPhoneNumber)){
        alert("Enter a valid phone Number");
        return;
      }

      if(!validateEmail(formData.userMailId)){
        alert("Enter a valid MailID");
        return;
      }
      alert("Your message is delivered.");
      console.log(formData);
      setFormData({
        userName: "",
        userMailId: "",
        userPhoneNumber: "",
        userRoleAtCollege: "",
        userMessage: "",
      });
  };

  return (
    <div className="h-auto w-auto gap-1 relative flex flex-col items-center my-5">
      <GeneralHeadingBox heading={"contact us"} />
      <div className=" w-full flex justify-center">
        <form
          onSubmit={handleSubmit}
          action=""
          method="POST"
          className="  w-10/12 md:w-2/3 lg:w-1/3"
        >
          <div className="my-5">
            <label
              htmlFor="name"
              className="capitalize ibm-plex-sans font-semibold text-product-color"
            >
              name*
            </label>
            <br />
            <input
              className="w-full text-black border-2 border-product-color rounded-md p-1"
              type="text"
              name="userName"
              id="name"
              value={formData.userName}
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className="my-5">
            <label
              htmlFor="mailId"
              className="capitalize ibm-plex-sans font-semibold text-product-color"
            >
              mail ID*
            </label>
            <br />
            <input
              className="w-full border-2 border-product-color rounded-md p-1"
              type="email"
              name="userMailId"
              id="email"
              value={formData.userMailId}
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className="my-5">
            <label
              htmlFor="phoneNumber"
              className="capitalize ibm-plex-sans font-semibold text-product-color"
            >
              phone
            </label>
            <br />
            <input
              className="w-full border-2 border-product-color rounded-md p-1"
              type="number"
              name="userPhoneNumber"
              id="phoneNumber"
              value={formData.userPhoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="my-5">
            <label
              htmlFor="userRoleAtCollege"
              className="capitalize ibm-plex-sans font-semibold text-product-color"
            >
              You are:
            </label>
            <br />
            <div className="flex justify-between">
              <div>
                <label
                  htmlFor="student"
                  className="capitalize ibm-plex-sans font-semibold text-product-color mr-2"
                >
                  Student
                </label>
                <input
                  type="radio"
                  name="userRoleAtCollege"
                  id="userRoleAtCollege"
                  value="student"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="Faculty"
                  className="capitalize ibm-plex-sans font-semibold text-product-color mr-2"
                >
                  Faculty
                </label>
                <input
                  type="radio"
                  id="userRoleAtCollege"
                  name="userRoleAtCollege"
                  value="Faculty"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="staff"
                  className="capitalize ibm-plex-sans font-semibold text-product-color mr-2"
                >
                  Staff
                </label>
                <input
                  type="radio"
                  id="userRoleAtCollege"
                  name="userRoleAtCollege"
                  value="Staff"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="others"
                  className="capitalize ibm-plex-sans font-semibold text-product-color mr-2"
                >
                  others
                </label>
                <input
                  type="radio"
                  name="userRoleAtCollege"
                  id="userRoleAtCollege"
                  value="Others"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="my-5">
              <label
                htmlFor="message"
                className="capitalize ibm-plex-sans font-semibold text-product-color"
              >
                Your thought*
              </label>
              <br />
              <textarea
                placeholder="Write your message here"
                className="border-2 p-1 border-product-color rounded-md w-full"
                name="userMessage"
                id="userMessage"
                cols="30"
                rows="5"
                value={formData.userMessage}
                onChange={handleChange}
                required={true}
              ></textarea>
            </div>

            <div className="my-5 w-full flex justify-center">
              <button
                type="submit"
                className="bg-product-color py-1 hover:bg-white hover:text-product-color hover:border-product-color  border-2 rounded-md text-white px-4 mx-auto"
              >
                {" "}
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;
