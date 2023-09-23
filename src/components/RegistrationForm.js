import { useEffect, useState } from "react";
import Button from "./Button";

// url: https://backend.getlinked.ai/hackathon/contact-form

const RegistrationForm = ({ setIsRegistered }) => {
  // states for input fields
  const [groupName, setGroupName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState(null);
  const [size, setSize] = useState(null);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  // states for data fetch state
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // state to track the fetching of categories
  const [categories, setCategories] = useState(null);

  // function to fetch categories
  const fetchData = async () => {
    let data = await fetch(
      "https://backend.getlinked.ai/hackathon/categories-list"
    );
    data = await data.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // form validation function
  const validateForm = () => {
    const emailRegex = new RegExp(
      "/^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$"
    );

    if (groupName.length == 0) {
      return false;
    }
    if (phone.length == 0) {
      return false;
    }
    if (!emailRegex.test(mail)) {
      return false;
    }
    if (groupName.length == 0) {
      return false;
    }
    if (topic.length == 0) {
      return false;
    }
    if (category == null) {
      return false;
    }

    return true;
  };

  const postData = (url, data) => {
    setIsLoading(true);
    setGroupName("");
    setPhone("");
    setMail("");
    setTopic("");
    setCategory(null);
    setSize(null);

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
          setIsRegistered(true);
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
    console.log("hello");
    e.preventDefault();
    console.log("hello again");
    const data = {
      email: mail,
      phone_number: phone,
      team_name: groupName,
      group_size: size,
      project_topic: topic,
      category: category,
      privacy_poclicy_accepted: true,
    };
    postData("https://backend.getlinked.ai/hackathon/registration", data);
  };

  return (
    <form className=" mt-8" onSubmit={(e) => handleSubmit(e)}>
      <div className="grid grid-cols-2 gap-8">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="first-name" className="text-sm">
            Team's Name
          </label>
          <input
            type="text"
            placeholder="Enter the name of your group"
            id="team-name"
            name="team-name"
            className="rounded-md bg-transparent w-full py-4 px-7 border border-white"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <span></span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="mail" className="text-sm">
            Phone
          </label>
          <input
            type="text"
            placeholder="Enter your phone number"
            id="phone-number"
            name="phone-number"
            className="rounded-md bg-transparent w-full py-4 px-7 border border-white"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <span></span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="mail" className="text-sm">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter your email address"
            id="email"
            name="email"
            className="rounded-md bg-transparent w-full py-4 px-7 border border-white"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <span></span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="mail" className="text-sm">
            Project Topic
          </label>
          <input
            type="text"
            placeholder="What is your group project topic"
            id="project-topic"
            name="project-topic"
            className="rounded-md bg-transparent w-full py-4 px-7 border border-white"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <span></span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="category" className="text-sm">
            Category
          </label>
          <select
            className="rounded-md bg-transparent w-full py-4 px-7 border border-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value={null} className="text-sm text-dark font-semibold">
              Select your category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  value={item.id}
                  className="text-sm text-dark font-semibold"
                >
                  {item.name}
                </option>
              ))}
          </select>
          <span></span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="group-size" className="text-sm">
            Group size
          </label>
          <select
            className="rounded-md bg-transparent w-full py-4 px-7 border border-white"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value={null} className="text-sm text-dark font-semibold">
              Select
            </option>
            <option value={2} className="text-sm text-dark font-semibold">
              2
            </option>
            <option value={4} className="text-sm text-dark font-semibold">
              4
            </option>
            <option value={6} className="text-sm text-dark font-semibold">
              6
            </option>
            <option value={8} className="text-sm text-dark font-semibold">
              6
            </option>
            <option value={10} className="text-sm text-dark font-semibold">
              6
            </option>
          </select>
          <span></span>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <span className="text-xs text-purple">
          Please review your registration details before submitting
        </span>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={privacyChecked}
            onChange={(e) => setPrivacyChecked((prevState) => !prevState)}
          />
          <span className="text-xs">
            I agreed with the event terms and conditions and privacy policy
          </span>
        </div>
        {!isLoading && <Button>Register Now</Button>}
        {isLoading && <Button disabled={true}>Loading..</Button>}
        {error && <span className="text-red-500">{error}</span>}
      </div>
    </form>
  );
};

export default RegistrationForm;
