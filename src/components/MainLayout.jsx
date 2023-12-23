'use client';

import {usePathname } from 'next/navigation';
import {useId,useRef , useState, useEffect} from 'react';
import {useReducedMotion, motion, MotionConfig} from 'framer-motion';
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";


// components
import Header from './Header';
import Navigation from './Navigation';
import Container from './Container';
import Offices from './Offices'; 
import SocialMedia from './SocialMedia';
import Footer from './Footer';

const MainLayoutInner = ({children})=>{
  const panelId = useId();
  const [expanded , setExpanded] = useState(false);
  const openRef = useRef();
  const closeRef = useRef();
  const navRef = useRef();
  const shouldReduceMotion = useReducedMotion();
  
  function onClick(event){
      if(event.target.closest("a")?.href=== window.location.href)
      setExpanded(false)
    }
  useEffect(()=>{
    
    window.addEventListener('click',onClick);

    return ()=>{
      window.removeEventListener('click',onClick);
    }
  },[]);
  
  return (
  
  <MotionConfig transition={shouldReduceMotion?{duration:0}:undefined}>
          {/* Header section */}
            <header>
              <div className="left-0 right-0 top-2 absolute z-40 pt-14"
              aria-hidden={expanded? 'true':undefined}
              inert={expanded?'': undefined}>
                  {/* header here */}
                  <Header 
                  panelId={panelId} 
                  icon={HiMenuAlt4}
                  toggleRef={openRef}
                  expanded={expanded}
                  onToggle={()=>{
                    setExpanded((expanded)=>!expanded)
                    window.setTimeout(
                      ()=>closeRef.current?.focus({preventScroll:true})
                    );
                  }}
                  />
              </div>
              {/* navigation after menu open */}
              <motion.div 
              id={panelId} layout
              style={{ height: expanded ? "auto" : "0.5rem" }}
              className="relative z-50 overflow-hidden bg-primary pt-2"
              aria-hidden={expanded ? undefined : "true"}
              inert={expanded ? undefined : ""}>
                  <motion.div layout className="bg-neutral-800">
                    <div  ref={navRef} className="bg-primary pb-16 pt-14">
                      <Header 
                      invert
                      panelId={panelId}                        
                      toggleRef={closeRef}
                      icon={IoMdClose}
                      expanded={expanded}
                      onToggle={() => {
                        setExpanded((expanded) => !expanded);
                        window.setTimeout(() =>
                          openRef.current?.focus({ preventScroll: true })
                        );
                      }}
                      />
                    </div>
                    {/* navigation */}
                    <Navigation />
                    <div className="relative bg-primary before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
                      <Container>
                        <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                          <div>
                            <h2 className="text-white font-display text-base font-semibold">
                              Our Offices
                            </h2>
                            <Offices invert
                            className="mt-6 grid
                            grid-cols-1 gap-8 sm:grid-cols-2"
                            />

                          </div>
                          <div className="sm:border-l sm:border-transparent sm:pl-16">
                            <h2 className="font-display text-base font-semibold text-white">
                              Follow us
                            </h2>
                            <SocialMedia className="mt-6" invert />
                          </div>
                        </div>
                      </Container>
                    </div>
                  </motion.div>

              </motion.div>


            </header>
          {/* Header section */}
          
          {/*MAIN CONTENT  */}
          <motion.div  
          layout style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="relative flex flex-auto overflow-hidden bg-white pt-14" >
            <motion.div 
            layout
            className="relative isolate flex w-full flex-col pt-9">
              <main className="w-full flex-auto">{children}</main>
              <Footer />
            </motion.div>
          </motion.div>
  </MotionConfig>)

}

const MainLayout = ({children}) => {
  const pathName = usePathname();
  return (
    <MainLayoutInner key={pathName}>{children}</MainLayoutInner>
  )
}

export default MainLayout