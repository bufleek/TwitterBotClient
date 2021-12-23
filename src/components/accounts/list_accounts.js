import React, { Fragment, useState, useEffect, Component } from "react";
import Icon from "@mdi/react";
import { mdiBookEditOutline } from "@mdi/js";
import { mdiDeleteCircleOutline } from "@mdi/js";

const ListAccounts = () => {
  const [accounts, setAccounts] = useState([]);

  const getAccounts = async () => {
    try {
      let response = await fetch("http://localhost:8080/api/account");
      let data = await response.json();
      if (data.status === "ok") {
        setAccounts(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  const deleteAccount = async (id) => {
    let response = await fetch("http://localhost:8080/api/account/"+id, {
      method: "DELETE"
    });
    let data = await response.json();
    if(data.status === "ok") {
        setAccounts(accounts.filter(it => it.id !== id));
    }
    else{getAccounts();}
  };
  return (
    <Fragment>
      <div className="py-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, i) => (
              <tr key={account.id}>
                <td>{i + 1}</td>
                <td>{account.username}</td>
                <td className="text-end">
                  <div>
                    <span className="text-info px-1 pointer">
                      <Icon path={mdiBookEditOutline} title="Edit" size={1} />
                    </span>
                    <span
                      className="text-danger px-1 pointer"
                      onClick={(e) => deleteAccount(account.id)}>
                      <Icon
                        path={mdiDeleteCircleOutline}
                        title="Delete"
                        size={1}
                      />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListAccounts;
