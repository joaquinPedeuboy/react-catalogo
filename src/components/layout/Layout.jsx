import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTitle from "../common/PageTitle";
import WhatsAppFloat from "../common/WhatsAppFloat";


export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <PageTitle />
            <Navbar />
            <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 bg-[#faf7f2]">
                <Outlet />
                <WhatsAppFloat/>
            </main>
            <Footer />
        </div>
    )
}
