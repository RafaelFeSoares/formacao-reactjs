import Banner from "componentes/Banner/index";
import Cabecalho from "componentes/Cabecalho/index";
import Galeria from "componentes/Galeria";
import Menu from "componentes/Menu";
import Populares from "componentes/Populares/index.jsx";
import Rodape from "componentes/Rodape";
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
                <div>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}
