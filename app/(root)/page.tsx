import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Dashboard = () => {

    const loggedIn = { firstName: 'Nishant'}

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
                </header>
            </div>
        </section>
    )
}

export default Dashboard
