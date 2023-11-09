import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { api } from '@/service/api'
import ListOfCategory from '@/components/ListOfCategorys'

export const metadata: Metadata = {
  title: 'Mercado Gratis',
  description: 'by Thomas Salduende',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const products = await api.item.items();
  const categories = await api.item.categories(products);


  return (
    <html lang="en">
      <body>
        <header className=' h-16 bg-yellow-300 flex'>
          <Link href="/" className='text-yellow-900 m-auto font-bold'>Mercado Gratis</Link>
          <form className='px-4 max-w-screen-lg m-auto flex-1 flex gap-4' action='/items'>
            <input className='h-8 flex-1 px-2' type="text" name='search' />
            <button className=' h-8 bg-gray-200 px-4 py-1 text-slate-700' type='submit'>Buscar</button>
          </form>
        </header>
        <div className='grid grid-cols-[230px_1fr]'>
          <aside>
            <ListOfCategory categories={categories} />
          </aside>
          <main className='max-w-screen-xl mx-20'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
