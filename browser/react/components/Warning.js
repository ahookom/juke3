import React from 'react';

const Warning = function (props) {
return (
  <div>
  {props.warning && <div style={{display:'inline'}} className="alert alert-warning">{props.warning}</div>}
  </div>
)}

export default Warning;
