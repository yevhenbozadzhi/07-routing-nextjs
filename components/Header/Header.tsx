import Link from 'next/link'
import css from './Header.module.css'
// import CategoryMenu from '../../components/TagsMenu/TagsMenu';
import TagsMenu from '../../components/TagsMenu/TagsMenu';

const Header = () => {
    const categories = ['All', 'Work', 'Personal', 'Meeting', 'Shopping', 'Todo'];
    
    return (
        <header className={css.header}>
            <Link href="/" aria-label="Home">
                NoteHub
            </Link>
            <nav aria-label="Main Navigation">
                <ul className={css.navigation}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <TagsMenu categories={categories}/>
                    </li>
                </ul>
            </nav>
        </header>

    );
} 

export default Header;