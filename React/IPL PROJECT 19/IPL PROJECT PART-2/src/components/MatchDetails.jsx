import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InPageNavigation from "./InPageNavigation";

function MatchDetails() {
    let { matchid } = useParams();

    const [data, setData] = useState(null);
    const [playerData, setPlayerData] = useState(null);

    async function playerDetail(clickedTeamId) {
        const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchid}/team/${clickedTeamId}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e8a079b1a1mshbb599346d3f5166p13bca7jsn7530bdc30834',
                'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const playerResult = await response.json();
            console.log(playerResult);
            setPlayerData(playerResult);
        } catch (error) {
            console.error(error);
        }
    }

    async function FetchMatchDetail() {
        const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchid}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e8a079b1a1mshbb599346d3f5166p13bca7jsn7530bdc30834',
                'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        FetchMatchDetail();
    }, []);

    function handleTeamClick(clickedTeamId) {
        playerDetail(clickedTeamId);
    }

    console.log("playerData raw value:", playerData);
    console.log("is playerData array?", Array.isArray(playerData));
    console.log("keys:", playerData ? Object.keys(playerData) : "playerData is null");

    // Recursively search the response for the group whose category is "playing XI",
    // no matter how deeply it's nested (handles both response shapes we've seen).
    function findCategory(node, categoryName) {
        if (!node) return null;
        if (Array.isArray(node)) {
            for (const item of node) {
                const found = findCategory(item, categoryName);
                if (found) return found;
            }
            return null;
        }
        if (typeof node === "object") {
            if (
                typeof node.category === "string" &&
                node.category.toLowerCase() === categoryName.toLowerCase() &&
                Array.isArray(node.player)
            ) {
                return node.player;
            }
            if (Array.isArray(node.player)) {
                const found = findCategory(node.player, categoryName);
                if (found) return found;
            }
        }
        return null;
    }

    function getPlayingXI(pd) {
        return findCategory(pd, "playing xi") || [];
    }

    const playingXI = getPlayingXI(playerData);

    console.log("playingXI to render:", playingXI);
    console.log("first player object:", playingXI[0]);

    return (
        <>
            {
                !data ? (<h1>loading</h1>) : (
                    <InPageNavigation
                        teams={[data.team1.teamsname, data.team2.teamsname]}
                        teamIds={[data.team1.teamid, data.team2.teamid]}
                        onTeamClick={handleTeamClick}
                    >
                        <div>
                            <h2>{data.team1.teamname}</h2>
                            {
                                playingXI.map((player, i) => (
                                    <p key={i}>{player.name} — {player.role}</p>
                                ))
                            }
                        </div>
                        <div>
                            <h3>{data.team2.teamname}</h3>
                            {
                                playingXI.map((player, i) => (
                                    <p key={i}>{player.name} — {player.role}</p>
                                ))
                            }
                        </div>
                    </InPageNavigation>
                )
            }
        </>
    );
}

export default MatchDetails;