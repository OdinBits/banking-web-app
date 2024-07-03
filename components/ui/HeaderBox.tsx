import React from 'react'

const HeaderBox = ({type, title, subtext, user }: HeaderBoxProps) => {
    return (
        <div className="header-box">
            <h1 className="header-box-title">
                {title}
                {type === 'greeting' && (
                    <span className="text-bankGradient">
                        &nbsp;{user}
                    </span>
                )}
                <p className="header-box-subtext">{subtext}</p>
            </h1>
        </div>
    )
}

export default HeaderBox
