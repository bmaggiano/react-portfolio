import { useState } from 'react'
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
        setName(inputValue);
    } else if (inputType === 'email') {
        setEmail(inputValue);
    } else {
        setMessage(inputValue)
    }

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email)) {
        setErrorMessage('Invalid email address');
        return;
    }

    // Alert the user their first and last name, clear the inputs
    setName('');
    setEmail('');
    setMessage('');

    alert(`Hello ${name}, thank you for your interest! Please reach out directly via my email for response!`)
  }
    return (
        <div className='homeContainer'>
            <h2 className='text-center'>Contact Me</h2>
        <form
        onSubmit={handleFormSubmit}
      >
        <div className="mb-3 pt-0">
          <input
            onChange={handleInputChange}
            value={name}
            type="text"
            placeholder="Your name"
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            onChange={handleInputChange}
            value={email}
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            onChange={handleInputChange}
            value={message}
            placeholder="Your message"
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-blue-500 text-black active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {errorMessage && (
        <div>
            <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
    );
  };