import React from 'react';

const LoadingComponent = ({string}) => {
  return (
    <div style={{ textAlign: 'center', height:"80vh", padding:"25%"}}>
      <div id='outer-loading'>
        <div id='middle-loading'>
          <div id='inner-loading'></div>
        </div>
      </div>
      <h1 style={{ marginTop: '20px', fontWeight: 'bold' }}>{`${string} is processing, Please wait!`}</h1>
    </div>
  );
};

export default LoadingComponent;
