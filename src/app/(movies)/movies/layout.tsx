interface MovieLayoutProps {
  children: React.ReactNode
}

export default function MovieLayout({ children }: MovieLayoutProps) {
  return <div className='min-h-screen'>{children}</div>
}
