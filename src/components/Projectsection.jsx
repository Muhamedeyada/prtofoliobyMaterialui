import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../styles/projectsection.css";
import { useEffect, useRef } from "react";

export default function Projectsection() {
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    imageRefs.current.forEach((img) => {
      if (img) {
        observer.observe(img);
      }
    });

    return () => {
      if (imageRefs.current) {
        imageRefs.current.forEach((img) => {
          if (img) {
            observer.unobserve(img);
          }
        });
      }
    };
  }, []);

  return (
    <div>
      <div>
        <h1>My Projects</h1>
      </div>

      <ImageList
        gap={20} /* Increase gap between images */
        className="continerofImages"
        sx={{
          height: 1200,
          margin: "auto",
          padding: 10,
        }}
        cols={2} /* Reduce cols to increase width of each image */
        rowHeight={300} /* Increase row height for bigger images */
      >
        {itemData.map((item, index) => (
          <ImageListItem key={item.img} sx={{ width: "100%" }}>
            {" "}
            {/* Set width to 100% */}
            <div className="imageWrapper">
              <img
                className="proImg"
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
                ref={(el) => (imageRefs.current[index] = el)}
              />
              <div className="overlay">{item.title}</div>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "1.jfif",
    title: "project1",
  },
  {
    img: "2.jfif",
    title: "project2",
  },
  {
    img: "3.jfif",
    title: "project3",
  },
  {
    img: "4.jfif",
    title: "project4",
  },
  {
    img: "5.jfif",
    title: "project5",
  },
  {
    img: "1.jfif",
    title: "project6",
  },
];
