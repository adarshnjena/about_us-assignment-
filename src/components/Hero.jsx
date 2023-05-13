import { Grid, Text } from "@nextui-org/react";
import styles from "../style/hero.module.css";

export default function Hero() {
  return (
    <Grid.Container
      className={styles.main}
      justify="center"
      alignItems="center"
      alignContent="center"
      css={{
        maxHeight: "82vh",
        width: "99vw",
        height: "60vh",
        margin: "auto",
        marginTop: "12vh",
        position: "relative",
      }}
    >
      <Grid xs={100} sm={6}>
        <div className={styles.heroText}>
          <Text
            h1
            weight={"semibold"}
            css={{
              margin: "0",
              padding: "0",
            }}
          >
            A{" "}
            <span
              style={{
                color: "#aeffc9",
              }}
            >
              Team
            </span>{" "}
            Dedicated to make managing of{" "}
            <span
              style={{
                color: "#c3d0ff",
              }}
            >
              finance easy
            </span>{" "}
            for India
          </Text>
        </div>
      </Grid>
      <Grid xs={100} sm={6} className={styles.heroImage}>
        <img src="./assets/hero.png" alt=""></img>
      </Grid>
      <img src="./assets/Vector.png" className={styles.vector}></img>
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>
      <div className={styles.glow3}></div>
    </Grid.Container>
  );
}
