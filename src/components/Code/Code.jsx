import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import codeStyle from '../../assets/jss/material-dashboard-react/components/codeStyle.jsx'

class Code extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    code: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.state = {
      title: this.props.title,
      code: this.props.code
    }
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        <b className={classes.explanation}>{this.state.title}</b>
        <pre className={classes.codeblock} style={{ borderTop: `4px solid green !important` }}>
          {this.state.code.replace(/\\n/g, '\n').replace(/;/g, ';\n')}
        </pre>
      </div>
    )
  }
}

export default withStyles(codeStyle)(Code)
