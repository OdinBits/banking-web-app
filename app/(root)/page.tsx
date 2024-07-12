import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Dashboard = async () => {

    const loggedIn = await getLoggedInUser();

    return (
        <section className='dashboard'>
            <div className="dashboard-content">
                <header className="dashboard-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.name || 'Guest'}
                        subtext="Access and manage your account and transactions"
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                RECENT TRANSACTIONS 
            </div>

            <RightSideBar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.50 },{ currentBalance: 500.234}]}
            />
        </section>
    )
}

export default Dashboard
