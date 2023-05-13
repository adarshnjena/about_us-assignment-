import { Grid, Text, Spacer, Button } from "@nextui-org/react";
import styles from "../style/contactUs.module.css";

export default function ContactUs() {
  return (
    <Grid.Container
      className={styles.main}
      justify="space-around"
      alignItems="center"
      alignContent="space-around"
      css={{
        width: "100vw",
        margin: "auto",
        position: "relative",
        "@sm": {
          padding: "10vw",
        },
      }}
      gap={2}
    >
      <Grid xs={12} sm={5}>
        <img
          src="./assets/undraw_join_re_w1lh-1.png"
          alt=""
          style={{
            height: "50vh",
          }}
        />
      </Grid>
      <Grid xs={12} sm={7} css={{ zIndex: "$10" }}>
        <Grid>
          <Text h1 size={30}>
            Lorem ipsum dolor, sit amet consectetur{" "}
            <span style={{ color: "#b6ffce" }}>elit. Quibusda</span>
          </Text>
          <Spacer y={1} />
          <Text p size={15} weight={"light"} color="grey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nam praesentium nulla aliquam suscipit aspernatur corporis dicta
            laborum, rerum at,
          </Text>
          <Spacer y={3} />
          <div style={{ display: "flex" }}>
            <input
              placeholder="Type your message..."
              style={{
                backgroundColor: "#fff",
                border: "none",
                color: "#000",
                padding: "10px 20px",
                width: "60%",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#b6ffce",
                },
              }}
            />
            <Spacer x={1} />
            <Button
              size="large"
              css={{
                backgroundColor: "#b6ffce",
                color: "$black",
                borderRadius: "0px",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#b6ffce",
                  border: "1px solid #b6ffce",
                },
              }}
            >
              Contact Us
            </Button>
          </div>
        </Grid>
      </Grid>
      <img src="./assets/Vector.png" className={styles.bg1}></img>
      <img
        src="./assets/Untitled_design-removebg-preview.png"
        className={styles.bg2}
      ></img>
    </Grid.Container>
  );
}
