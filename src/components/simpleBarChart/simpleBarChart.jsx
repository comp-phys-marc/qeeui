import React from 'react'
import PropTypes from 'prop-types'
import '../../../node_modules/react-vis/dist/style.css'
import {
  DiscreteColorLegend,
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from 'react-vis'

class SimpleBarChart extends React.Component {
  static propTypes = {
    dataSeries: PropTypes.array
  }

  constructor(props) {
    super(props)

    this.state = {
      series: this.props.dataSeries
    }
  }
  render() {
    const { series } = this.state
    return (
      <div>
        <XYPlot xType="ordinal" width={this.props.width} height={this.props.height} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {series.map((entry, index) => (
            <VerticalBarSeries key={index} data={entry.data} />
          ))}
        </XYPlot>
        <DiscreteColorLegend
          orientation="horizontal"
          height={100}
          width={this.props.width}
          items={[...this.state.series.map((entry, index) => entry.title)]}
        />
      </div>
    )
  }
}

export default SimpleBarChart
