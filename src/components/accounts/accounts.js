import React, { Fragment } from "react";
import AddAccounts from "./add_account";
import ListAccounts from './list_accounts';

const Accounts = () => {
  return <Fragment>
      <AddAccounts />
      <ListAccounts />
  </Fragment>;
};

export default Accounts;
