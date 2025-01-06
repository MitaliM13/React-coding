import { useState } from "react";

function FormValidation() {
  const [input, setInput] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(input);
    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted Successfully!");
    } else {
      console.log("Validation errors");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.first.trim()) {
      errors.first = "First Name is required";
    }
    if (!data.last.trim()) {
      errors.last = "Last Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.password) {
      errors.password = "Password is Required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    return errors;
  };

  return (
    <div className="flex flex-col justify-center items-center p-16 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Look out for validations!</h1>
      <div className="flex flex-col justify-center align-middle border border-gray-300 shadow-lg p-8 bg-white rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">First Name:</label>
            <input
              placeholder="Enter first name"
              name="first"
              value={input.first}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
            />
            {error.first && (
              <span className="text-red-600 text-sm mt-1">{error.first}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Last Name:</label>
            <input
              placeholder="Enter last name"
              name="last"
              value={input.last}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
            />
            {error.last && (
              <span className="text-red-600 text-sm mt-1">{error.last}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
            />
            {error.email && (
              <span className="text-red-600 text-sm mt-1">{error.email}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password:</label>
            <input
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="Min 8 characters"
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
            />
            {error.password && (
              <span className="text-red-600 text-sm mt-1">
                {error.password}
              </span>
            )}
          </div>
          <button
            className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormValidation;
