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
            </Head>
            <div className="flex">
                <div className="text-right mr-8 w-16 hidden md:block">&nbsp;</div>
                <div className="flex-1 mt-24 mb-16 ml-4 md:ml-0">
                    <Name/>
                </div>
            </div>
            <div className="flex items-start">
                <div className="flex md:flex-col
                text-right text-gray-600 font-medium
                sticky top-0
                mr-6 mt-6
                transform rotate-90 md:rotate-0 origin-top-left"
                     style={ { 'top': '1rem' } }>
                    <a href="#About" className="md:mt-4 block mb-3 mr-3 no-underline transform">About</a>
                    <a href="#Currently" className="block mb-3 mr-3 no-underline transform">Currently</a>
                    <a href="#Portfolio" className="block mb-3 mr-3 no-underline transform">Portfolio</a>
                    <a href="#Contact" className="block mb-3 mr-3 no-underline transform">Contact</a>
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
