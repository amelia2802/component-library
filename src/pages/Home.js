import { Link } from "react-router";
export default function Home(){
    return(
        <main className="home">
            <h1>⚛️Welcome to React Component Library⚛️</h1>
            <section className="catalouge">
                <Link className="catalouge-class badges" to="/badges">Badges</Link>
                <Link className="catalouge-class banners" to="/banners">Banners</Link>
                <Link className="catalouge-class cards" to="/cards">Cards</Link>
                <Link className="catalouge-class testimonials" to="/testimonials">Testimonials</Link>
                <Link className="catalouge-class tooltip" to="/tooltip">Tooltip</Link>
                <Link className="catalouge-class toast" to="/toast">Toast</Link>
            </section>
        </main>
    )
}