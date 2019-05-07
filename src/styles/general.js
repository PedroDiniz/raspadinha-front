import metrics from "./metrics";
import colors from "./colors";
import fonts from "./fonts";

const general = {
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.background,
    padding: "3%"
  },
  rowContainerSB: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  section: {
    margin: metrics.doubleBaseMargin
  },
  sectionCenter: {
    margin: metrics.doubleBaseMargin,
    alignSelf: "center"
  },
  textCenter: {
    alignSelf: "center"
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: fonts.big,
    alignSelf: "center",
    marginBottom: metrics.doubleBaseMargin
  }
};

export default general;
