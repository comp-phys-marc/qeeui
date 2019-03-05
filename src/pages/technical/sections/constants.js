export const stateInitCode = `
# State coefficient
initial_coeff = Coefficient(magnitude=1.00, imaginary=False)

# 3 qubit state
initial_state = State(coeff=initial_coeff, val="000") 

# State ensemble
state = States(state_array=[initial_state], num_qubits=3) 
`;

export const stateOpCode = `
# Quantum circuit operations
state.h(qubit=0).cx(source=0, target=1).cx(source=2, target=0).h(qubit=2)

# Measure states directly into variables
m_1 = state.m(qubit=2)
m_2 = state.m(qubit=0)

# Classical results can control quantum operations
if m_2 == one:
    state.x(qubit=1)
if m_1 == one:
    state.z(qubit=1)
`;

export const diagnosticCode = `
# Print matrix state representation of entire state
state.print_density_matrices()

# Query for the density matrix of a single qubit at any step
matrix = state.get_density_matrix(qubit=1)

# Get alpha, beta for any qubit at any step
[alpha, beta] = state.get_components(qubit=2)

# Learn what resources were required to implement the experiment
state.print_max_requirements()
`;
