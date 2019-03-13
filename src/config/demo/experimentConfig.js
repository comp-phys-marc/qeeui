import executionData from "./executionConfig";
import circuit from "./circuitConfig";

const experiment = {
  name: "DEMO",
  executions: executionData,
  code: `OPENQASM 2.0;include "qelib1.inc";qreg q[3];creg c[1];h q[0];cx q[0],q[1];cx q[2],q[0];h q[2];measure q[1] -> c[0];`
    .replace(/\\n/g, "\n")
    .replace(/;/g, ";\n"),
  circuit: circuit,
  qubits: 5,
  simulators: 0,
  emulators: 0
};

export default experiment;
