import React from 'react';

const jwtStuff = {
    token: '',
    refresh: ''
  };

  export const CovidContext = React.createContext(jwtStuff);