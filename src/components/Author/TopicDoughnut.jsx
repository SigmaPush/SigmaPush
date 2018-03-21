import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

const bgColor = ['#FF6384','#36A2EB','#FFCE56','#FFFFFF',];

class TopicDoughnut extends Component {
  constructor(props) {
    super(props);

    this.setState({
      chart: null,
    });
  }

  componentDidMount() {
    this.initializeChart(this.props);
  }

  componentDidUpdate() {
    let { chart } = this.state;
    const { labels, counts } = this.props;

    chart.data.labels = labels;
    chart.data.datasets[0].data = counts;
    chart.update();
  }

  initializeChart({ labels, counts, topic }) {
    const data = {
      labels: labels,
      datasets: [
        {
          data: counts,
          backgroundColor: bgColor,
        },
      ],
    };

    const ctx = ReactDOM.findDOMNode(this.refs.chart).getContext("2d");
    let doughnut = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        legend: {
          display: false,
          position: 'bottom',
          onClick: (event, element) => {},
        },
        cutoutPercentage: 66,
        elements: {
          center: {
            color: '#FF6384',
            fontStyle: 'Arial',
            sidePadding: 20,
          },
        },
        onClick: (event, element) => {
          let centerX = doughnut.width / 2;
          let centerY = doughnut.height / 2;
          let distance = (event.offsetX - centerX) ** 2 + (event.offsetY - centerY) ** 2;
          
          // FIXME: need promise or not?
          if (distance < doughnut.innerRadius ** 2) {
            this.props.onClick && this.props.onClick('');
          } else if (element.length) {
            const idx = element[0]._index;
            const clickedTopic = element[0]._chart.config.data.labels[idx];
            this.props.onClick && this.props.onClick(clickedTopic);
          }
          doughnut.data.labels = this.props.labels;
          doughnut.data.datasets[0]['data'] = this.props.counts;
          doughnut.update();
        },
      },
      plugins: [
        {
          beforeDraw: (chart) => {
            if (chart.config.options.elements.center) {
              // Get ctx from string
              const ctx = chart.chart.ctx;

              // Get options from the center object in options
              const centerConfig = chart.config.options.elements.center;
              const fontStyle = centerConfig.fontStyle || 'Arial';
              const txt = this.props.topic || 'All';
              // const txt = centerConfig.text;
              const color = centerConfig.color || '#000';
              const sidePadding = centerConfig.sidePadding || 20;
              const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)

              // Start with a base font of 30px
              ctx.font = `30px ${fontStyle}`;

              // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
              const stringWidth = ctx.measureText(txt).width;
              const elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

              // Find out how much the font can grow in width.
              const widthRatio = elementWidth / stringWidth;
              const newFontSize = Math.min(40, Math.floor(30 * widthRatio));
              const elementHeight = (chart.innerRadius * 2);

              // Pick a new font size so it will not be larger than the height of label.
              const fontSizeToUse = Math.min(newFontSize, elementHeight);

              // Set font settings to draw it correctly.
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
              const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
              ctx.font = `${fontSizeToUse}px ${fontStyle}`;
              ctx.fillStyle = color;

              // Draw text in center
              ctx.fillText(txt, centerX, centerY);
            }
          }
        },
      ],
    });

    this.setState({
      chart: doughnut,
    });
  }

  getLegends() {
    const { labels } = this.props;
    const legends = labels.map((label, idx) => {
      const legendColor = bgColor[idx];
      const legendStyle = {
        height: '10px',
        width: '40px',
        display: 'inline-block',
        backgroundColor: legendColor,
      };

      return (
        <li key={label}>
          <span className="badge mx-2" style={legendStyle} />
          {label}
        </li>
      );
    });

    return legends;
  }

  render() {
    const legends = this.getLegends();

    return (
      <div className="border border-warning">
        <canvas ref="chart" height="400px" />
        <ul className="list-unstyled ml-2">
          {legends}
        </ul>
      </div>
    );
  }
}

export default TopicDoughnut;
