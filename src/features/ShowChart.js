import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Chart  from 'react-apexcharts'

export default class ShowChart extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }
        },
      
      
      };
    }

  

    render() {
      return (
            <div className='container'>
                <div className='content'>
                    <div id="chart">
                    <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
                    </div>
                    <div className='bottom'>
                        <Button variant="contained" color="primary" onClick={() => console.log('')}>
                            Back
                        </Button>
                    </div>
                </div>
            </div>
      );
    }
  }