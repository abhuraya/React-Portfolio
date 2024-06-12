import { useState } from "react";

// uses a regex expression to validate email inputs
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

  }

  // creates a form for the user to submit their name email and brief message to me if they are interested in an interview
  // creates react state variables fro email name text and errorMessages that are able to be updated through user interaction with the form
  function Form() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [ text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // captures user input and assigns it to the appropriate variable
    const inputHandler = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "name") {
            setName(inputValue);
        } else if (inputType === "text"){
            setText(inputValue)
        }
      }

      // ensures that all inputs are correct before submission
    const fromSubmitHandler = (event) => {
        event.preventDefault();

        if (!validateEmail(email)){
            setErrorMessage('Email is invalid');
            return;
        } else if (!email){
            setErrorMessage('Email is required');
        } else if (!name) {
            setErrorMessage('Name is required');
        } else if (!text) {
            setErrorMessage('A message is required');
        }
        setEmail('');
        setName('');
        setText('');
    };

    // renders the page and uses above functions
    return (
        <div className="container">
            <form className="form" onSubmit={fromSubmitHandler}>
                <div className="form-group row d-flex flex-column">
                    <div className="col-md-3">
                        <label for="email-input" className="m-2">
                            Email
                        </label>
                        <input 
                        className="form-control"
                        value={email}
                        name="email"
                        onChange={inputHandler}
                        type="email"
                        placeholder="Alex@email.com"
                        id="email-input"
                        />
                    </div>
                    <br></br>
                    <div className="col-md-3">
                    <label for="name-input" className="m-2">
                        Name
                    </label>
                        <input
                        className="form-control"
                        value={name}
                        name="name"
                        onChange={inputHandler}
                        type="text"
                        placeholder="Alex Smith"
                        id="name-input" 
                        />
                    </div>
                    <br></br>
                    <div className="col-md-3">
                        <label for="text-input" className="m-2">
                            Message
                        </label>
                        <textarea
                          className="form-control"
                          value={text}
                          name="text"
                          onChange={inputHandler}
                          type="text"
                          placeholder="Contact message"
                          id="text-input"
                          rows="3"
                        />
                    </div>
                    <div className="col-med-2">
                        <button type="submit" className="btn btn-info my-3">Submit</button>
                    </div>
                </div>
            </form>
            {errorMessage && (
                <div className="col-md-4">
                    <p>
                        <h5>
                            {errorMessage}
                        </h5>
                    </p>
                </div>
            )}
        </div>
    )


  }

  export default Form;

  