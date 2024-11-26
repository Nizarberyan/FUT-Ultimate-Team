//Player Database
let playerDatabase = [
  {
    name: "Lionel Messi",
    photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
    position: "RW",
    nationality: "Argentina",
    flag: "https://cdn.sofifa.net/flags/ar.png",
    club: "Inter Miami",
    logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
    rating: 93,
    pace: 85,
    shooting: 92,
    passing: 91,
    dribbling: 95,
    defending: 35,
    physical: 65,
  },
  {
    name: "Cristiano Ronaldo",
    photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
    position: "ST",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Al Nassr",
    logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
    rating: 91,
    pace: 84,
    shooting: 94,
    passing: 82,
    dribbling: 87,
    defending: 34,
    physical: 77,
  },
  {
    name: "Kevin De Bruyne",
    photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
    position: "CM",
    nationality: "Belgium",
    flag: "https://cdn.sofifa.net/flags/be.png",
    club: "Manchester City",
    logo: "https://cdn.sofifa.net/meta/team/9/120.png",
    rating: 91,
    pace: 74,
    shooting: 86,
    passing: 93,
    dribbling: 88,
    defending: 64,
    physical: 78,
  },
  {
    name: "Kylian Mbappé",
    photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 92,
    pace: 97,
    shooting: 89,
    passing: 80,
    dribbling: 92,
    defending: 39,
    physical: 77,
  },
  {
    name: "Virgil van Dijk",
    photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
    position: "CB",
    nationality: "Netherlands",
    flag: "https://cdn.sofifa.net/flags/nl.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 90,
    pace: 75,
    shooting: 60,
    passing: 70,
    dribbling: 72,
    defending: 92,
    physical: 86,
  },
  {
    name: "Antonio Rudiger",
    photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
    position: "CB",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 82,
    shooting: 55,
    passing: 73,
    dribbling: 70,
    defending: 86,
    physical: 86,
  },
  {
    name: "Neymar Jr",
    photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 90,
    pace: 91,
    shooting: 83,
    passing: 86,
    dribbling: 94,
    defending: 37,
    physical: 61,
  },
  {
    name: "Mohamed Salah",
    photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
    position: "RW",
    nationality: "Egypt",
    flag: "https://cdn.sofifa.net/flags/eg.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 89,
    pace: 93,
    shooting: 87,
    passing: 81,
    dribbling: 90,
    defending: 45,
    physical: 75,
  },
  {
    name: "Joshua Kimmich",
    photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
    position: "CM",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 89,
    pace: 70,
    shooting: 75,
    passing: 88,
    dribbling: 84,
    defending: 84,
    physical: 81,
  },
  {
    name: "Jan Oblak",
    photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
    position: "GK",
    nationality: "Slovenia",
    flag: "https://cdn.sofifa.net/flags/si.png",
    club: "Atletico Madrid",
    logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
    rating: 91,
    diving: 89,
    handling: 90,
    kicking: 78,
    reflexes: 92,
    speed: 50,
    positioning: 88,
  },
  {
    name: "Luka Modrić",
    photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
    position: "CM",
    nationality: "Croatia",
    flag: "https://cdn.sofifa.net/flags/hr.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 74,
    shooting: 78,
    passing: 89,
    dribbling: 90,
    defending: 72,
    physical: 65,
  },
  {
    name: "Vinicius Junior",
    photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 89,
    pace: 91,
    shooting: 88,
    passing: 85,
    dribbling: 94,
    defending: 39,
    physical: 61,
  },
  {
    name: "Brahim Diáz",
    photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
    position: "LW",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 82,
    pace: 85,
    shooting: 74,
    passing: 78,
    dribbling: 85,
    defending: 31,
    physical: 56,
  },
  {
    name: "Karim Benzema",
    photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Al-Ittihad",
    logo: "https://cdn.sofifa.net/meta/team/476/120.png",
    rating: 90,
    pace: 77,
    shooting: 90,
    passing: 83,
    dribbling: 88,
    defending: 40,
    physical: 78,
  },
  {
    name: "Erling Haaland",
    photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    position: "ST",
    nationality: "Norway",
    flag: "https://cdn.sofifa.net/flags/no.png",
    club: "Manchester City",
    logo: "https://cdn.sofifa.net/meta/team/9/120.png",
    rating: 91,
    pace: 89,
    shooting: 94,
    passing: 65,
    dribbling: 80,
    defending: 45,
    physical: 88,
  },
  {
    name: "N'Golo Kanté",
    photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
    position: "CDM",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Al-Ittihad",
    logo: "https://cdn.sofifa.net/meta/team/476/120.png",
    rating: 87,
    pace: 77,
    shooting: 66,
    passing: 75,
    dribbling: 82,
    defending: 88,
    physical: 82,
  },
  {
    name: "Alphonso Davies",
    photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
    position: "LB",
    nationality: "Canada",
    flag: "https://cdn.sofifa.net/flags/ca.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 84,
    pace: 96,
    shooting: 68,
    passing: 77,
    dribbling: 82,
    defending: 76,
    physical: 77,
  },
  {
    name: "Yassine Bounou",
    photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
    position: "GK",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 84,
    diving: 81,
    handling: 82,
    kicking: 77,
    reflexes: 86,
    speed: 38,
    positioning: 83,
  },
  {
    name: "Bruno Fernandes",
    photo: "https://cdn.sofifa.net/players/212/198/25_120.png",
    position: "CM",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 88,
    pace: 75,
    shooting: 85,
    passing: 89,
    dribbling: 84,
    defending: 69,
    physical: 77,
  },
  {
    name: "Jadon Sancho",
    photo: "https://cdn.sofifa.net/players/233/049/25_120.png",
    position: "LW",
    nationality: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 84,
    pace: 85,
    shooting: 74,
    passing: 78,
    dribbling: 88,
    defending: 34,
    physical: 63,
  },
  {
    name: "Trent Alexander-Arnold",
    photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
    position: "RB",
    nationality: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    club: "Liverpool",
    rating: 87,
    pace: 76,
    shooting: 66,
    passing: 89,
    dribbling: 80,
    defending: 79,
    physical: 71,
  },
  {
    name: "Achraf Hakimi",
    photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
    position: "RB",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/591/120.png",
    rating: 84,
    pace: 91,
    shooting: 76,
    passing: 80,
    dribbling: 80,
    defending: 75,
    physical: 78,
  },
  {
    name: "Youssef En-Nesyri",
    photo: "https://cdn.sofifa.net/players/235/410/25_120.png",
    position: "ST",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Fenerbahçe",
    logo: "https://cdn.sofifa.net/meta/team/88/120.png",
    rating: 83,
    pace: 82,
    shooting: 82,
    passing: 63,
    dribbling: 77,
    defending: 36,
    physical: 80,
  },
  {
    name: "Noussair Mazraoui",
    photo: "https://cdn.sofifa.net/players/236/401/25_120.png",
    position: "LB",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 81,
    pace: 78,
    shooting: 66,
    passing: 77,
    dribbling: 83,
    defending: 77,
    physical: 71,
  },
  {
    name: "Ismael Saibari",
    photo: "https://cdn.sofifa.net/players/259/480/25_120.png",
    position: "CM",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "PSV",
    logo: "https://cdn.sofifa.net/meta/team/682/120.png",
    rating: 83,
    pace: 89,
    shooting: 78,
    passing: 80,
    dribbling: 86,
    defending: 55,
    physical: 84,
  },
  {
    name: "Gianluigi Donnarumma",
    photo: "https://cdn.sofifa.net/players/230/621/25_120.png",
    position: "GK",
    nationality: "Italy",
    flag: "https://cdn.sofifa.net/flags/it.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/591/120.png",
    rating: 89,
    diving: 88,
    handling: 84,
    kicking: 75,
    reflexes: 90,
    speed: 50,
    positioning: 85,
  },
];
//formations Database
const formations = [
  {
    "4-4-2": {
      GK: { x: 50, y: 90 },
      LB: { x: 20, y: 70 },
      CB1: { x: 35, y: 70 },
      CB2: { x: 65, y: 70 },
      RB: { x: 80, y: 70 },
      LM: { x: 20, y: 45 },
      CM1: { x: 35, y: 45 },
      CM2: { x: 65, y: 45 },
      RM: { x: 80, y: 45 },
      ST1: { x: 35, y: 20 },
      ST2: { x: 65, y: 20 },
    },
    "4-3-3": {
      GK: { x: 50, y: 90 },
      LB: { x: 20, y: 70 },
      CB1: { x: 35, y: 70 },
      CB2: { x: 65, y: 70 },
      RB: { x: 80, y: 70 },
      CM1: { x: 35, y: 45 },
      CM2: { x: 50, y: 45 },
      CM3: { x: 65, y: 45 },
      LW: { x: 20, y: 20 },
      ST: { x: 50, y: 20 },
      RW: { x: 80, y: 20 },
    },
  },
];

//Formation state
let state = {
  formation: "4-4-2",
  players: [],
  chemistry: 0,
};

let playerList = document.getElementById("playerList");

let selectFormation = document.getElementById("formation");

// Function to create a player stats bar
function createStatBar(value, label) {
  return `
        <div class="flex items-center text-xs mb-1">
            <span class="w-12">${label}</span>
            <div class="flex-1 bg-gray-200 h-2 rounded-full ml-2">
                <div class="bg-green-600 h-full rounded-full" style="width: ${value}%"></div>
            </div>
            <span class="w-8 text-right">${value}</span>
        </div>
    `;
}

// Function to create a player card
function renderAvailablePlayers(searchTerm = "") {
  const playerList = document.getElementById("playerList");
  const filteredPlayers = playerDatabase.filter(
    (player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.club.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.nationality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  playerDatabase.forEach((player) => {
    let PlayerCard = document.createElement("div");
    PlayerCard.innerHTML = `
        <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" 
             >
            <div class="flex items-center space-x-4">
                <img src="${player.photo}" alt="${
      player.name
    }" class="w-16 h-16 object-cover">
                <div class="flex-1">
                    <div class="flex items-center space-x-2">
                        <span class="font-bold">${player.name}</span>
                        <img src="${player.flag}" alt="${
      player.nationality
    }" class="w-6 h-4">
                    </div>
                    <div class="flex items-center space-x-2 text-sm text-gray-600">
                        <span>${player.position}</span>
                        <span>|</span>
                        <img src="${player.logo}" alt="${
      player.club
    }" class="w-6 h-6">
                        <span>${player.club}</span>
                    </div>
                    <div class="mt-2">
                        ${createStatBar(player.pace, "PAC")}
                        ${createStatBar(player.shooting, "SHO")}
                        ${createStatBar(player.passing, "PAS")}
                        ${createStatBar(player.dribbling, "DRI")}
                        ${createStatBar(player.defending, "DEF")}
                        ${createStatBar(player.physical, "PHY")}
                    </div>
                </div>
                <div class="text-2xl font-bold bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center">
                    ${player.rating}
                </div>
            </div>
        </div>
    `;
    PlayerCard.className = "player-card";
    playerList.appendChild(PlayerCard);
  });
}
renderAvailablePlayers();
document.getElementById("playerSearch").addEventListener("input", (e) => {
  renderAvailablePlayers(e.target.value);
});

const squadList = document.getElementById("squadList");
console.log(playerList);
// Function to create a player stats bar
function createStatBar(value, label) {
  return `
          <div class="flex items-center text-xs mb-1">
              <span class="w-12">${label}</span>
              <div class="flex-1 bg-gray-200 h-2 rounded-full ml-2">
                  <div class="bg-green-600 h-full rounded-full" style="width: ${value}%"></div>
              </div>
              <span class="w-8 text-right">${value}</span>
          </div>
      `;
}

// Function to render player cards
function renderAvailablePlayers(searchTerm = "") {
  const playerList = document.getElementById("playerList");
  const filteredPlayers = playerDatabase.filter(
    (player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.club.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.nationality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Clear the player list before rendering
  playerList.innerHTML = "";

  filteredPlayers.forEach((player) => {
    let playerCard = document.createElement("div");
    playerCard.className =
      "border rounded-lg p-4 hover:bg-gray-50 cursor-pointer player-card";
    playerCard.innerHTML = `
          <div class="flex items-center space-x-4">
              <img src="${player.photo}" alt="${
      player.name
    }" class="w-16 h-16 object-cover">
              <div class="flex-1">
                  <div class="flex items-center space-x-2">
                      <span class="font-bold">${player.name}</span>
                      <img src="${player.flag}" alt="${
      player.nationality
    }" class="w-6 h-4">
                  </div>
                  <div class="flex items-center space-x-2 text-sm text-gray-600">
                      <span>${player.position}</span>
                      <span>|</span>
                      <img src="${player.logo}" alt="${
      player.club
    }" class="w-6 h-6">
                      <span>${player.club}</span>
                  </div>
                  <div class="mt-2">
                      ${createStatBar(player.pace, "PAC")}
                      ${createStatBar(player.shooting, "SHO")}
                      ${createStatBar(player.passing, "PAS")}
                      ${createStatBar(player.dribbling, "DRI")}
                      ${createStatBar(player.defending, "DEF")}
                      ${createStatBar(player.physical, "PHY")}
                  </div>
              </div>
              <div class="text-2xl font-bold bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center">
                  ${player.rating}
              </div>
          </div>
      `;

    // Add event listener for click to add to squad
    playerCard.addEventListener("click", () => addToSquad(player));

    playerList.appendChild(playerCard);
  });
}

renderAvailablePlayers();

// Function to handle player search input
document.getElementById("playerSearch").addEventListener("input", (e) => {
  renderAvailablePlayers(e.target.value);
});

let selectedPlayers = [];
selectedPlayers = JSON.parse(localStorage.getItem("selectedPlayers")) || [];

// Function to add player to the squad
// Function to add player to the squad
function addToSquad(player) {
    if (selectedPlayers.length < 11) {
      // Check if player is already in squad
      if (selectedPlayers.some((p) => p.name === player.name)) {
        alert("Player already in the squad.");
        return;
      }
  
      // Add player to squad
      selectedPlayers.push(player);
  
      // Create a squad card for the player
      let squadCard = createSquadCard(player);
  
      // Append the new squad card to the list
      squadList.appendChild(squadCard);
  
      // Store the updated squad in localStorage
      localStorage.setItem("selectedPlayers", JSON.stringify(selectedPlayers));
    } else {
      alert("You cannot add more than 11 players to the squad.");
    }
  }
  
  // Function to create a squad card for a player
  function createSquadCard(player) {
    let squadCard = document.createElement("div");
    squadCard.className = "border rounded-lg p-4 mb-2 flex items-center space-x-4";
    squadCard.innerHTML = `
      <img src="${player.photo}" alt="${player.name}" class="w-16 h-16 object-cover">
      <div class="flex-1">
        <div class="flex items-center space-x-2">
          <span class="font-bold">${player.name}</span>
          <img src="${player.flag}" alt="${player.nationality}" class="w-6 h-4">
          <img src="${player.logo}" alt="${player.club}" class="w-6 h-6">
        </div>
        <div class="text-sm text-gray-600">
          ${player.position} | ${player.club}
        </div>
      </div>
      <button class="text-red-500" onclick="removeFromSquad('${player.name}')">Remove</button>
    `;
    return squadCard;
  }
  
  // Function to remove a player from the squad
  function removeFromSquad(playerName) {
    // Filter out the removed player
    selectedPlayers = selectedPlayers.filter((player) => player.name !== playerName);
  
    // Re-render the squad list after removal
    renderSquad();
  }
  
  // Function to render the squad list
  function renderSquad() {
    squadList.innerHTML = ""; // Clear the squad list
    selectedPlayers.forEach((player) => {
      // Create and append squad cards for all players in the squad
      let squadCard = createSquadCard(player);
      squadList.appendChild(squadCard);
    });
  }
  
  // Initial rendering of the squad
  renderSquad();
  