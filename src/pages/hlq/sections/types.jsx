import React from "react";
import Code from "../../../components/Code/Code.jsx";

const mixedComponentCode = `
# Teleportation algorithm component code

use types.classical.BinaryVector;
use types.classical.Complex;
use types.qubit.Transmon;
use types.cv.Fock;
use components.operators.qubit.hadamard;
use components.operators.qubit.cnot;
use components.operators.qubit.pauliX;
use components.operators.cv.beamSplitter;
use components.operators.cv.squeezed;
use components.operators.cv.coherent;
use components.operators.cv.measureX;
use components.operators.cv.measureP;
use components.operators.cv.positionGate;
use components.operators.cv.phaseGate;
use components.operators.measure;
use components.utils.cv.scale;
use components.utils.generate;
use components.utils.correctDim;


<params>
  let n:Integer = 3; # number of qubits to teleport
</params>


<circuit:Transmon>
  correctDim(qubits=n*3) {
    generate(let i=0; i<n; i+=1) {
      cnot(source=i, target=i+n)
      hadamard(qubit=i)
    }
    measure(i+n) {
      pauliX(qubit=i+2*n)  # element conditional on measurement result
    }
    measure(i) {
      pauliZ(qubit=i+2*n)
    }
  }

  # Define an interface that yields a different (not Transmon) typed value
  <interface:Binary>
    generate(let j=0; j<n; j+=1) {
      measure(j+2*n)
    }
  </interface>

  # The default interface corresponding to the circuit type is implicitly defined
</circuit>


# Can define alternative typed circuit
<circuit:Fock>
  generate(let i=0; i<n; i+=1) {
    coherent(alpha=1+0.5j, qumode=i)
    squeezed(r=-2, qumode=i+n)
    squeezed(r=2, qumod=i+2*n)
    
    beamSplitter(qumodes=[i+n, i+2*n])
    beamSplitter(qumodes=[i, i+n])

    measureX(qumode=i)
    measureP(qumode=1+n)

    positionGate(pos=scale(qumode=i, sqrt(2)), qumode=i+2*n)
    phaseGate(phase=scale(qumode=i+n, sqrt(2), qumode=i+2*n)
  }

  <interface:Binary>
    generate(let j=0; j<n; j+=1) {
      measure(j+2*n)
    }
  </interface>
</circuit>
`;

export default function Types() {
  return (
    <div>
      <h2>Types</h2>
      <p>
        The way HLQ knows how to execute a Circuit is by its type. There are
        many theorized types of quantum computers, and a few of them are now
        accessible through the quantum cloud. A popular type of superconductor
        based quantum computer uses Transmon qubits.
      </p>
      <h3>The Typespace</h3>
      <p>
        A concept that all developers will be familiar with is the namespace. A
        namespace is a segment of code in which each declared variable is
        maintained by a unique name. Same-named variables in different
        namespaces will not conflict with one another, but within each namespace
        only one variable can be assigned to each unique name.
      </p>
      <p>
        HLQ introduces a concept called the typespace. For example, the this
        line defines a type for the Circuit in our Deutsch Jozsa experiment. The
        type is Transmon.
      </p>
      <Code
        language="python"
        code="let experiment = Circuit:Transmon -> Binary { ... }"
      />
      <p>
        The closure denoted by the curly braces <code>{"{ ... }"}</code>{" "}
        represents the scope of this type binding. Within this typed scope, only
        type-compatible Components may be composed. This means each Component
        that appears within these braces must either have a Circuit with an
        Implementation that is Transmon compatible, or have a compatible
        Interface.
      </p>
      <h3>Typed Implementations</h3>
      <p>
        Each Component of a Circuit must have at least one possible
        Implementation. Implementations are Components that accept raw low level
        code. When an HLQ progrma is run, the entire Component tree is compiled
        to a set of low level scripts that can together acheieve the entire
        program's procedure.
      </p>
      <h3>Mixing Types</h3>
      <p>
        When a Component has several possible Implementations, it is a "mixed
        type" Component. Such a Component can included in a higher order
        Compoent's Circuit without its type being explicitly specified, and the
        compatible Implementation type will be determined automatically by the
        typespace.
      </p>
      <p>Below is an example of a mixed type Component.</p>
      <Code language="python" code={mixedComponentCode} />
    </div>
  );
}
