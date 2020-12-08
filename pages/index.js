import Head from "next/head";
import styles from "../styles/Home.module.css";
import ItemCard from "../components/itemCard";

export default function Home() {
  const data = [
    {
      name: 'iPhone X',
      image: '/iPhone-X.jpg',
      tags: [
        'Apple',
        'iPhone',
        'iOS',
        'Previous',
      ],
    },
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {data.map((d) => {
            return <ItemCard data={d} />
          })}
        </div>
      </main>
    </div>
  );
}
