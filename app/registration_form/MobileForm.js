import { Dialog, IconButton } from "@mui/material";
import RegistrationForm from "./Form";
import { IoClose } from "react-icons/io5";

//styles
const styles = {
  formContainer: {
    padding: "15px",
    backgroundColor: "#f7f7f7",
    position: "relative",
  },

  Dialog: {
    "& .MuiDialog-paper": {
      margin: "15px",
    },
  },
  closeIcon: {
    position: "absolute",
    top: 0,
    right: 0,
  },
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
        <IconButton sx={styles.closeIcon} onClick={onClose}>
          <IoClose size={25} />
        </IconButton>

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
