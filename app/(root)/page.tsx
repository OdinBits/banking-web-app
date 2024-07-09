import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Dashboard = () => {

    const loggedIn = { firstName: 'Nishant', lastName: 'Chavan', email: 'nishantchavan.dev@gmail.com' }

    return (
        <section className='dashboard'>
            <div className="dashboard-content">
                <header className="dashboard-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
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
