import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import AccessTime from '@material-ui/icons/AccessTime'
import Build from '@material-ui/icons/Build'
// core components
import GridItem from '../components/Grid/GridItem.jsx'
import GridContainer from '../components/Grid/GridContainer.jsx'
import Table from '../components/Table/Table.jsx'
import Card from '../components/Card/Card.jsx'
import CardHeader from '../components/Card/CardHeader.jsx'
import CardBody from '../components/Card/CardBody.jsx'
import CardFooter from '../components/Card/CardFooter.jsx'
import Sidebar from '../components/Sidebar/Sidebar.jsx'
import Topology from '../components/Topology/Topology.jsx'
import CodeBlock from '../components/Code/Code.jsx'
import RegularButton from '../components/CustomButtons/Button.jsx'

import teleportation from '../assets/img/teleportationcircuit.png'
import dashboardStyle from '../assets/jss/material-dashboard-react/views/dashboardStyle.jsx'

import logo from '../assets/img/blackboardLogo.png'
import blackboard from '../assets/img/blackboard.jpg'

class Dashboard extends React.Component {
  state = {
    value: 0
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <GridContainer>
          <GridItem xs={0} sm={0} md={3}>
            <Sidebar
              routes={[
                {
                  path: '/dashboard',
                  sidebarName: 'Teleportation',
                  icon: Build
                }
              ]}
              logoText={'Experiments'}
              logo={logo}
              image={blackboard}
              handleDrawerToggle={this.handleDrawerToggle}
              open={false}
              {...rest}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <GridContainer className={classes.mainContainer}>
            <GridItem xs={12} sm={12} md={6}>
                <Card className={classes.card}>
                  <CardHeader color="primary">
                    <GridContainer>
                      <GridItem xs={6} sm={6} md={6}>
                        <h4 className={classes.cardTitleWhite}>QASM Code</h4>
                      </GridItem>
                      <GridItem xs={6} sm={6} md={6}>
                        <p className={classes.cardCategoryWhite}>Circuit Definition</p>
                      </GridItem>
                    </GridContainer>
                  </CardHeader>
                  <CardBody>
                    <CodeBlock
                      className={classes.smallBlock}
                      title="teleportation.qasm"
                      code="
                OPENQASM 2.0;
                include &quot;qelib1.inc&quot;;
                
                qreg q[3];
                creg c[1];
                
                h q[0];
                cx q[0],q[1];
                cx q[2],q[0];
                h q[2];
                measure q[1] -> c[0];"
                    />
                  </CardBody>
                  <CardFooter>
                    <RegularButton color="primary">Upload New Code</RegularButton>
                    <RegularButton color="primary">Edit</RegularButton>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <Card className={classes.card}>
                  <CardHeader color="success">
                    <GridContainer>
                      <GridItem xs={6} sm={6} md={6}>
                        <h4 className={classes.cardTitleWhite}>Emulation Topology</h4>
                      </GridItem>
                      <GridItem xs={6} sm={6} md={6}>
                        <p className={classes.cardCategoryWhite}>Data Type Densities</p>
                      </GridItem>
                    </GridContainer>
                  </CardHeader>
                  <CardBody>
                    <Topology qubits={3} bits={1} signals={1} />
                  </CardBody>
                  <CardFooter>
                    <RegularButton color="success">Explanation</RegularButton>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <Card className={classes.card}>
                  <CardHeader color="warning">
                    <h4 className={classes.cardTitleWhite}>Executions</h4>
                  </CardHeader>
                  <CardBody>
                    <Table
                      tableHeaderColor="warning"
                      tableHead={['ID', 'Runs', 'Speed', 'Correlation', 'Date']}
                      tableData={[
                        ['1', '900', '561676420', '88%', 'Nov 8, 2018 2:56:36 PM'],
                        ['2', '900', '561635201', '90%', 'Nov 9, 2018 2:00:12 PM']
                      ]}
                    />
                  </CardBody>
                  <CardFooter>
                    <RegularButton color="warning">New Execution</RegularButton>
                    <RegularButton color="warning">Results</RegularButton>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <Card className={classes.card}>
                  <CardHeader color="info">
                    <GridContainer>
                      <GridItem xs={6} sm={6} md={6}>
                        <h4 className={classes.cardTitleWhite}>Circuit Diagram</h4>
                      </GridItem>
                      <GridItem xs={6} sm={6} md={6}>
                        <p className={classes.cardCategoryWhite}>Quantum Operations</p>
                      </GridItem>
                    </GridContainer>
                  </CardHeader>
                  <CardBody>
                    <img className={classes.responsiveImage} src={teleportation} alt="circuit" />
                  </CardBody>
                  <CardFooter>
                  <RegularButton color="info">Save</RegularButton>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Dashboard)
