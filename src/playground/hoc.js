// Higher Order Component (HOC) - A component that renders another component
    // Reuse code
    // Render hijacking
    // Prop manipulation
    // Abstract state

    const Info = (props) => (
        <div>
            <h2>Info</h2>
            <p>The info is: {props.info}</p>
        </div>
    )
    
    const withAdmingWarning = (WrappedComponent) => {
        return (props) => (
            <div>
                {props.isAdmin && <p>This is private info. Please don't share!</p>}
                <WrappedComponent {...props} />
            </div>
        )
    }
    
    const requireAuthentication = (WrappedComponent) => {
        return (props) => (
            <div>
                {props.isAuthenticated ? (
                    <WrappedComponent {...props}/>
                ) : (
                    <p>Please login to view info</p>
                )}
            </div>
        )
    }
    
    const AdminInfo = withAdmingWarning(Info);
    const AuthInfo = requireAuthentication(Info);
    
    ReactDOM.render(<AuthInfo isAuthenticated={false} info='details'/>, document.getElementById('root'))
    // ReactDOM.render(<AdminInfo isAdmin={true} info='details'/>, document.getElementById('root'))