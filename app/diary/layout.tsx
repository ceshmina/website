import SideBar from '@/components/diary/sidebar'
import SideBarBase from '@/components/diary/sidebarbase'
import SideBarSlide from '@/components/diary/sidebarslide'

const DiaryLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (<>
    <div className="md:hidden">
      <SideBarSlide><SideBarBase /></SideBarSlide>
    </div>
    <main className="max-w-[800px] mx-auto p-4 md:px-0">
      <div className="md:flex py-4">
        <div className="md:w-[70%]">
          {children}
        </div>
        <div className="hidden md:block md:w-[30%] md:pl-4">
          <SideBar />
        </div>
      </div>
    </main></>)
}

export default DiaryLayout
