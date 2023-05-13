import { Grid, Text, Image, Spacer } from "@nextui-org/react";

export default function OurVision() {
  return (
    <section>
      <Grid.Container
        justify="space-around"
        alignItems="center"
        alignContent="space-around"
        css={{
          width: "100vw",
          margin: "auto",
          position: "relative",
          backgroundColor: "#080909",
          "@sm": {
            padding: "10vw",
          },
        }}
        gap={2}
      >
        <Grid xs={12} sm={5}>
          <Image src="./assets/undraw_launching_re_tomg-1.png" alt="" />
        </Grid>
        <Grid xs={12} sm={7}>
          <Grid
            css={{
              textAlign: "center",
            }}
          >
            <Text h1 size={30}>
              Our Vision
            </Text>
            <Spacer y={1} />
            <Text
              p
              size={15}
              weight={"light"}
              css={{
                lineHeight: "$xl",
                textAlign: "justify",
                "@xs": {
                  textAlign: " center ",
                },
                "@sm": {
                  textAlign: "center",
                  lineHeight: "$3xl",
                },
                "@md": {
                  textAlign: "center",
                  lineHeight: "$3xl",
                },
                "@lg": {
                  textAlign: "center",
                  ineHeight: "$3xl",
                },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              nam praesentium nulla aliquam suscipit aspernatur corporis dicta
              laborum, rerum at, optio voluptate sint incidunt vitae laboriosam
              quod atque nesciunt. Tenetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Excepturi molestias quam commodi
              atque officia.
            </Text>
          </Grid>
        </Grid>
      </Grid.Container>
    </section>
  );
}
