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
  VerticalBarSeries,
  LabelSeries
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
        <XYPlot xType="ordinal" width={500} height={300} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {series.map(entry => (
            <VerticalBarSeries data={entry.data} />
          ))}
          <LabelSeries data={this.state.labelData} getLabel={d => d.x} />
        </XYPlot>
        <DiscreteColorLegend
          orientation="horizontal"
          height={100}
          width={500}
          items={[...this.state.series.map((entry, index) => entry.title)]}
        />
      </div>
    )
  }
}

export default SimpleBarChart
