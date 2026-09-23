import { useState } from "react";

function InPageNavigation({ teams, teamIds, children, onTeamClick }) {
    const [Index, setIndex] = useState(0);

    return (
        <div>
            {
                teams.map((name, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setIndex(i);
                            onTeamClick(teamIds[i]);
                        }}
                    >
                        {name}
                    </button>
                ))
            }
            {children[Index]}
        </div>
    );
}

export default InPageNavigation;