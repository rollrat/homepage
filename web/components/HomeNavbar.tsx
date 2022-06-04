/* eslint-disable @next/next/no-img-element */
import { Container, Navbar } from "react-bootstrap";
import GithubIcon from '../assets/github.svg';
import DiscordIcon from '../assets/discord.svg';
import styles from "./HomeNavbar.module.scss";

function GithubButton() {
  return (
    <div className={styles.GithubButton}>
      <GithubIcon />
    </div>
  );
}

function DiscordButton() {
  return (
    <div className={styles.DiscordButton}>
      <DiscordIcon />
    </div>
  );
}

export default function HomeNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <img
            alt=""
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          RollRat Homepage
        </Navbar.Brand>
        <div style={{ display: "flex" }}>
          <DiscordButton />
          <div style={{ padding: "0 16px 0 0" }}></div>
          <GithubButton />
        </div>
      </Container>
    </Navbar>
  );
}
