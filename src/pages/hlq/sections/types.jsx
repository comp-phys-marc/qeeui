import React from "react";
import Code from "../../../components/Code/Code.jsx";

export default function HelloWorld() {
  return (
    <div>
      <h2>Types</h2>
      <p>
        The way HLQ knows how to execute a <code>Circuit</code> is by its type.
        There are many theorized types of quantum computers, and a few of them
        are now accessible through the quantum cloud. A popular type of
        superconductor based quantum computer uses <code>Transmon</code> qubits.
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
        line defines a type for the <code>Circuit</code> in our Deutsch Jozsa
        experiment. The type is <code>Transmon</code>.
      </p>
      <Code
        language="python"
        code="let experiment = Circuit:Transmon -> Binary { ... }"
      />
      <p>
        The closure denoted by the curly braces <code>{"{ ... }"}</code>{" "}
        represents the scope of this type binding. Within this typed scope, only
        type-compatible Components may be composed. This means each{" "}
        <code>Component</code> that appears within these braces must either have
        an <code>Implementation</code> that is <code>Transmon</code> compatible,
        or have a <code>Transmon</code> compatible <code>Interface</code>.
      </p>
      <h3>Typed Implementations</h3>
      <p>
        Each <code>Component</code> of a <code>Circuit</code> must have at least
        one <code>Implementation</code>.
      </p>
    </div>
  );
}
