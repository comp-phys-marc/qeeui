import React from "react";
import Code from "../../../components/Code/Code.jsx";

const componentCode = `
# Duetsch Jozsa algorithm component code

use types.classical.Binary;
use types.qubit.Transmon;
use components.operators.qubit.hadamard;
use components.operators.qubit.pauliX;
use components.operators.qubit.measure;
use components.utils.generate;


# Declare component parameters and default values
<params>
  let n:Integer = 3;
</params>


# Define the component's circuit, and identify compatible types
<circuit:Transmon>
  generate(let i=0; i<n; i+=1) {
    hadamard(qubit=i)
  }
  pauliX(qubit=n)
  hadamard(qubit=n)

  # Specify where this component's children's circuits will be rendered 
  <slot/>

  generate(let i=0; i<n; i+=1) {
    hadamard(qubit=i)
  }

  # Define an interface that yields a value when the circuit is executed
  <interface:Transmon->Binary>
    generate(let i=0; i<n; i+=1) {
      measure(qubit=i)
    }
  </interface>
</circuit>
`;

const hadamardCode = `
# Hadamard operator component code

use types.classical.Binary;
use types.classical.Char;
use types.qubit.Transmon;
use components.implementations.qasm;


<params>
  let q:Integer = 0;
  let register:Char = 'q';
</params>


# The operator is defined in a type-compatible low level language
<circuit:Transmon>
    qasm('
      h \${register}[\${q}]
    ')

    # An interface is only executed if called upon by a higher order component
    <interface:Binary>
      measure(qubit=q)
    </interface>
</circuit>
`;

export default function Components() {
  return (
    <div>
      <h2>Components</h2>
      <p>
        HLQ allows a user to create a runnable Circuit object, using composable
        Components. These Components can be pre-defined algorithms or operators.
        For example, the shorCode error correction algorithm is used in our
        Deutsch Jozsa example.
      </p>
      <p>Below is an example, the Deutsch Jozsa algorithm Component.</p>
      <Code language="python" code={componentCode} />
      <p>
        This is a "high order" Component, meaning that it uses other Components
        in its definition. One of the lower order Componens that it uses is
        shown here.
      </p>
      <Code language="python" code={hadamardCode} />
    </div>
  );
}
