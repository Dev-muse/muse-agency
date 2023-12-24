import Container from '../components/Container';
import FadeIn from '../components/FadeIn';
import { RiCheckDoubleLine } from "react-icons/ri";

 
export default function Home() {
  return (
    <main className='text-black'>
      <Container className='mt-24 sm:mt-32'>
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl sm:text-7xl
          font-medium tracking-tight [text-wrap:balance] 
          text-neutral-950 hover:text-primary transition-all
          duration-300 ">
          Transform Your Online Presence in One Week!
          </h1>
          <ul className="mt-6 text-lg space-y-2 text-neutral-600 list-inside ">
              <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  Personalized web design for a unique online identity.
              </li>
              <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  Sleek design and functionalities to attract investors and clients.
              </li>
              <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  Streamlined e-commerce development for a seamless shopping experience.
              </li>
               
          </ul>
          


        </FadeIn>

      </Container>
    </main>
  )
}
