import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/style.css";

export default function ContactInfo() {
  return (
    <div style={{ marginTop: "40px", marginRight: "100px" }}>
      <h3>Contact Info</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          marginLeft: "40px",
        }}
      >
        <LocationOnIcon />
        <span className="greenText">Egypt</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          marginLeft: "40px",
        }}
      >
        <PhoneIcon />
        <span className="greenText">+20 155-538-9865</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          marginLeft: "40px",
        }}
      >
        <EmailIcon />
        <span className="greenText">muhamedeyada@gmail.com</span>
      </div>
    </div>
  );
}
