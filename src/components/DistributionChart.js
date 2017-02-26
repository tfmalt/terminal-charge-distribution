/**
 * Using Recharts - http://recharts.org/ - to draw an area chart showing
 * the statistical distribution of good and bad values in the data set.
 *
 * @link http://recharts.org/
 * @author Thomas Malt <thomas@malt.no>
 * @copyright 2017 (c) Thomas Malt
 * @license MIT
 */
import React, {Component, PropTypes} from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid
} from 'recharts';
import './DistributionChart.css';

class DistributionChart extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    distribution: PropTypes.object.isRequired
  }

  state = {
    data: []
  };

  componentWillReceiveProps(nextProps) {
    const {distribution} = nextProps;
    if (
      distribution.selectedCountry !== '' &&
      distribution.hasOwnProperty(distribution.selectedCountry) &&
      distribution[distribution.selectedCountry].hasOwnProperty('data')
    ) {
      this.updateDataWithNewProps(distribution);
    }
  }

  updateDataWithNewProps(distribution) {
      let current     = distribution.selectedCountry;
      let percentiles = distribution[current].data.percentiles;

      let data = percentiles.map( (item) => {
        let point = {
          amount: item.usd,
          xkey:   item.usd.toFixed(2)
        };
        if (item.outlier) {
          point.outlier = item.usd;
        }
        return point;
      });
      this.setState({data});
  }

  render() {
    return (
      <ResponsiveContainer>
        <AreaChart
          data={this.state.data}
          margin={{top: 0, right: 0, left: 0, bottom: 0}}
        >
          <XAxis dataKey="xkey" />
          <CartesianGrid strokeDasharray="3 3" horizontal={true} />
          <Tooltip
            coordinate={{x: 10, y: 10}}
          />
          <Area
            dataKey="amount"
            strokeWidth={2}
            type="monotone"
            stroke='#00bcd4'
            fill="#00bcd4"
          />
          <Area
            dataKey="outlier"
            type="monotone"
            stroke='#ff0000'
            fill='#ff0000'
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default DistributionChart;
