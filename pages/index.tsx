import '@fontsource/inter/latin.css';
import styles from "../styles/Home.module.scss";
import clsx from "clsx";
import Header from "../components/header/Header";
import { AboutMe } from "../components/AboutMe/AboutMe";
import Resume from "../components/Resume/Resume";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="relative w-screen justify-center items-center origin-top-left" style={{ height: "calc(100vh - 56px)" }}>
        <div className={clsx(styles.card, styles.card1)}>
          <Education />
        </div>
        <div className={clsx(styles.card, styles.card2)}>
          <AboutMe />
        </div>
        <div className={clsx(styles.card, styles.card3)}>
          <Skills />
        </div>
        <div className={clsx(styles.card, styles.card4)}>
          <Resume />
        </div>
      </div>
    </div>
  );
}
