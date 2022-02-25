import Link from 'next/link';
import style from './nav.module.css';


const Nav=()=>{
return(
    <nav>
          <Link href="/">
            <a>Home</a>
        </Link> 
        <Link href="/about">
            <a className={style.link}>About</a>
        </Link> 
    </nav>
)
}

export default Nav;