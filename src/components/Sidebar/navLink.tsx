import Link from 'next/link';
import {
    useSelectedLayoutSegment,
    useSelectedLayoutSegments
} from 'next/navigation';

export default function NavLink({
    href,
    children
}: {
    href: string;
    children: React.ReactNode;
}) {
    let segment = useSelectedLayoutSegment(); // projects
    let segments = useSelectedLayoutSegments(); // ['projects','project-overview']
    // console.log(href, segment, segments);

    // let menuHeadingActive = href === '#' && segments.includes(`${segment}`);
    let menuOptionActive = href === `/${segments.join('/')}`;
    // console.log({ href, menuOptionActive }, `/${segment}`);
    // console.log(
    //     { href, menuHeadingActive },
    //     href === '#' && segments.includes(`${segment}`)
    // );

    return (
        <Link href={href} className={`${menuOptionActive ? 'active' : ''}`}>
            {children}
        </Link>
    );
}
