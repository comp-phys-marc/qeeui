import dashboardCardStyle from "./dashboardCardStyle";

const experimentCardStyle = {
  ...dashboardCardStyle,
  cardContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    textAlign: "center",
    width: "65vw",
    paddingTop: "10vh"
  },
  responsiveImage: {
    ...dashboardCardStyle.responsiveImage,
    maxWidth: "200px",
    cursor: "pointer"
  },
  detailContainer: {
    paddingTop: "3rem",
    textAlign: "left"
  }
};

export default experimentCardStyle;
