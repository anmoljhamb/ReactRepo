import FormInput from "./components/FormInput";
import "./App.css";
import { useState } from "react";

function App() {
    const initalForm = {
        username: "",
        fullname: "",
        password: "",
        confirmPassword: "",
        sth: "",
    };

    const [form, setForm] = useState(initalForm);

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
            errorMessage: "Error Message for Username",
            required: true,
        },
        {
            id: 2,
            name: "fullname",
            type: "text",
            placeholder: "Fullname",
            label: "Fullname",
            errorMessage: "Error Message for Fullname",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            errorMessage: "Error Message for Password",
            required: true,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            errorMessage: "Error Message for Confirm password",
            required: true,
        },
    ];

    const handleOnChange = (event) => {
        console.log(event.target.id);
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(form);
        setForm(initalForm);
    };

    return (
        <div className="App">
            <form onSubmit={handleOnSubmit}>
                <h1>Register</h1>
                {inputs.map((el) => (
                    <FormInput
                        key={el.id}
                        {...el}
                        value={form[el.name]}
                        onChange={handleOnChange}
                    />
                ))}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
