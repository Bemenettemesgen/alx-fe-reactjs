import RegistrationForm from "./components/RegistrationForm";
import React from "react";
import FormikForm from "./components/FormikForm";

const App = () => {
    return (
        <div>
            <h1>User Registration</h1>
            <RegistrationForm />
            <FormikForm />
        </div>
    );
};

export default App;
