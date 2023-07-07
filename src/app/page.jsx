import Image from "next/image";
import styles from "./page.module.css";
// import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Trip Sit</h1>
        <p className={styles.desc}>Web Developer</p>
        {/* <Button url="/portfolio" text="See Our Work" /> */}
      </div>
      <div className={styles.item}>
        <div className={styles.img} class="videoContainer">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kxFTWk9lLDU?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            frameborder-radius="10px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
