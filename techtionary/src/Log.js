import React from "react";
import Camara from "./Camara";

const Log = () => {
    return (
        <html>
            <body>
                <section id="contenedor">
                    <header class="header">
                        <h1>
                            Techtionary
                        </h1>
                    </header>
                    <section id="secc01">
                        <article>
                            <input type="button" value="Camara"></input>
                        </article>
                        <article>
                            <input type="button" value="Dispositivos"></input>
                        </article>
                    </section>
                    <section id="secc02">
                        <article>
                            <Camara />
                        </article>
                    </section>
                </section>
            </body>
        </html>
    );
};

export default Log;