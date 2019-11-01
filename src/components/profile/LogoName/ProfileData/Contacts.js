import React from "react";

const Contacts = ({contactTitle, contactLink})=>{
  return <li><a href={contactLink}>{contactTitle}</a></li>
};

export default Contacts;
