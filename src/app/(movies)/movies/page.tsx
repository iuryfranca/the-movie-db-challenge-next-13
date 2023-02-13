import { FilterPage } from '@/components/filter-page'
import { ListItemsPage } from '@/components/list-items-page'

export default function MoviesPage() {
  return (
    <div className='container'>
      <p className='pt-3 pb-3 text-2xl font-extrabold leading-tight tracking-tighter md:py-5 md:text-3xl lg:text-4xl  lg:leading-[1.1]'>
        Filmes populares
      </p>
      <div className='flex flex-col items-start gap-6 md:grid md:grid-cols-[250px_1fr]'>
        <section className='grid w-full items-center gap-6 pt-6 md:py-5'>
          <FilterPage />
        </section>
        <section className='flex w-full flex-col pt-6 pb-8 md:py-5'>
          <ListItemsPage />
        </section>
      </div>
    </div>
  )
}
