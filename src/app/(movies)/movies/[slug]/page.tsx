interface MoviePageProps {
  params: { slug: string }
}

export default function MoviePage({ params }: MoviePageProps) {
  const slug = params.slug
  return (
    <>
      <h1>My Page</h1>
      <h1>{slug}</h1>
    </>
  )
}
