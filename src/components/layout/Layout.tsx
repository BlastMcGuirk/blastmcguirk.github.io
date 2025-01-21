import { PropsWithChildren } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const Layout = (props: PropsWithChildren) => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}