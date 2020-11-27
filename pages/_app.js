import React from "react";

import '../styles/index.css'
import Analytics from "../components/Analytics";

function MyApp({ Component, pageProps }) {
    return <Component { ...pageProps }>
        <Analytics/>
    </Component>
}

export default MyApp