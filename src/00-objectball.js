// Main function providing data about the game, teams, and players
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                // Player data is presented in key-value pairs; the key being the player's name and the value is an object of their stats. Format is important.
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 11,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        }
    }
}

console.log(gameObject());  // returns the object

// Function to retrieve the name of the home team
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}

console.log(homeTeamName());
// logs "Brooklyn Nets"

// Assign the game object to a variable
const game = gameObject();

// Function to get the number of points scored by a specified player
function numPointsScored(playerName) {
    if (game.home.players[playerName]) {
        return game.home.players[playerName].points;
    } else if (game.away.players[playerName]) {
        return game.away.players[playerName].points;
    }
    return "Player not found";
}

function shoeSize(playerName) {
    if (game.home.players[playerName]) {
        return game.home.players[playerName].shoe;
    } else if (game.away.players[playerName]) {
        return game.away.players[playerName].shoe;
    }
    return "Player not found";
}

function teamColors(teamName) {
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    }
    return "Team not found";
}

function teamNames() {
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    if (game.home.teamName === teamName) {
        return Object.values(game.home.players).map(player => player.number);
    } else if (game.away.teamName === teamName) {
        return Object.values(game.away.players).map(player => player.number);
    }
    return "Team not found";
}

function playerStats(playerName) {
    if (game.home.players[playerName]) {
        return game.home.players[playerName];
    } else if (game.away.players[playerName]) {
        return game.away.players[playerName];
    }
    return "Player not found";
}

function bigShoeRebounds() {
    let biggestShoeSize = 0;
    let rebounds;

    for (let player in game.home.players) {
        if (game.home.players[player].shoe > biggestShoeSize) {
            biggestShoeSize = game.home.players[player].shoe;
            rebounds = game.home.players[player].rebounds;
        }
    }

    for (let player in game.away.players) {
        if (game.away.players[player].shoe > biggestShoeSize) {
            biggestShoeSize = game.away.players[player].shoe;
            rebounds = game.away.players[player].rebounds;
        }
    }

    return rebounds;
}


