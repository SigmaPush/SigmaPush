import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

class CatalogRadar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: null,
    };
  }

  componentDidMount() {
    this.initializeChart(this.props);
  }

  componentDidUpdate() {
    let { chart } = this.state;
    const { activeLabels, activeData } = this.getChartData(this.props);
    chart.data.labels = activeLabels;
    chart.data.datasets[0].data = activeData;
    chart.update();
  }

  getChartData({ labels, counts, allCatalogs, showAllCat }) {
    let activeLabels = labels;
    let activeData = counts;

    if (showAllCat) {
      allCatalogs.map((catalog) => {
        if (!activeLabels.includes(catalog)) {
          activeLabels.push(catalog);
          activeData.push(0);
        }
        return { activeLabels, activeData };
      });
    }

    return { activeLabels, activeData};
  }

  initializeChart(props) {
    const { activeLabels, activeData } = this.getChartData(props);
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
    let radar = new Chart(ctx, {
      type: 'radar',
      data: data,
      options: {
        legend: {
          display: false,
        }
      },
    });

    this.setState({
      chart: radar,
    });
  }

  render () {
    // FIXME:ref should be changed to callback version as recommended
    return (<canvas className="border border-warning m-1" ref="chart" height="200px" />);
  }
}

export default CatalogRadar;
