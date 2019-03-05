import resourcesDataSeries from "./resourcesConfig";
import outputs from "./outputConfig";

const resultDataSeries = [
  {
    data: [{ x: "Sim 1", y: 1 }, { x: "Sim 2", y: 1 }, { x: "Sim 3", y: 1 }],
    title: "p(Q0 == 1)"
  },
  {
    data: [
      { x: "Sim 1", y: 0.01 },
      { x: "Sim 2", y: 0.01 },
      { x: "Sim 3", y: 0.01 }
    ],
    title: "p(Q0 == 0)"
  },
  {
    data: [
      { x: "Sim 1", y: 0.01 },
      { x: "Sim 2", y: 0.01 },
      { x: "Sim 3", y: 0.01 }
    ],
    title: "p(Q1 == 1)"
  },
  {
    data: [{ x: "Sim 1", y: 1 }, { x: "Sim 2", y: 1 }, { x: "Sim 3", y: 1 }],
    title: "p(Q1 == 0)"
  },
  {
    data: [
      { x: "Sim 1", y: 0.01 },
      { x: "Sim 2", y: 0.01 },
      { x: "Sim 3", y: 0.01 }
    ],
    title: "p(Q2 == 1)"
  },
  {
    data: [{ x: "Sim 1", y: 1 }, { x: "Sim 2", y: 1 }, { x: "Sim 3", y: 1 }],
    title: "p(Q2 == 0)"
  }
];

const qubitDataSeries = [
  {
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 0.5 },
      { x: 2, y: 0.5 },
      { x: 3, y: 0.5 },
      { x: 4, y: 1 },
      { x: 5, y: 1 },
      { x: 6, y: 1 }
    ],
    disabled: false,
    title: "Qubit 0"
  },
  {
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0.5 },
      { x: 3, y: 0.5 },
      { x: 4, y: 0 },
      { x: 5, y: 1 },
      { x: 6, y: 0 }
    ],
    disabled: false,
    title: "Qubit 1"
  },
  {
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0.5 },
      { x: 4, y: 0 },
      { x: 5, y: 0 },
      { x: 6, y: 0 }
    ],
    disabled: false,
    title: "Qubit 2"
  }
];

const results = {
  id: 1,
  measurements: resultDataSeries,
  states: qubitDataSeries,
  resources: resourcesDataSeries,
  outputs: outputs
};

export default results;
