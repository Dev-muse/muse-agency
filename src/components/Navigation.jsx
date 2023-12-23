import Link from 'next/link';
// components 
import Container from './Container';

const NavigationRow = ({ children }) => {
    return (
      <div className="even:mt-px sm:bg-primary">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
        </Container>
      </div>
    );
  };

  const NavigationItem = ({ href, children }) => {
    return (
      <Link
        href={href}
        className="group relative isolate -mx-6 bg-primary px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
      >
        {children}
        <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
      </Link>
    );
  };



const Navigation = () => {
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/work">Our Work</NavigationItem>
        <NavigationItem href="/about">About Us</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/process">Our Process</NavigationItem>
        <NavigationItem href="/blog">Blog</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

export default Navigation