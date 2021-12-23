import React, { Fragment, useState } from "react";

const AddAccounts = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitAccount = async (e) => {
    try {
      e.preventDefault();
      const body = {
        username: username,
        password: password,
      };
      const data = await fetch("http://localhost:8080/api/account", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="py-4 accordion" id="accountsAccordion">
        <div className="accordion-item">
          <div
            className="accordion-header collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#AddAccounts"
            aria-expanded="false"
            aria-controls="AddAccounts">
            <h4 className="accordion-button">Add Account</h4>
          </div>
          <div
            id="AddAccounts"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accountsAccordion">
            <form onSubmit={onSubmitAccount}>
              <div className="row mx-3 py-4">
                <div className="form-group col-12 col-md-6">
                  <label>Username</label>
                  <input
                    type="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-12 col-md-6">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    type="submit"
                    className="form-control btn btn-primary btn-primary-outline"
                    value="Add"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddAccounts;
