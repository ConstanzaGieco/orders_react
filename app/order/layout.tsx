import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";
import ToasNotification from "@/components/ui/ToasNotification";

export default function RootLayout({children}: Readonly<{  children: React.ReactNode;}>) {
  
    return (
        <>
            <div className="md:flex">
                <OrderSidebar/>
                <main className="md:flex-1 md:h-screen ms:overflow-y-scroll p-5">
                    {children}
                </main>
                <OrderSummary/>
            </div>
            <ToasNotification/>
        </>
    )
}