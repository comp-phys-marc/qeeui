import React from 'react'
import PropTypes from 'prop-types'
import '../../../node_modules/react-vis/dist/style.css'
import { XAxis, YAxis, HorizontalGridLines, XYPlot, LineSeries, Highlight, DiscreteColorLegend } from 'react-vis'

class ZoomableChart extends React.Component {
  static propTypes = {
    dataSeries: PropTypes.array
  }

  constructor(props) {
    super(props)

    this.state = {
      lastDrawLocation: null,
      series: this.props.dataSeries
    }
  }
  render() {
    const { series, lastDrawLocation } = this.state
    return (
      <div>
        <div>
          <XYPlot
            animation
            xDomain={lastDrawLocation && [lastDrawLocation.left, lastDrawLocation.right]}
            yDomain={lastDrawLocation && [lastDrawLocation.bottom, lastDrawLocation.top]}
            width={500}
            height={300}
          >
            <HorizontalGridLines />

            <YAxis />
            <XAxis />

            {series.map(entry => (
              <LineSeries key={entry.title} data={entry.data} curve={'curveMonotoneX'} />
            ))}

            <Highlight
              onBrushEnd={area => this.setState({ lastDrawLocation: area })}
              onDrag={area => {
                this.setState({
                  lastDrawLocation: {
                    bottom: lastDrawLocation.bottom + (area.top - area.bottom),
                    left: lastDrawLocation.left - (area.right - area.left),
                    right: lastDrawLocation.right - (area.right - area.left),
                    top: lastDrawLocation.top + (area.top - area.bottom)
                  }
                })
              }}
            />
          </XYPlot>
        </div>

        <button className="showcase-button" onClick={() => this.setState({ lastDrawLocation: null })}>
          Reset Zoom
        </button>
        <DiscreteColorLegend
          orientation="horizontal"
          height={100}
          width={300}
          items={[...series.map(entry => entry.title)]}
        />
      </div>
    )
  }
}

export default ZoomableChart
