// import PhotoList from '../photo/components/PhotoList'
import Header from './header'
// import DashboardPage from './page'

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Header />
    {/* <DashboardPage /> */}
    {/* <PhotoList /> */}
    {children}
    </>
  )
}

export default DashboardLayout