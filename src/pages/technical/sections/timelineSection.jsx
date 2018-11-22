import React from 'react'
// @material-ui/core components
import Check from '@material-ui/icons/Check'
import withStyles from '@material-ui/core/styles/withStyles'
// timeline
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import '../../../assets/jss/material-kit-react/views/technicalPageSections/timelineCustomCss.css'

import timelineStyle from '../../../assets/jss/material-kit-react/views/technicalPageSections/timelineStyle.jsx'

class TimelineSection extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Research and Development Milestones</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Finalize Whitepaper</h3>
            <h4 className="vertical-timeline-element-subtitle">Technical Documentation</h4>
            <p>Create and publish a technical whitepaper for the emulation engine</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Release Cloud Simulation Engine</h3>
            <h4 className="vertical-timeline-element-subtitle">Version 1.0.0</h4>
            <p>An open source Python library and web API for quantum simulation</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Release Open Web Platform</h3>
            <h4 className="vertical-timeline-element-subtitle">Free for Academic Researchers</h4>
            <p>A modern React and Material UI based interface to make the platform accessible</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Update Whitepaper with Implementation Details</h3>
            <h4 className="vertical-timeline-element-subtitle">The Dust Settles</h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="February 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Design Inferential AI Cloud Measurement System</h3>
            <h4 className="vertical-timeline-element-subtitle">Qunatum Tomography Analogue</h4>
            <p>Acheive high fidelity measurement and tomography using TensorFlow AI</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="February 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Train Initial AI Models</h3>
            <h4 className="vertical-timeline-element-subtitle">Targeting Specific Algorithms</h4>
            <p>Developing a portfolio of solvable problems</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="February 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Update Paper with AI Details</h3>
            <h4 className="vertical-timeline-element-subtitle">Documenting What We Found</h4>
            <p>How many problems could we solve? How complex were our models?</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="March 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Finalize Hardware Emulator Design</h3>
            <h4 className="vertical-timeline-element-subtitle">Optimized Hardware Layer</h4>
            <p>Not stopping at FPGAs, but combining them with the power of analog</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="March 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Update Paper with Hardware Emulator Design</h3>
            <h4 className="vertical-timeline-element-subtitle">Technical Specs, Theoreticl Model</h4>
            <p>How do we expect the emulators to perform</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Emulator Implementation</h3>
            <h4 className="vertical-timeline-element-subtitle">The Real Deal</h4>
            <p>Create printable circuit board implementation of analog and digital hybrid system</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Manufacture Emulators</h3>
            <h4 className="vertical-timeline-element-subtitle">First Run</h4>
            <p>First for testing and validation, then production</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="June 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Begin Replacing Simulators</h3>
            <h4 className="vertical-timeline-element-subtitle">With Hardware Emulators</h4>
            <p>Slowly and steadily increase the system's efficiency without breaking changes</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="July 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Adjust AI Models</h3>
            <h4 className="vertical-timeline-element-subtitle">To New Hardware</h4>
            <p>Adjust AI Models to achieve the highest fidelity measurements</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="August 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Update Paper with Findings</h3>
            <h4 className="vertical-timeline-element-subtitle">Results and Final Designs</h4>
            <p>Document what really happened</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="September 2019"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<Check />}
          >
            <h3 className="vertical-timeline-element-title">Publish Academic Paper</h3>
            <h4 className="vertical-timeline-element-subtitle">Documentation of the Entire System</h4>
            <p>Final system description, interesting findings and engineering analysis for the community</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    )
  }
}

export default withStyles(timelineStyle)(TimelineSection)
