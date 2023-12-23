import Link from 'next/link';
import classNames from 'classnames'

// COMPONENTS
import Container from './Container';
import Logo from './Logo';
import Button from './Button';


const Header = ({panelId,invert=false,
                icon:Icon,expanded,
                onToggle,toggleRef}) => {


  const iconClass = classNames({
    'h6 w6': true,
    'fill-white group-hover:fill-neutral-200': invert,
    'fill-neutral-950 group-hover:fill-neutral-700': invert!==true
  })
  
  const btnClass = classNames({
    'hover:bg-white/10':invert,
    'hover:bg-neutral-950/10':invert!==true,
    'group m-2.5 rounded-full p-2.5 transition':true,
  })

  return (
  
        <Container>
          <div className="flex items-center">


            {/* logo */}
            <Link href='/' aria-label="Homepage">
              <Logo invert={invert}>Rapid_Muse</Logo>
            </Link>


            <div className="ml-auto flex items-center gap-x-8">
              <Button href='/contact' invert={invert}>
                Contact Us
              </Button>

              <button ref={toggleRef} onClick={onToggle} 
              type='button' className={btnClass}
              aria-expanded={expanded.toString()}
              aria-controls={panelId}>

                <Icon  className ={iconClass}/>

              </button>
            </div>
          </div>
        </Container>
     
  )
}

export default Header