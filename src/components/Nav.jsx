import { Navbar, Image, Button, Link, Text } from "@nextui-org/react";
import style from "../style/nav.module.css";

export default function Nav() {
  const collapseItems = [
    "Home",
    "About Us",
    "For Student Startups",
    "For Students",
    "Events & Programs",
    "For Corporate Startups",
    "Premium Membership",
  ];
  const collapseItemsLink = ["/", "/", "/", "/", "/", "/", "/"];

  return (
    <Navbar
      maxWidth={"fluid"}
      height={"12vh"}
      shouldHideOnScroll
      variant="sticky"
      isBordered={"isDark"}
    >
      <Navbar.Brand
        css={{
          w: "150px",
        }}
      >
        <Image src="./assets/Logo.png" alt=""></Image>
      </Navbar.Brand>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Content enableCursorHighlight activeColor="white" hideIn="xs">
        <Navbar.Link href={""}>
          <Text weight="bold">Featres</Text>
        </Navbar.Link>
        <Navbar.Link href="">
          {" "}
          <Text weight="bold">Blog</Text>
        </Navbar.Link>
        <Navbar.Link href="">
          {" "}
          <Text weight="bold">Abot</Text>
        </Navbar.Link>
        <Navbar.Link href="">
          {" "}
          <Text weight="bold">Contact</Text>
        </Navbar.Link>
        <div className={style.seperate}></div>
        <Navbar.Link href="">
          <Button
            className="w3-large"
            bordered
            auto
            css={{
              border: "0px",
              borderRadius: "0px",
              backgroundColor: "#aeffc9",
            }}
          >
            <Text weight="bold" color="black">
              Join WaitList
            </Text>
          </Button>
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse css={{ paddingLeft: "10vw" }}>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={collapseItemsLink[index]}
              className={
                index === collapseItems.length - 1 ? style.premium : ""
              }
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
