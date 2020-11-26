import Head from 'next/head'
import { Name } from "../components/Name";
import { About } from "../components/About";
import { Currently } from "../components/Currently";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
    return (
        <div className="mx-8 sm:mx-16 md:mx-20 lg:mx-56">
            <Head>
                <title>Wade Fletcher</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Wade Fletcher is a student and entrepreneur but most of all, a builder. Currently building UndercoverVC: a new kind of venture scout network."/>
            </Head>

            <Name/>

            <div className="flex items-start">
                <div className="flex md:flex-col md:w-32
                text-left text-gray-400
                sticky top-0
                mr-6 mt-6
                md:space-y-1
                transform rotate-90 md:rotate-0 origin-top-left">
                    <a href="#About" className="block mx-3 md:ml-0 no-underline transform hover:text-gray-300 transition">About</a>
                    <a href="#Currently" className="block mr-3 no-underline transform hover:text-gray-300 transition">Currently</a>
                    <a href="#Portfolio" className="block mr-3 no-underline transform hover:text-gray-300 transition">Portfolio</a>
                    <div className="hidden md:block ml-6 space-y-1 text-xs">
                        <a href="#Portfolio" className="block no-underline transform hover:text-gray-300 transition">Projects</a>
                        <a href="#Portfolio" className="block no-underline transform hover:text-gray-300 transition">Academics</a>
                        <a href="#Portfolio" className="block no-underline transform hover:text-gray-300 transition">Professional</a>
                        <a href="#Portfolio" className="block no-underline transform hover:text-gray-300 transition">More</a>
                    </div>
                    <a href="#Contact" className="block mr-3 no-underline transform hover:text-gray-300 transition">Contact</a>
                </div>

                <div className="max-w-2xl -ml-72 md:ml-0 mb-40">
                    <About/>
                    <Currently/>
                    <Portfolio/>
                    <Contact/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
