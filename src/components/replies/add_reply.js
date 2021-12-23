import React, { Fragment, useState } from "react";

const AddReply = () => {
  const [replyText, setReplyText] = useState("");
  const onSubmitReply = (e) => {
    e.preventDefault();
  }

  return (
    <Fragment>
      <div className="py-4 accordion" id="replyAccordion">
        <div className="accordion-item">
          <div
            className="accordion-header collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#addReply"
            aria-expanded="false"
            aria-controls="addReply">
            <h4 className="accordion-button">Add Reply</h4>
          </div>
          <div
            id="addReply"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#replyAccordion">
            <div className="accordion-body">
              <form onSubmit={onSubmitReply}>
                <div className="form-group">
                  <label>Reply text</label>
                  <textarea
                    className="form-control"
                    style={{ resize: "none" }}
                    placeholder="Enter reply text"
                    onChange={e => setReplyText(e.target.value)}
                    value={replyText}
                    ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddReply;
