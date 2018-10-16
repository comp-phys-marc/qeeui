import React from 'react'
import PropTypes from 'prop-types'
import '../../../node_modules/react-vis/dist/style.css'
import { Treemap } from 'react-vis'

class NestedTreeMap extends React.Component {
  static propTypes = {
    dataSeries: PropTypes.array,
    dataTitle: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.state = {
      hoveredNode: false,
      treemapData: this.props.dataSeries,
      dataTitle: this.props.dataTitle,
      useCirclePacking: true
    }
  }
  render() {
    const { hoveredNode } = this.state
    const treeProps = {
      animation: {
        damping: 9,
        stiffness: 300
      },
      data: this.state.treemapData,
      onLeafMouseOver: x => this.setState({ hoveredNode: x }),
      onLeafMouseOut: () => this.setState({ hoveredNode: false }),
      onLeafClick: () => this.setState({ treemapData: this.state.treemapData }),
      height: 400,
      mode: this.state.useCirclePacking ? 'circlePack' : 'squarify',
      getLabel: x => x.name,
      width: 450
    }
    return (
      <div className="dynamic-treemap-example">
        <Treemap {...treeProps} />
        {hoveredNode && `${this.state.dataTitle}: ${hoveredNode.value}`}
      </div>
    )
  }
}

export default NestedTreeMap
