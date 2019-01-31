/*eslint-disable*/
import React from 'react'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons'

// core components
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx'
import Button from '../CustomButtons/Button.jsx'

import headerLinksStyle from '../../assets/jss/material-kit-react/components/headerLinksStyle.jsx'

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Get Started"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/login" className={classes.dropdownLink}>
              Login
            </Link>,
            <Link to="/dashboard" className={classes.dropdownLink}>
              UI Demo
            </Link>,
            <Link to="/technical" className={classes.dropdownLink}>
              Technical
            </Link>,
            <Link to="/hardware" className={classes.dropdownLink}>
              Hardware
            </Link>
          ]}
        />
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
