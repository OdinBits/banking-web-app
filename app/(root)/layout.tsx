import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedIn = { firstName: 'Nishant', lastName: 'Chavan' }

    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={{
                $id: "",
                email: "",
                userId: "",
                dwollaCustomerUrl: "",
                dwollaCustomerId: "",
                firstName: loggedIn.firstName,
                lastName: loggedIn.lastName,
                address1: "",
                city: "",
                state: "",
                postalCode: "",
                dateOfBirth: "",
                ssn: ""
            }} />

            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image className="" src="/icons/logo.svg" width={30} height={30} alt="menu icon"></Image>
                    <div>
                        <MobileNav user={{
                            $id: "",
                            email: "",
                            userId: "",
                            dwollaCustomerUrl: "",
                            dwollaCustomerId: "",
                            firstName: loggedIn.firstName,
                            lastName: loggedIn.lastName,    
                            address1: "",
                            city: "",
                            state: "",
                            postalCode: "",
                            dateOfBirth: "",
                            ssn: ""
                        }} />
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}
