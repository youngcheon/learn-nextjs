import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <style jsx>{`
                nav {
                    background-color: tomato;
                }
                a {
                    text-decoration: none;
                }
            `}</style>
        </nav>
    );
}
