import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import Analytics from "../components/Analytics";

export default class extends Document {
    render() {
        return (
            <html>
            <Head>
                <title>Wade Fletcher</title>

                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Wade Fletcher is a student and entrepreneur but most of all, a builder. Currently building UndercoverVC, a new model for student venture."/>
                <link rel="icon" type="image/svg+xml" href="/favicon.ico"/>

                <Analytics/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        );
    }
}