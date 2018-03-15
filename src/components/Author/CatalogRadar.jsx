import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

class CatalogRadar extends Component {
  componentDidMount() {
    this.initializeChart(this.props);
  }

  initializeChart({ allCatalogs, catalogs, option }) {
    let activeLabels = [];
    let activeData = [];

    activeLabels = [...Object.keys(catalogs)];
    activeData = [...Object.values(catalogs)];

    if (option) {
      allCatalogs.map((catalog) => {
        if (!activeLabels.includes(catalog)) {
          activeLabels.push(catalog);
          activeData.push(0);
        }
        return { activeLabels, activeData };
      });
    }

    const data = {
      labels: activeLabels,
      datasets:[
        {
          label: 'Catalogs',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: activeData,
        },
      ],
    };
  
    const ctx = ReactDOM.findDOMNode(this.refs.chart).getContext("2d");
    new Chart(ctx, {
      type: 'radar',
      data: data,
      options: {
        legend: {
          display: false,
        }
      },
    });
  }

  render () {
    // FIXME:ref should be changed to callback version as recommended
    return (<canvas ref="chart" height="200px" />);
  }
}

export default CatalogRadar;
