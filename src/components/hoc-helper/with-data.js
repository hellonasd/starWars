import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator';
import Spiner from "../spiner";

const withData = (View) => {

  return class asd extends Component {
    state = {
      data: null,
      loading : true,
      error : false
    };

    componentDidUpdate(prevProps){
      
      if(this.props.getData !== prevProps.getData){
        this.update();
      }
    }

    componentDidMount() {
      this.setState({
        loading : true,
        error : false,
      })
      this.update();
    }

    update(){
      this.props.getData().then((data) => {
        this.setState({ 
          data,
          loading : false
         });
      })
      .catch(()=> {
        this.setState({ 
          error : true,
          loading : false
        })
      })
    }
    render() {
      const { data, error, loading } = this.state;
      if (loading) {
        return <Spiner />;
      }

      if(error){
        return <ErrorIndicator />
      }
      return <View {...this.props} data={data} />;
    }
  };
};


export default withData;