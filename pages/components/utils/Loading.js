  import React from 'react';

const LoadingComponent = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div id='outer-loading'>
        <div id='middle-loading'>
          <div id='inner-loading'></div>
        </div>
      </div>
      <h1 style={{ marginTop: '20px', fontWeight: 'bold' }}>Payment is processing, Please wait!</h1>
    </div>
    
  );
};

export default LoadingComponent;
