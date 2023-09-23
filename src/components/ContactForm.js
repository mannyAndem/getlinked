import { useState } from "react";
import Button from "./Button";

// url: https://backend.getlinked.ai/hackathon/contact-form

const ContactForm = () => {
  // states to track input
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  // states to track state of fetch function
  const [requestSuccess, setrequestSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // form validation

  // states to track form validation and show error messages
  const [nameInputError, setNameInputError] = useState(null);
  const [mailInputError, setMailInputError] = useState(null);
  const [messageInputError, setMessageInputError] = useState(null);

  const validateForm = () => {
    const emailRegex = new RegExp(
      "/^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$"
    );
    console.log(emailRegex.test(mail));
    console.log(mail);
    // variable to track validation state
    let validationProgress = 0;

    if (name.length == 0) {
      setNameInputError("The name field is required");
    } else {
      setNameInputError(null);
      validationProgress++;
    }
    if (message.length == 0) {
      setMessageInputError("The message field is required");
    } else {
      setMessageInputError(null);
      validationProgress++;
    }
    if (!emailRegex.test(mail)) {
      setMailInputError("Please enter a valid email");
    } else {
      setMailInputError(null);
      validationProgress++;
    }
    return validationProgress == 3;
  };

  const postData = (url, data) => {
    setIsLoading(true);
    setName("");
    setMail("");
    setMessage("");

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          setrequestSuccess(true);
          setIsLoading(false);
          setError(null);
        } else {
          setIsLoading(false);
          throw new Error("Something went wrong, please try again.");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.message == "Something went wrong, please try again.") {
          setError(err.message);
        } else {
          setError("Network error, please try again.");
        }
      });
  };
  const handleSubmit = (e) => {
    const data = {
      email: mail,
      first_name: name,
      message: message,
    };
    e.preventDefault();
    if (validateForm()) {
      postData("https://backend.getlinked.ai/hackathon/contact-form", data);
    }
  };

  return (
    <form
      className="flex flex-col gap-10 mt-8 items-center "
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="w-full">
        <label htmlFor="first-name" className="hidden">
          First name
        </label>
        <input
          type="text"
          placeholder="First Name"
          id="first-name"
          name="first-name"
          className="rounded-md bg-transparent w-full py-4 px-7 border border-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameInputError && (
          <span className="text-red-500 text-sm">{nameInputError}</span>
        )}
      </div>
      <div className="w-full">
        <label htmlFor="mail" className="hidden">
          Mail
        </label>
        <input
          type="text"
          placeholder="Mail"
          id="mail"
          name="mail"
          className="rounded-md bg-transparent w-full py-4 px-7 border border-white"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        {mailInputError && (
          <span className="text-red-500 text-sm">{mailInputError}</span>
        )}
      </div>
      <div className="w-full">
        <label htmlFor="message" className="hidden">
          Message
        </label>
        <textarea
          placeholder="Message"
          id="message"
          name="message"
          className="rounded-md h-28 bg-transparent w-full py-4 px-7 border border-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {messageInputError && (
          <span className="text-red-500 text-sm">{messageInputError}</span>
        )}
      </div>
      {!isLoading && <Button>Submit</Button>}
      {isLoading && <Button disabled={true}>Loading..</Button>}
      {error && <span className="text-red-500">{error}</span>}
      {requestSuccess && (
        <span className="text-green-500">
          Your message has been sent successfully.
        </span>
      )}
    </form>
  );
};

export default ContactForm;
