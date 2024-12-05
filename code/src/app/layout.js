// src/app/layout.js
//import React from "react";
import "../styles/styles.css"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Grammys</title>
            </head>
            <body>
                <header>
                    <h1><b className="gold">Grammy</b>stats</h1>
                </header>

                {children}
            </body>
        </html>
    );
}
