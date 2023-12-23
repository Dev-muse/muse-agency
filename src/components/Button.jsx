 import Link from 'next/link'
import clsx from 'clsx';

const Button = ({invert,href,className , children,...props}) => {
    className = clsx(
        className , 
        'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
        invert? 'bg-white text-neutral-950 hover:bg-neutral-200':
                'bg-primary text-white hover:bg-red-600'
    )
    let inner = <span>{children}</span>
    
    // conditionally render links 
    if(href){
        return (
            <Link href={href} className={className}{...props}>
                {inner}
            </Link>
        )
    }
        return (
            <button className={className}{...props}>
                {inner}
            </button>
        )
}

export default Button