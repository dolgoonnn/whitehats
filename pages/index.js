import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@components/Header";
import HeroHome from "@components/HeroHome";
import FeaturesHome from "@components/Features";
import FeaturesBlocks from "@components/FeaturesBlocks";
import Testimonials from "@components/Testimonials";
import Newsletter from "@components/Newsletter";
import Footer from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>White hats</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/images/logoCircle.png" />
            </Head>
            <div className="flex flex-col min-h-screen overflow-hidden">
                {/*  Site header */}
                <Header />

                {/*  Page content */}
                <main className="flex-grow mb-12">
                    {/*  Page sections */}
                    <HeroHome />
                    {/* <FeaturesHome /> */}
                    <FeaturesBlocks />
                    {/* <Testimonials /> */}
                    {/* <Newsletter /> */}
                </main>

                {/*  Site footer */}
                <Footer />
            </div>
        </>
    );
}
