import React from 'react'

const Placeholder = () => {
    return (
        <div className="placeholder">
            <div className="p-banner">

            </div>

            <div className="p-header"></div>
            <div className="p-content"></div>
            <div className="p-content"></div>
            <div className="p-content"></div>
            <div className="p-content"></div>

            <style jsx>{`
        .placeholder {
          max-width: 1200px;
          margin: 20px auto;
        }
        .placeholder > div {
          background: #dbcc1a;
          border-radius: 4px;
          margin: 20px 0;
        }
        .p-banner {
          padding: 12% 0;
        }
        .p-header {
          padding: 15px 0;
          max-width: 500px;
        }
        .p-content {
          padding: 8px 0;
          max-width: 1000px;
        }
      `}</style>
        </div>
    )
}

export default Placeholder
