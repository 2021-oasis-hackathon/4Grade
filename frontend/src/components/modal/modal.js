import React from "react";

const Modal = (props) => {
  const { open } = props;

  return (
      <div className={open ? "openModal" : "modal"}>
        {open ? (
          <section>
            {props.children}
          </section>
        ) : null}
      </div>
  );
};

export default Modal;
