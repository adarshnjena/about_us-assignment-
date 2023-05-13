import { Grid, Spacer, Text, Image } from "@nextui-org/react";
import "boxicons";

export default function Team() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "rgb(8,9,9)",
        // eslint-disable-next-line no-dupe-keys
        background:
          "linear-gradient(153deg, rgba(8,9,9,1) 0%, rgba(0,0,0,1) 52%, rgba(43,51,76,1) 100%)",
      }}
    >
      <div>
        <Text
          size={40}
          h1
          css={{
            letterSpacing: "1px",
            textAlign: "center",
          }}
        >
          Meet Our Team
        </Text>
        <Spacer y={1} />
        <Text color="grey" css={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          odio, facere veniam quod tempora corrupti
        </Text>
      </div>
      <Grid.Container gap={5} justify="center" css={{ marginTop: "2rem" }}>
        <Grid xs={12} sm={3} direction="column" alignItems="center">
          <Image
            src="https://avatars.githubusercontent.com/u/7525670?v=4"
            alt="avatar"
            css={{
              width: "100%",
              objectFit: "cover",
            }}
          />
          <Spacer y={1} />
          <Text h3>John Doe</Text>
          <Spacer y={-0.7} />
          <Text color="grey">Founder & CEO</Text>
          <Spacer y={0.5} />
          <Text color="grey" css={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            odio, facere veniam quod tempora corrupti Lorem ipsum dolor
          </Text>
          <Spacer y={1} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <box-icon
              color="white"
              type="logo"
              name="facebook-circle"
            ></box-icon>
            <box-icon color="white" name="twitter" type="logo"></box-icon>
            <box-icon
              color="white"
              name="linkedin-square"
              type="logo"
            ></box-icon>
            <box-icon color="white" name="instagram" type="logo"></box-icon>
          </div>
        </Grid>
        <Grid xs={12} sm={3} direction="column" alignItems="center">
          <Image
            src="https://avatars.githubusercontent.com/u/7525670?v=4"
            alt="avatar"
            css={{
              width: "100%",
              objectFit: "cover",
            }}
          />
          <Spacer y={1} />
          <Text h3>John Doe</Text>
          <Spacer y={-0.7} />
          <Text color="grey">Founder & CEO</Text>
          <Spacer y={0.5} />
          <Text color="grey" css={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            odio, facere veniam quod tempora corrupti Lorem ipsum dolor
          </Text>
          <Spacer y={1} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <box-icon
              color="white"
              type="logo"
              name="facebook-circle"
            ></box-icon>
            <box-icon color="white" name="twitter" type="logo"></box-icon>
            <box-icon
              color="white"
              name="linkedin-square"
              type="logo"
            ></box-icon>
            <box-icon color="white" name="instagram" type="logo"></box-icon>
          </div>
        </Grid>
        <Grid xs={12} sm={3} direction="column" alignItems="center">
          <Image
            src="https://avatars.githubusercontent.com/u/7525670?v=4"
            alt="avatar"
            css={{
              width: "100%",
              objectFit: "cover",
            }}
          />
          <Spacer y={1} />
          <Text h3>John Doe</Text>
          <Spacer y={-0.7} />
          <Text color="grey">Founder & CEO</Text>
          <Spacer y={0.5} />
          <Text color="grey" css={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            odio, facere veniam quod tempora corrupti Lorem ipsum dolor
          </Text>
          <Spacer y={1} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <box-icon
              color="white"
              type="logo"
              name="facebook-circle"
            ></box-icon>
            <box-icon color="white" name="twitter" type="logo"></box-icon>
            <box-icon
              color="white"
              name="linkedin-square"
              type="logo"
            ></box-icon>
            <box-icon color="white" name="instagram" type="logo"></box-icon>
          </div>
        </Grid>
        <Grid xs={12} sm={3} direction="column" alignItems="center">
          <Image
            src="https://avatars.githubusercontent.com/u/7525670?v=4"
            alt="avatar"
            css={{
              width: "100%",
              objectFit: "cover",
            }}
          />
          <Spacer y={1} />
          <Text h3>John Doe</Text>
          <Spacer y={-0.7} />
          <Text color="grey">Founder & CEO</Text>
          <Spacer y={0.5} />
          <Text color="grey" css={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            odio, facere veniam quod tempora corrupti Lorem ipsum dolor
          </Text>
          <Spacer y={1} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <box-icon
              color="white"
              type="logo"
              name="facebook-circle"
            ></box-icon>
            <box-icon color="white" name="twitter" type="logo"></box-icon>
            <box-icon
              color="white"
              name="linkedin-square"
              type="logo"
            ></box-icon>
            <box-icon color="white" name="instagram" type="logo"></box-icon>
          </div>
        </Grid>
      </Grid.Container>
    </section>
  );
}
