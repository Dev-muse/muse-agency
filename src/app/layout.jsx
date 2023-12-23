import './globals.css'
import MainLayout from '../components/MainLayout';

 

export const metadata = {
  title: {
    template: 'RapidMuse',
    default: 'Crafting Digital Excellence,One Pixel at a Time'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-primary text-base antialiased text-neutral-100">
      <body className='flex min-h-full flex-col'>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
