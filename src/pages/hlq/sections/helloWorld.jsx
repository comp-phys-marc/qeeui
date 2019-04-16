import React from "react";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Code from "../../../components/Code/Code.jsx";
import CustomTabs from "../../../components/CustomTabs/CustomTabs.jsx";

const compositionCode = `
# An HLQ script for running an error-safe Deutsch Jozsa algorithm on the IBM Melbourne quantum computer

use types.qubit.Transmon;
use types.classical.Binary;
use types.classical.Integer;
use types.quantum.Circuit;
use components.algorithms.errorCorrection.shorCode;
use components.algorithms.deutschJozsa;
use components.operators.qubit.cnot;
use components.utils.correctDim;
use components.utils.generate;


# Pre-processing can be written using ordinary classical programming
let n:Integer = 13;

# Create a quantum circuit, specify the qubit type and the return type
let experiment:Transmon =
# Wrap the circuit with Shor's bit and phase flip error protection code   
shorCode {                             
  # Specify the algorithm to run
  deutschJozsa {
    
    ### Begin oracle definition ###

    # Resize the enclosed components' unitary via Kronecker products with the identity to operate on the entire state
    correctDim(qubits=n) {
      # Generate the gates that make up a circuit (in this case a balanced oracle function)
      generate(let i=0; i<n; i+=2) {
        # Specify the individual operators
        cnot(source=i, target=n)
      }
    }

    ### End oracle definition ###

  }
};


# The assignment causes the functional experiment code to be evaluated, running the experiment!
let result:Binary = experiment();
`;

export default function HelloWorld() {
  return (
    <div>
      <h2>Hello, Deutsch Jozsa</h2>
      <p>
        At the core of HLQ is a system that allows us to compose quantum
        operations using a straightforward syntax. Below is an example of how
        one might use HLQ to run a simple quantum algorithm on IBM's Melbourne
        quantum computer.
      </p>
      <Code language="python" code={compositionCode} />
      <p>
        With this code you can run your first cloud native quantum program!
        While this code sample is intended to be an introductory example, there
        is still a lot going on in this procedure. Your computer is now
        cooperating with a remote quantum processor to achieve a quantum
        algorithm.
      </p>
    </div>
  );
}
