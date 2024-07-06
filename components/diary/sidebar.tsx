import SideBarBase from '@/components/diary/sidebarbase'

const Sidebar = async () => {
  return (
    <div className="md:ml-4 mt-5 px-2 pt-4 pb-12 bg-gray-200 rounded-[12px]">
      <SideBarBase theme="light" />
    </div>
  )
}

export default Sidebar
