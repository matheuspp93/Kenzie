import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ButtonSnackbar = ({ open, severityValue, message }) => {
  const snackAlert = (severityValue, message) => {
    return <Alert severity={severityValue}>{message}</Alert>;
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000}>
        {snackAlert(severityValue, message)}
      </Snackbar>
    </>
  );
};

export default ButtonSnackbar;
