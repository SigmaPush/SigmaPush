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
    let doughnut = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        legend: {
          display: false,
          position: 'bottom',
          onClick: (event, element) => {},
        },
        cutoutPercentage: 70,
        elements: {
          center: {
            text: 'Topic Name',
            color: '#FF6384',
            fontStyle: 'Arial',
            sidePadding: 20,
          },
        },
        onClick: (event, element) => {
          let centerX = doughnut.width / 2;
          let centerY = doughnut.height / 2;
          let distance = (event.offsetX - centerX) ** 2 + (event.offsetY - centerY) ** 2;
          
          if (distance < doughnut.innerRadius ** 2) {
            // TODO: go back to superTopic and fetch data
            console.log('hahaha');
          } else if (element.length) {
            // TODO: fetch data of clicked topic
            const idx = element[0]._index;
            const clickedTopic = element[0]._chart.config.data.labels[idx];
            console.log(clickedTopic);
          }
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
              const txt = centerConfig.text;
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
              const newFontSize = Math.floor(30 * widthRatio);
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
  }

  render() {
    return (
    <div>
      <canvas ref="chart" height="400px" />
    </div>
    );
  }
}

export default TopicDoughnut;
