import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons

// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import Card from '../../../components/Card/Card.jsx'
import CardBody from '../../../components/Card/CardBody.jsx'
import RegularButton from '../../../components/CustomButtons/Button.jsx'

import teamStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx'

import ghose from '../../../assets/img/shohini-ghose.png'
import edwards from '../../../assets/img/marcus-edwards.png'

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>The Team</h2>
            <h5 className={classes.description}>
              A small, agile team that combines scientific, technical and entrepreneurial knowledge and experience.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={ghose} alt="..." />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Dr. Shohini Ghose
                  <br />
                  <small className={classes.smallTitle}>Scientific Advisor, Professor, Mentor</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Dr. Ghose brings her deep scientific understaning of quantum computing and its merits to the team.
                    She provides scientific guidance and supervision to the project.
                  </p>
                  <p className={classes.description}>
                    She is a professor in the Physics and Computer Science faculty at{' '}
                    <a href="https://www.wlu.ca/">Wilfrid Laurier University</a> as well as the Director of the{' '}
                    <a href="https://researchcentres.wlu.ca/centre-for-women-in-science/index.html">
                      Centre for Women in Science
                    </a>
                    , an{' '}
                    <a href="https://uwaterloo.ca/institute-for-quantum-computing/">Insitute for Quantum Computing</a>{' '}
                    affiliate, a Researcher at <a href="https://www.perimeterinstitute.ca/">Perimeter Institute</a>, and
                    Vice-President of the <a href="https://www.cap.ca/">Canadian Association of Physicists</a>.
                  </p>
                </CardBody>
                <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                  <a href="https://www.wlu.ca/academics/faculties/faculty-of-science/faculty-profiles/shohini-ghose/index.html">
                    <RegularButton>Portfolio</RegularButton>
                  </a>
                </GridItem>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={edwards} alt="..." />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Marcus Edwards
                  <br />
                  <small className={classes.smallTitle}>Founder, Developer, IQC Masters Student</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Marcus brings his technical knowledge and entrepreneurial experience to the team. His primary
                    concern is the research and development of practical solutions to the complex problems that quantum
                    researchers face.
                  </p>
                  <p className={classes.description}>
                    Marcus has founded two startups in the past, <a href="http://www.leadme.ca/">Leadme Inc.</a> and{' '}
                    <a href="http://www.sigmadev.ca/">SIGMA Development</a>. Marcus has also provided technical
                    expertise to a number of tech startups and scaleups as a technical lead or consultant including{' '}
                    <a href="https://www.delphx.com/">DelphX Capital Markets Inc.</a>,{' '}
                    <a href="www.ezmax.ca">eZmax Solutions Inc.</a>, and{' '}
                    <a href="https://www.yata2yata.com/">Yata Technologies Inc</a>.
                  </p>
                </CardBody>
                <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                  <a href="https://mackedweise.github.io/">
                    <RegularButton>Portfolio</RegularButton>
                  </a>
                </GridItem>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(teamStyle)(TeamSection)