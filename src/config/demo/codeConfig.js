const code = {
  id: 1,
  name: "teleportation.qasm",
  qasm: `OPENQASM 2.0;include "qelib1.inc";qreg q[3];creg c[1];h q[0];cx q[0],q[1];cx q[2],q[0];h q[2];measure q[1] -> c[0];`
};

export default code;
