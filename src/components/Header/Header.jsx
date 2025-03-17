import "./header.css" 
import Link from "./Link/Link";
import {links} from "./constant"

const Header = () => {
    return (
    <header className="header">
        <div className="header__container" >
            <img className="header__logo" alt="logo" src="./img/logo-lexicon_2x.gif"/>
            <nav>
                <ul className="header__links">
                    {
                        links.map((link, index) =>
                            <Link name={link.name} href={link.href} key={`header-link${index}`} />
                        )
                    }
                </ul>
            </nav>
        </div>
        <h1 className="header__title">Marketplace UI!</h1>
    </header>
    )
}

export default Header;