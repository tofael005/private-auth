import React from 'react';

const PrivateRouter = ({children}) => {
    const { loading, user } = useAuthProvider()
    // const loading = useAuthProvider();
    if(loading) {
        return <p>Loading</p>
    }
    if(user) {
        return children
    }
    return <Navigator to="/login" state={{from: location}}/>
    return (
        <div>
            <h1>PrivateRouter</h1>
        </div>
    );
};

export default PrivateRouter;