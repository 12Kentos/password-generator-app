import Image from "next/image";
import styles from "./page.module.scss";
import { Button, Container, Slider, SvgIcon, Typography } from "@mui/material";

import copyButton from "../assets/images/icon-copy.svg";
import Option from "./components/Option";

export default function Home() {
  return (
    <main>
      <form className={styles["form-wrapper"]}>
        <Typography
          sx={{
            color: "#817D92",
            fontSize: "1rem",
          }}
        >
          Password Generator
        </Typography>
        <Container
          sx={{
            display: "flex",
            width: "10",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "#817D92",
              fontSize: "1rem",
            }}
          >
            PTx1f5DaFX
          </Typography>
          <Button>
            <SvgIcon></SvgIcon>
            <Image src={copyButton} alt="Project Image" />
          </Button>
        </Container>
        <Container>
          <Container>
            <Typography
              sx={{
                color: "#817D92",
                fontSize: "1rem",
              }}
            >
              Character Length
            </Typography>
            <Typography
              sx={{
                color: "#817D92",
                fontSize: "1rem",
              }}
            >
              10
            </Typography>
          </Container>
          <Slider
            defaultValue={50}
            valueLabelDisplay="auto"
            sx={{
              color: "#A4FFAF",
            }}
          />
        </Container>
        <Container
          sx={{
            display: "flex",
            "flex-direction": "column",
          }}
        >
          <Option choice={`Include Uppercase Letters`} />
          <Option choice={`Include Lowercase Letters`} />
          <Option choice={`Include Numbers`} />
          <Option choice={`Include Symbols`} />
        </Container>
        <Container
          sx={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <Typography
            sx={{
              color: "white",
              textTransform: "uppercase",
            }}
          >
            Strength
          </Typography>
          <Typography
            sx={{
              color: "white",
              textTransform: "uppercase",
            }}
          >
            Medium
          </Typography>
          <div className={styles.testing}></div>
          <div className={styles.testing}></div>
          <div className={styles.testing}></div>
          <div className={styles.testing}></div>
        </Container>
        <Button>Generate</Button>
      </form>
    </main>
  );
}
