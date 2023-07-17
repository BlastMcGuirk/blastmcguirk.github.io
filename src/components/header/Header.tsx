import "./Header.css"
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom'
import { Page, pages } from '../../main';

export const Header = () => {
    const params = useLocation();

    // Filter out the current page from the header list
    const filteredPages: Page[] = useMemo(() => {
        return pages.filter((page: Page) => page.path !== params.pathname)
    }, [params.pathname])

    return (
        <header>
            <ul>
                {filteredPages.map((page: Page) => {
                    return <li key={page.path}><a href={page.path}>{page.name}</a></li>
                })}
            </ul>
        </header>
    )
}