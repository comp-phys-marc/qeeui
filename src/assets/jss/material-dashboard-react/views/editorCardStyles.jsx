import dashboardCardStyle from "./dashboardCardStyle";

const experimentCardStyle = {
  ...dashboardCardStyle,
  cardContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    textAlign: "center",
    width: "95%",
    paddingTop: "10vh",
    maxWidth: "880px"
  },
  detailContainer: {
    paddingTop: "3rem",
    textAlign: "left"
  },
  card: {
    ...dashboardCardStyle,
    backgroundColor: "#393839"
  },
  results: {
    width: "100%",
    backgroundColor: "#0C2A35",
    height: "98%",
    maxHeight: "490px",
    textAlign: "left",
    color: "grey",
    padding: "1rem",
    overflow: "scroll"
  },
  overflow: {
    overflow: "hidden"
  }
};

export default experimentCardStyle;
