import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
// core components
import tableStyle from '../../assets/jss/material-dashboard-react/components/tableStyle.jsx'

class CustomTable extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    tableHeaderColor: PropTypes.oneOf(['warning', 'primary', 'danger', 'success', 'info', 'rose', 'gray']),
    tableHead: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    selectable: PropTypes.bool,
    onSelect: PropTypes.func
  }

  constructor(props) {
    super(props)

    if (this.props.selectable) {
      this.state = {
        selected: []
      }
    }
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1

  handleClick = (event, id) => {
    const { selected } = this.state
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    this.setState({ selected: newSelected })

    if (this.onSelect !== null) {
      this.props.onSelect(newSelected)
    }
  }

  render() {
    const { classes, tableHead, tableData, tableHeaderColor, selectable } = this.props
    return (
      <div className={classes.tableResponsive}>
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + 'TableHeader']}>
              <TableRow>
                {selectable && <TableCell />}
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell + ' ' + classes.tableHeadCell} key={key}>
                      {prop}
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {tableData.map((prop, key) => {
              let isSelected = false
              if (selectable) {
                isSelected = this.isSelected(key)
              }
              return (
                <TableRow
                  hover
                  onClick={selectable ? event => this.handleClick(event, key) : () => null}
                  role={selectable ? 'checkbox' : ''}
                  aria-checked={selectable ? isSelected : false}
                  tabIndex={-1}
                  key={key}
                  selected={selectable ? isSelected : false}
                >
                  {selectable && (
                    <TableCell padding="checkbox">
                      <Checkbox checked={isSelected} />
                    </TableCell>
                  )}
                  {prop.map((prop, key) => {
                    return (
                      <TableCell className={classes.tableCell} key={key}>
                        {prop}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default withStyles(tableStyle)(CustomTable)
