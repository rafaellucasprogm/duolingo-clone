type Props = {
    children: React.ReactNode
}


function MainLayout({ children }: Props) {
  return (
    <>
    <main className="pl-[256px] h-full">
        <div className="bg-red-200 h-full">
            { children }
        </div>
    </main>
    </>
  )
}

export default MainLayout