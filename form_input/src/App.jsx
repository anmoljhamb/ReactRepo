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
        },
        {
            id: 2,
            name: "fullname",
            type: "text",
            placeholder: "Fullname",
            label: "Fullname",
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
        },
        {
            id: 5,
            name: "sth",
            type: "text",
            placeholder: "Sth",
            label: "Sth",
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
