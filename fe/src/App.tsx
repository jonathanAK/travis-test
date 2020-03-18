import React from 'react';
const env = process.env.REACT_APP_ENV_TYPE;
const App: React.FC = () => {
    return (
        <div className="App">
            env: {env}
        </div>
    );
};

export default App;
