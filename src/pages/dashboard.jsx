import React from "react";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GraphicEq from "@material-ui/icons/GraphicEq";
import ArrowRight from "@material-ui/icons/ArrowRight";
// core components
import GridItem from "../components/Grid/GridItem.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import ExecutionCard from "../components/executionCard/executionCard.jsx";
import CircuitCard from "../components/circuitCard/circuitCard.jsx";
import CodeCard from "../components/codeCard/codeCard.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import TopologyCard from "../components/topologyCard/topologyCard.jsx";

import dashboardCardStyle from "../assets/jss/material-dashboard-react/views/dashboardCardStyle.jsx";

import logo from "../assets/img/blackboardLogo.png";
import blackboard from "../assets/img/blackboard.jpg";

import demoExperiment from "../config/demo/experimentConfig";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      experiment:
        this.props.location.state && this.props.location.state.experiment
          ? this.props.location.state.experiment
          : demoExperiment
    };
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={false} sm={false} md={3}>
            <Sidebar
              routes={[
                {
                  path: "/dashboard",
                  sidebarName: this.state.experiment.name,
                  icon: GraphicEq
                },
                {
                  path: "/dashboard",
                  sidebarName: "details",
                  icon: ArrowRight
                },
                {
                  path: "/results",
                  sidebarName: "results",
                  icon: ArrowRight
                }
              ]}
              logoText={"EXPERIMENTS"}
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
                <CodeCard
                  code={{
                    qasm: this.state.experiment.code,
                    name: this.state.exp
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TopologyCard
                  topology={{
                    qubits: this.state.experiment.qubits,
                    simulators: this.state.experiment.simulators,
                    emulators: this.state.experiment.emulators
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <ExecutionCard
                  experiment={this.state.experiment}
                  executionData={
                    this.state.experiment.executions
                      ? this.state.experiment.executions
                      : []
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CircuitCard circuit={this.state.experiment.circuit} />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(dashboardCardStyle)(Dashboard);
