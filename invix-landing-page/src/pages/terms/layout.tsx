import { Outlet } from "react-router-dom";



export default function TermsLayout(){
    return(
    <div className="space-y-6">
        <Outlet/>
    </div>
    );
}