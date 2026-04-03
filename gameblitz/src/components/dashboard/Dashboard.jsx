import DashboardSidebar from "./sidebar/Sidebar";
import { Outlet } from 'react-router'
import LandingNoTeam from "./no-team/LandingNoTeam";
export function Dashboard(){

    return(
        <>
            <section className="flex dashboard-template">
                {/* <DashboardSidebar /> */}
                {/* <Outlet /> */}
                <LandingNoTeam />
            </section>
        </>
    )
}