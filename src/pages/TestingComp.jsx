import React, { useState, useEffect } from 'react';
// import fetchData from '../fetchData';
const TestingComp = () => {
  // const [userInfo, setUserInfo] = useState(null);
  // const [error, setError] = useState(null);
  // const jsforce = require('jsforce');

  // fetchData();
  // useEffect(() => {
  //   const fetchData = async () => {
  //       const username = process.env.REACT_APP_SF_USERNAME;
  //       const password = process.env.REACT_APP_SF_PASSWORD;

  //       if(!username || !password) {
  //         setError('Salesforce credentials not set');
  //         return;
  //       }
  //     try {
  //         const conn = new jsforce.Connection({});
  //          const result = await conn.login(username, password);
  //          setUserInfo(result);
           
  //     } catch (err) {
  //       setError('Salesforce login error: ' + err.message);
  //       console.error(err);
  //     }
  //   };
    
  //   fetchData();
  // }, []);

  return (
    <div className="bg-gray-100 font-sans p-5 w-full">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full">
        <h1 className="text-3xl text-gray-800 mb-4">Salesforce Integration</h1>
        {/* {error && <p className="text-red-500 mb-4">{error}</p>}
        {userInfo ? (
          <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                User ID: {userInfo.id}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
                Org ID: {userInfo.organizationId}
            </p>
        </div>
        ) : (
          <p className="text-lg text-gray-700 leading-relaxed">
           Logging in to Salesforce...
        </p>
        )} */}
      </div>
    </div>
  );
};

export default TestingComp;