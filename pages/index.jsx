import styles from "/styles/home.module.css";
import Head from "next/head";
import Banner from "@/components/Banner";

export default function Home() {
    const handleOnBannerButtonClick = (e) => {
        console.log(e.target.id);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Coffee Connoisseur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Banner
                    buttonText="View stores nearby"
                    handleOnClick={handleOnBannerButtonClick}
                />
            </main>
        </div>
    );
}
