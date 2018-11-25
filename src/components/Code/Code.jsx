import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import Highlight from '../Highlight/Highlight.jsx'

import codeStyle from '../../assets/jss/material-dashboard-react/components/codeStyle.jsx'

class Code extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    code: PropTypes.string,
    language: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.state = {
      title: this.props.title,
      code: this.props.code,
      language: this.props.language ? this.props.language : null
    }
  }
  render() {
    const { classes } = this.props
    const code = this.state.code.replace(/\\n/g, '\n').replace(/;/g, ';\n')
    return (
      <div>
        <b className={classes.explanation}>{this.state.title}</b>
        <pre className={classes.codeblock}>
          {this.state.language != null && <Highlight language={this.state.language}>{code}</Highlight>}
          {this.state.language == null && code}
        </pre>
      </div>
    )
  }
}

export default withStyles(codeStyle)(Code)
