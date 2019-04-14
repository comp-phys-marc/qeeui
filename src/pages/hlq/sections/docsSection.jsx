import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// sections
import GettingStarted from "./gettingStarted.jsx";
import HelloWorld from "./helloWorld.jsx";
import Types from "./types.jsx";
import Components from "./components.jsx";

// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import CustomTabs from "../../../components/CustomTabs/CustomTabs.jsx";

import docsStyle from "../../../assets/jss/material-kit-react/views/hlqPageSections/docsStyle.jsx";

import rocket from "../../../assets/img/rocket-icon.png";
import Code from "@material-ui/icons/CodeOutlined";
import Palette from "@material-ui/icons/PaletteOutlined";
import Filter from "@material-ui/icons/Filter2";

class DocsSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: "Getting Started",
                  image: rocket,
                  tabContent: <GettingStarted />
                },
                {
                  tabName: "Hello World",
                  tabIcon: Code,
                  tabContent: <HelloWorld />
                },
                {
                  tabName: "Components",
                  tabIcon: Filter,
                  tabContent: <Components />
                },
                {
                  tabName: "Types",
                  tabIcon: Palette,
                  tabContent: <Types />
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(docsStyle)(DocsSection);
