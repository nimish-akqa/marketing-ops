import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

export default function NavLink({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  let segments = useSelectedLayoutSegments();

  let menuOptionActive = href === `/${segments.join('/')}`;
  return (
    <Link href={href} className={`${menuOptionActive ? 'active' : ''}`}>
      {children}
    </Link>
  );
}
