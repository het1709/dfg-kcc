import React from 'react';

const StartScreening = ({ startScreening }) => {
    return (
        <div className="start-screening">
            <h4>First time here?</h4>
            <div className="btn">
              <button type="button" onClick={(e) => startScreening()} className="btn btn-warning">Start Screening</button>
            </div>
            <p>You'lll need your parent for this! Make sure to grab one of them before starting this process.</p>
        </div>
    );
}

export default StartScreening;
