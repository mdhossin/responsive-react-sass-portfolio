import React from "react";

const SubHeading = ({ subtitle, title }) => {
  return (
    <>
      <span className="section__subtitle">{subtitle}</span>
      <h2 className="section__title">{title}</h2>
    </>
  );
};

export default SubHeading;
