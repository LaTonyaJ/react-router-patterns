import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {error: "", errorInfo: null};
    }
  
    componentDidCatch(error) {
      this.setState({error: `${error.name}`,
        errorInfo: `${error.message}`
    });
    }
  
    render() {
      const {error, errorInfo} = this.state;
      if (error) {
        return (
            <div>
                <h3>Error: {error}</h3>
                <p>{errorInfo}</p>
            </div>
        );
      } else {
        return <>{this.props.children}</>;
      }
    }
  }

  export default ErrorBoundary;