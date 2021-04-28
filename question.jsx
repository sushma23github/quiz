import React from 'react';
function Question ( {title,index} ) {
  return (
     <div style={{
                padding:10,
                BackgroundColor:"grey",
                borderRadius: 8,
                color:"white",
                margin:10,
     }}>
       <p>{index+1} .{title} </p>
     </div>
  );
}
export default Question
