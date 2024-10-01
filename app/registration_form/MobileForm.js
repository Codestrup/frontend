import { Dialog } from "@mui/material";
import RegistrationForm from "./Form";

//styles
const styles = {
  formContainer: {
    padding: "15px",
    backgroundColor: "#f7f7f7"
  },

  Dialog:{
    "& .MuiDialog-paper":{
        margin:'15px'
    }
  }
};

export default function MobileRegistrationForm({
  open,
  onClose,
  internship,
  refer,
  setConsentDialogOpen,
  setFormValues,
  loading,
  setStateName,
  setCityName,
  isMobileScreen,
}) {
  return (
    <Dialog open={open} onClose={onClose} sx={styles.Dialog}>
      <div style={styles.formContainer}>
        <RegistrationForm
          internship={internship}
          refer={refer}
          setConsentDialogOpen={setConsentDialogOpen}
          setFormValues={setFormValues}
          loading={loading}
          setStateName={setStateName}
          setCityName={setCityName}
          isMobileScreen={isMobileScreen}
        />
      </div>
    </Dialog>
  );
}
