import NavigationSidebar from "@/components/navigation/navigation-sidebar"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col md:flex-row h-full">
      {/* Navigation Sidebar */}
      <div className="hidden md:flex md:w-[72px] z-30">
        <NavigationSidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
