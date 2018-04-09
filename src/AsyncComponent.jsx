import React from 'react';

export default (comPath) =>  {

  const Loading = () => (
    <div>Loading component...</div>
  );

  return class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Comp: Loading,
      }
    }

    componentWillMount() {
      if (process.env.BROWSER) {
        import(comPath).then(res => {
          this.setState({
            Comp: res.default,
          });
        });
      } else {
        const Comp = require(comPath).default;
        this.setState({ Comp });
        console.log(Comp);
      }
    }

    render() {
      const { Comp } = this.state;
      return <Comp {...this.props} />;
    }
  }
};
