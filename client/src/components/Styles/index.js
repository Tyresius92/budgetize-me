import { makeStyles } from "@material-ui/core";

export const stylesObject = theme => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    width: "100%",
    paddingBottom: 10,
    marginBottom: "20px",
    textAlign: "center",
  },
  formControl: {
    width: "80%",
  },
  input: {
    width: "100%",
  },
});

export default makeStyles(stylesObject);
