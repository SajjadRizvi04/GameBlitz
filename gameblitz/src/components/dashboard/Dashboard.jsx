import DashboardSidebar from "./sidebar/Sidebar";
import { Outlet } from 'react-router'
export function Dashboard(){

    return(
        <>
            <section className="flex dashboard-template">
                <DashboardSidebar />
                <Outlet />

            </section>
        </>
    )
}