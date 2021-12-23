import React, { Fragment } from "react";
import Replies from "./replies/replies"
import Accounts from "./accounts/accounts"

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="sticky sticky-top p-3 text-center">
          <h3 className="text-primary">TWITTER BOT</h3>
        </div>

        <ul className="nav nav-tabs" role="tablist" id="mainTab">
          <li className="nav-item">
            <a
              className="nav-link active d-flex justify-content-between align-items-center"
              id="RepliesTab"
              href="#Replies"
              role="tab"
              aria-controls="Replies"
              aria-selected="true"
              data-bs-toggle="tab"
              data-bs-target="#Replies">
              <span>Replies:</span>
              <span> 0</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="AccountsTab"
              href="#Accounts"
              role="tab"
              aria-controls="Accounts"
              aria-selected="false"
              data-bs-toggle="tab"
              data-bs-target="#Accounts">
              <span>Accounts:</span>
              <span> 0</span>
            </a>
          </li>
        </ul>

        <div className="tab-content" id="mainTabContent">
          <div
            className="tab-pane animated bounceIn show active"
            id="Replies"
            role="tabpanel"
            aria-labelledby="replies-tab">
            <Replies />
          </div>

          <div
            className="tab-pane animated bounceIn"
            id="Accounts"
            role="tabpanel"
            aria-labelledby="accounts-tab">
            <Accounts />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
