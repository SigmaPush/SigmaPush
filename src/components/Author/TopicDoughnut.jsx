import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

class TopicDoughnut extends Component {
  componentDidMount() {
    this.initializeChart(this.props);
  }

  initializeChart({ authorTopics }) {
    let activeLabels = [];
    let activeData = [];

    activeLabels = authorTopics.reduce((acc, cur) => {
      acc.push(cur.topic);
      return acc;
    }, []);
    activeData = authorTopics.reduce((acc, cur) => {
      acc.push(cur.number);
      return acc;
    }, []);

    const data = {
      labels: activeLabels,
      datasets: [
        {
          data: activeData,
          backgroundColor: ['#FF6384','#36A2EB','#FFCE56','#FFFFFF',],
          hoverBackgroundColor: ['#FF6384','#36A2EB','#FFCE56','#FFFFFF',],
        }
      ],
    };

    const ctx = ReactDOM.findDOMNode(this.refs.chart).getContext("2d");
    new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        legend: {
          position: 'bottom',
        }
      },
    });
  }

  render() {
    return (
    <div>
      <canvas ref="chart" height="400px" />
      <div ref="text" ></div>
    </div>
    );
  }
}

export default TopicDoughnut;
