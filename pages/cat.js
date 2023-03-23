import styles from "@/styles/Home.module.css";
import Link from "next/link";

const defaultEndpoint = "https://api.thecatapi.com/v1/images/search";

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Cat({ data }) {
  console.log(data);
  return (
    <div className={styles.container}>
      <h1>Cat API</h1>
      <div className={styles.imageContainer}>
        <img src={data[0].url} alt="Cat" className={styles.image} />
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/cat">
          <button className={styles.button}>Summon Another Cat</button>
        </Link>
      </div>
    </div>
  );
}
