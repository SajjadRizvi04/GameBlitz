import DashboardSidebar from "./sidebar/Sidebar";
import { Outlet } from 'react-router'
import './Dashboard.css'
export function Dashboard(){

    return(
        <>
            <section className="flex dashboard-template">
                <DashboardSidebar />

                <div className="dashboard-outlet">
                    <Outlet />
                </div>
                
            </section>
             
        </>
    )
}