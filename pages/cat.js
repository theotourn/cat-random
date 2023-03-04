import styles from "@/styles/Home.module.css";

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
  return (
    <div className={styles.container}>
      <h1>Cat API</h1>
      <div className={styles.imageContainer}>
        <img src={data[0].url} alt="Cat" className={styles.image} />
      </div>
    </div>
  );
}