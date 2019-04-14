import React from "react";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Code from "../../../components/Code/Code.jsx";
import CustomTabs from "../../../components/CustomTabs/CustomTabs.jsx";

import CloudDownload from "@material-ui/icons/CloudDownloadOutlined";

const iconStyle = {
  width: "100%",
  height: "100px"
};

const linuxCode = `chmod +x hlq.py 
mv hlq.py /bin
hlq.py`;

const windowsCode = `setx path "%path%;<PATH_LOCATION>"
mv hlq.exe <PATH_LOCATION>/hlq.exe
hlq.exe`;

const macCode = `chmod +x hlq.command
mv hlq.command /bin
hlq.command`;

const createProjectCode = `mkdir hello_world
cd hello_world
touch main.hlq`;

export default function GettingStarted() {
  return (
    <div>
      <p>
        High Level Quantum is the first cloud native high level quantum
        programming language. It is built on top of open source low level
        quantum programming languages{" "}
        <a href="https://github.com/Qiskit/openqasm">Open QASM</a> from QisKit
        and{" "}
        <a href="https://strawberryfields.readthedocs.io/en/latest/tutorials/blackbird.html">
          BlackBird
        </a>{" "}
        from Xanadu. These are languages that express quantum circuits using a
        set of instructions that correspond to quantum operations. These
        languages specify the quantum registers that operations act on much like
        typical computer assembly languages do.
      </p>
      <p>
        Let's start you on your journey into cloud native quantum programming.
        The easiest way to get started using HLQ is to download the HLQ cli
        tools. Alternatively you can clone the source form{" "}
        <a href="#">GitHub</a>. Note that Python 3 is a requirement and must be
        installed beforehand.
      </p>
      <GridContainer style={{ textAlign: "center", padding: "50px" }}>
        <GridItem xs={12} sm={4} md={4} lg={4}>
          <CloudDownload color="action" style={iconStyle} />
          <h4>Download for Mac OS</h4>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4}>
          <CloudDownload style={iconStyle} />
          <h4>Download for Linux</h4>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4}>
          <CloudDownload color="primary" style={iconStyle} />
          <h4>Download for Windows</h4>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6} lg={6}>
          <p>
            Once you have the cli tools downloaded, run these commands to
            install the tools on your machine.
          </p>
          <p>
            For Linux, Mac OS and PowerShell on Windows, enter the following to
            create a project directory.
          </p>
          <Code code={createProjectCode} />
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={6}>
          <div>
            <CustomTabs
              headerColor="info"
              tabs={[
                {
                  tabName: "Mac OS",
                  tabContent: <Code code={macCode} />
                },
                {
                  tabName: "Linux",
                  tabContent: <Code code={linuxCode} />
                },
                {
                  tabName: "Windows",
                  tabContent: <Code code={windowsCode} />
                }
              ]}
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
