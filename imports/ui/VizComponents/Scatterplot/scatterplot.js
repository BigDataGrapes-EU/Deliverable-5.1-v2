import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Card, Icon } from 'antd';
import {Scatter} from 'react-chartjs-2';
// App component - represents the whole app
class Scatterplot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: "small",
      icon: "fullscreen"
    };
  }

  changeCardSize() {
    if(this.state.size == "small" ) {
      this.setState({ size: "large", icon: "fullscreen-exit"});
    } else {
      this.setState({ size: "small", icon: "fullscreen"});
    }
    // if(this.state.size == "medium") style = { gridColumn: "span 2", gridRow: "span 1" };
  }

  render() {
    let style = { gridColumn: "span 1", gridRow: "span 1" };
    if(this.state.size == "small") { style = { gridColumn: "span 1", gridRow: "span 1" }; } else { style = { gridColumn: "span 2", gridRow: "span 2" }; }
    return(
      <div className="vis-card-container" style={style}>
        <div className="vis-card-header"><h1>{title}</h1>{this.extraTools()}</div>
        <div className="vis-card-content">
        <Scatter data={this.props.data} width={100} height={50} options={{ maintainAspectRatio: true,
          scales: {
            xAxes: [{
              scaleLabel:{
                display: true,
                labelString: "Penman evapotranspiration (mm)"
              }
              // stacked: true
            }],
            yAxes: [{
              scaleLabel:{
                display: true,
                labelString: "Mean temperature ('C)"
              }
              // stacked: true
            }]
          }
        }} />
    </div>
  </div>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Scatterplot);
