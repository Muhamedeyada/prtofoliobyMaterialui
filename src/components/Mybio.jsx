import { Button } from "@mui/material";
import "../styles/mybio.css";
import Prograsbar from "./Prograsbar";

export default function Mybio() {
  return (
    <div className="parent">
      <div className="image-container">
        <img src="Process - Product Design and Engineering Services.jfif" />
      </div>
      <div className="text-container">
        <h1 style={{ textAlign: "start" }}>My Bio</h1>
        <div
          style={{ display: "flex", alignItems: "start", marginBottom: "20px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vero
          architecto velit accusantium omnis, ipsa veniam repudiandae aperiam,
          error officiis culpa optio vitae recusandae aliquid quisquam enim
          incidunt harum commodi?
        </div>
        <div
          style={{ display: "flex", alignItems: "start", marginBottom: "20px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          ratione illo corporis necessitatibus. Mollitia blanditiis ab, et optio
          totam laudantium quidem recusandae nesciunt minus nostrum perspiciatis
          reprehenderit expedita dolorum autem.
        </div>
        <div className="skills">
          <div>
            <div>Design</div>
            <Prograsbar value={80} />
          </div>
          <div>
            <div>Html</div>
            <Prograsbar value={90} />
          </div>
          <div>
            <div>Css</div>
            <Prograsbar value={70} />
          </div>
          <div>
            <div>Javascript</div>
            <Prograsbar value={60} />
          </div>
        </div>
        <div className="btns">
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "200px",
              backgroundColor: "#96bb7c",
              borderRadius: "50px",
              padding: "10px 20px",
              marginRight: "10px",
            }}
          >
            HIRE ME
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "200px",
              backgroundColor: "gray",
              borderRadius: "50px",
              padding: "10px 20px",
            }}
          >
            DOWNLOAD CV
          </Button>
        </div>
      </div>
    </div>
  );
}
