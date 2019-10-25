import React from 'react'
import topImage from "../../../assets/images/top-image-content.jpg";


const HeaderContent = React.memo(() => {
  return (
    <div>
      <img src={topImage} alt="images"/>
    </div>
  )
});

export default HeaderContent;
