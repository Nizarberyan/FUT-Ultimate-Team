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
    photo: "https://cdn.sofifa.net/players/209/331/25_120.png",
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
    name: "N Golo Kanté",
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
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
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

if (
  !localStorage.getItem("playerDatabase") ||
  localStorage.getItem("playerDatabase") === "[]"
) {
  localStorage.setItem("playerDatabase", JSON.stringify(playerDatabase));
} else {
  playerDatabase = JSON.parse(localStorage.getItem("playerDatabase"));
}
//Formation state
let state = {
  formation: "4-4-2",
  players: [],
  chemistry: 100,
};
document.getElementById("chemistry").textContent = state.chemistry;

let selectedPlayers = JSON.parse(localStorage.getItem("selectedPlayers")) || [];

let playerList = document.getElementById("playerList");

let selectFormation = document.getElementById("formation");
if (selectFormation.value === "4-4-2") {
  document.getElementById("formation433").classList.add("hidden");
  document.getElementById("formation442").classList.remove("hidden");
} else if (selectFormation.value === "4-3-3") {
  document.getElementById("formation442").classList.add("hidden");
  document.getElementById("formation433").classList.remove("hidden");
}
selectFormation.addEventListener("change", (e) => {
  if (selectFormation.value === "4-4-2") {
    window.location.reload();
    document.getElementById("formation433").classList.add("hidden");
    document.getElementById("formation442").classList.remove("hidden");
  } else if (selectFormation.value === "4-3-3") {
    window.location.reload();
    document.getElementById("formation442").classList.add("hidden");
    document.getElementById("formation433").classList.remove("hidden");
  }
});

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

renderAvailablePlayers();
document.getElementById("playerSearch").addEventListener("input", (e) => {
  renderAvailablePlayers(e.target.value);
});

const squadList = document.getElementById("squadList");

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

  // Filter players based on the search term
  const filteredPlayers = playerDatabase.filter(
    (player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.club.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.nationality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  playerList.innerHTML = "";

  filteredPlayers.forEach((player) => {
    let playerCard = document.createElement("div");
    playerCard.className =
      "border rounded-lg p-4 hover:bg-gray-50 cursor-pointer player-card relative";

    // Check if player is a goalkeeper
    const isGoalkeeper = player.position === "GK";

    const statsHTML = isGoalkeeper
      ? `
      ${createStatBar(player.diving, "DIV")}
      ${createStatBar(player.handling, "HAN")}
      ${createStatBar(player.kicking, "KIC")}
      ${createStatBar(player.reflexes, "REF")}
      ${createStatBar(player.speed, "SPD")}
      ${createStatBar(player.positioning, "POS")}
    `
      : `
      ${createStatBar(player.pace, "PAC")}
      ${createStatBar(player.shooting, "SHO")}
      ${createStatBar(player.passing, "PAS")}
      ${createStatBar(player.dribbling, "DRI")}
      ${createStatBar(player.defending, "DEF")}
      ${createStatBar(player.physical, "PHY")}
    `;

    playerCard.innerHTML = `
      <div class="flex items-center space-x-4">
        <img src="${player.photo}" alt="${player.name}" class="w-16 h-16 object-cover">
        <div class="flex-1">
          <div class="flex items-center space-x-2">
            <span class="font-bold">${player.name}</span>
            <img src="${player.flag}" alt="${player.nationality}" class="w-6 h-4">
          </div>
          <div class="flex items-center space-x-2 text-sm text-gray-600">
            <span>${player.position}</span>
            <span>|</span>
            <img src="${player.logo}" alt="${player.club}" class="w-6 h-6">
            <span>${player.club}</span>
          </div>
          <div class="mt-2">
            ${statsHTML}
          </div>
        </div>
        <div class="text-2xl font-bold bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center">
          ${player.rating}
        </div>
      </div>
      <!-- Remove Button -->
      <button 
        class="absolute top-2 left-4 bg-blue-500 text-white text-sm px-2 py-1 rounded hover:bg-blue-600 transition edit-btn"
        title="Edit Player">
        Edit
      </button>
      <button 
        class="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-red-600 transition remove-btn"
        title="Remove Player">
        Remove
      </button>
    `;

    // Add "Remove" button functionality
    playerCard.querySelector(".remove-btn").addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent triggering the card's click event

      // Remove the player from the playerDatabase
      playerDatabase = playerDatabase.filter((p) => p.name !== player.name);
      localStorage.setItem("playerDatabase", JSON.stringify(playerDatabase));

      renderSquad();

      // Re-render the player list
      renderAvailablePlayers(searchTerm);
    });

    // Add "Edit" button functionality
    playerCard.querySelector(".edit-btn").addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent triggering the card's click event
      openEditModal(player);
    });

    // Add "Add to Squad" functionality to the card
    playerCard.addEventListener("click", () => addToSquad(player));
    playerList.appendChild(playerCard);

    playerCard.addEventListener("click", () => {
      selectedPlayers.forEach((selectedPlayer) => {
        let currentFieldSection = null;
        playerLastName = player.name.split(" ")[1];
        console.log(playerLastName);
        const statsHTML = isGoalkeeper
          ? `
        <div>
          <span class="text-yellow-400">${player.diving}</span>
          <span style="font-size: 8px;">DIV</span>
        </div>
        <div>
          <span class="text-yellow-400">${player.handling}</span>
          <span style="font-size: 8px;">HAN</span>
        </div>
        <div>
          <span class="text-yellow-400">${player.reflexes}</span>
          <span style="font-size: 8px;">REF</span>
        </div>
        <div>
          <span class="text-yellow-400">${player.speed}</span>
          <span style="font-size: 8px;">SPD</span>
        </div>
      `
          : `
        <div>
          <span class="text-yellow-400">${player.physical}</span>
          <span style="font-size: 8px;">PHY</span>
        </div>
        <div>
          <span class="text-yellow-400">${player.shooting}</span>
          <span style="font-size: 8px;">SHO</span>
        </div>
        <div>
          <span class="text-yellow-400">${player.passing}</span>
          <span style="font-size: 8px;">PAS</span>
        </div>
        <div>
          <span class="text-yellow-400">${player.dribbling}</span>
          <span style="font-size: 8px;">DRI</span>
        </div>
      `;
        let fieldCard = `<div 
      class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" 
      style="background-image: url('src/assets/badge_ballon_dor-removebg-preview.png');">
      
      <!-- Delete Button -->
      <button 
        class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
        onclick="removeFromSquad('${player.name}')">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <!-- Player Icon -->
      <div class="flex justify-center mt-6">
        <img 
          class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" 
          src="${player.photo}" 
          alt="${player.name}">
      </div>
      
      <!-- Player Last Name -->
      <div 
        class="absolute bottom-[50px] w-full text-center font-bold text-sm text-white pb-1" 
        id="PlayerName">
        ${playerLastName}
      </div>
      
      <!-- Player Statistics -->
      <div class="absolute bottom-6 w-full px-3">
        <div class="grid grid-cols-2 text-center text-xs font-bold">
          ${statsHTML}
        </div>
      </div>
    </div>
  `;
        if (player.name === selectedPlayer.name) {
          if (
            player.position === "CM" ||
            player.position === "CB" ||
            player.position === "CDM"
          ) {
            currentFieldSection = document.querySelector(".Midfield");
          } else if (
            player.position === "LB" ||
            player.position == "RB" ||
            player.position === "CB"
          ) {
            currentFieldSection = document.querySelector(".Defense");
          } else if (
            player.position === "ST" ||
            player.position === "LW" ||
            player.position === "RW"
          ) {
            currentFieldSection = document.querySelector(".Attack");
          } else if (player.position === "GK") {
            currentFieldSection = document.querySelector(".GoalK");
            currentFieldSection.innerHTML = fieldCard;
          }
        }
      });
    });
  });
}

// Open Edit Modal
function createEditPlayerModal() {
  const modalHTML = `
    <div id="editPlayerModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden z-50 overflow-y-auto">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96 mt-[38rem]">

        <h2 class="text-xl font-bold mb-4">Edit Player</h2>
        <div class="space-y-4">
          <div>
            <label for="editName" class="block text-sm font-medium">Name</label>
            <input type="text" id="editName" class="w-full border p-2 rounded">
          </div>
          <div>
            <label for="editClub" class="block text-sm font-medium">Club</label>
            <input type="text" id="editClub" class="w-full border p-2 rounded">
          </div>
          <div>
            <label for="editNationality" class="block text-sm font-medium">Nationality</label>
            <input type="text" id="editNationality" class="w-full border p-2 rounded">
          </div>
          <div>
            <label for="editPosition" class="block text-sm font-medium">Position</label>
            <select id="editPosition" class="w-full border p-2 rounded">
              <option value="GK">Goalkeeper (GK)</option>
              <option value="ST">Striker (ST)</option>
              <option value="LW">Left Wing (LW)</option>
              <option value="RW">Right Wing (RW)</option>
              <option value="CM">Central Midfielder (CM)</option>
              <option value="CDM">Defensive Midfielder (CDM)</option>
              <option value="LB">Left Back (LB)</option>
              <option value="RB">Right Back (RB)</option>
              <option value="CB">Center Back (CB)</option>
            </select>
          </div>
          <div>
            <label for="editPhoto" class="block text-sm font-medium">Photo URL</label>
            <input type="text" id="editPhoto" class="w-full border p-2 rounded">
          </div>
          <div>
            <label for="editFlag" class="block text-sm font-medium">Flag URL</label>
            <input type="text" id="editFlag" class="w-full border p-2 rounded">
          </div>
          <div>
            <label for="editLogo" class="block text-sm font-medium">Logo URL</label>
            <input type="text" id="editLogo" class="w-full border p-2 rounded">
          </div>
        </div>

        <div id="editOutfieldStats" class="space-y-4 mt-4">
          <div>
            <label for="editPace" class="block text-sm font-medium">Pace</label>
            <input type="number" id="editPace" class="w-full border p-2 rounded" min="0" max="99">
          </div>
          <div>
            <label for="editShooting" class="block text-sm font-medium">Shooting</label>
            <input type="number" id="editShooting" class="w-full border p-2 rounded" min="0" max="99">
          </div>
          <div>
            <label for="editPassing" class="block text-sm font-medium">Passing</label>
            <input type="number" id="editPassing" class="w-full border p-2 rounded" min="0" max="99">
          </div>
          <div>
            <label for="editDribbling" class="block text-sm font-medium">Dribbling</label>
            <input type="number" id="editDribbling" class="w-full border p-2 rounded" min="0" max="99">
          </div>
          <div>
            <label for="editDefending" class="block text-sm font-medium">Defending</label>
            <input type="number" id="editDefending" class="w-full border p-2 rounded" min="0" max="99">
          </div>
          <div>
            <label for="editPhysical" class="block text-sm font-medium">Physical</label>
            <input type="number" id="editPhysical" class="w-full border p-2 rounded" min="0" max="99">
          </div>
        </div>

        <div id="editGoalkeeperStats" class="space-y-4 mt-4 hidden">
          <div>
            <label for="editDiving" class="block text-sm font-medium">Diving</label>
            <input type="number" id="editDiving" class="w-full border p-2 rounded" min="0" max="99">
          </div>
          <div>
            <label for="editHandling" class="block text-sm font-medium">Handling</label>
            <input type="number" id="editHandling" class="w-full border p-2 rounded" min="0" max="99">
          </div>
          <div>
            <label for="editKicking" class="block text-sm font-medium">Kicking</label>
            <input type="number" id="editKicking" class="w-full border p-2 rounded" min="0" max="99">
          </div>
          <div>
            <label for="editReflexes" class="block text-sm font-medium">Reflexes</label>
            <input type="number" id="editReflexes" class="w-full border p-2 rounded" min="0" max="99">
          </div>
          <div>
            <label for="editSpeed" class="block text-sm font-medium">Speed</label>
            <input type="number" id="editSpeed" class="w-full border p-2 rounded" min="0" max="99">
          </div>
          <div>
            <label for="editPositioning" class="block text-sm font-medium">Positioning</label>
            <input type="number" id="editPositioning" class="w-full border p-2 rounded" min="0" max="99">
          </div>
        </div>

        <div class="mt-6 flex justify-end space-x-4">
          <button id="closeModalBtn" class="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button id="savePlayerBtn" class="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  `;

  const modalContainer = document.createElement("div");
  modalContainer.innerHTML = modalHTML;
  document.body.appendChild(modalContainer);

  document.getElementById("editPosition").addEventListener("change", (e) => {
    const outfieldStats = document.getElementById("editOutfieldStats");
    const goalkeeperStats = document.getElementById("editGoalkeeperStats");

    if (e.target.value === "GK") {
      outfieldStats.classList.add("hidden");
      goalkeeperStats.classList.remove("hidden");
    } else {
      outfieldStats.classList.remove("hidden");
      goalkeeperStats.classList.add("hidden");
    }
  });

  document.getElementById("closeModalBtn").addEventListener("click", () => {
    document.getElementById("editPlayerModal").classList.add("hidden");
  });
}

createEditPlayerModal();

function openEditModal(player) {
  const modal = document.getElementById("editPlayerModal");
  modal.classList.remove("hidden");

  document.getElementById("editName").value = player.name;
  document.getElementById("editClub").value = player.club;
  document.getElementById("editNationality").value = player.nationality;
  document.getElementById("editPosition").value = player.position;
  document.getElementById("editPhoto").value = player.photo || "";
  document.getElementById("editFlag").value = player.flag || "";
  document.getElementById("editLogo").value = player.logo || "";

  if (player.position === "GK") {
    document.getElementById("editOutfieldStats").classList.add("hidden");
    document.getElementById("editGoalkeeperStats").classList.remove("hidden");

    document.getElementById("editDiving").value = player.diving || 50;
    document.getElementById("editHandling").value = player.handling || 50;
    document.getElementById("editKicking").value = player.kicking || 50;
    document.getElementById("editReflexes").value = player.reflexes || 50;
    document.getElementById("editSpeed").value = player.speed || 50;
    document.getElementById("editPositioning").value = player.positioning || 50;
  } else {
    document.getElementById("editOutfieldStats").classList.remove("hidden");
    document.getElementById("editGoalkeeperStats").classList.add("hidden");

    document.getElementById("editPace").value = player.pace || 50;
    document.getElementById("editShooting").value = player.shooting || 50;
    document.getElementById("editPassing").value = player.passing || 50;
    document.getElementById("editDribbling").value = player.dribbling || 50;
    document.getElementById("editDefending").value = player.defending || 50;
    document.getElementById("editPhysical").value = player.physical || 50;
  }

  document.getElementById("savePlayerBtn").onclick = () => {
    player.name = document.getElementById("editName").value;
    player.club = document.getElementById("editClub").value;
    player.nationality = document.getElementById("editNationality").value;
    player.position = document.getElementById("editPosition").value;
    player.photo = document.getElementById("editPhoto").value;
    player.flag = document.getElementById("editFlag").value;
    player.logo = document.getElementById("editLogo").value;

    if (player.position === "GK") {
      player.diving = parseInt(document.getElementById("editDiving").value, 10);
      player.handling = parseInt(
        document.getElementById("editHandling").value,
        10
      );
      player.kicking = parseInt(
        document.getElementById("editKicking").value,
        10
      );
      player.reflexes = parseInt(
        document.getElementById("editReflexes").value,
        10
      );
      player.speed = parseInt(document.getElementById("editSpeed").value, 10);
      player.positioning = parseInt(
        document.getElementById("editPositioning").value,
        10
      );
      player.rating = Math.round(
        (player.diving +
          player.handling +
          player.kicking +
          player.reflexes +
          player.speed +
          player.positioning) /
          6
      );
    } else {
      player.pace = parseInt(document.getElementById("editPace").value, 10);
      player.shooting = parseInt(
        document.getElementById("editShooting").value,
        10
      );
      player.passing = parseInt(
        document.getElementById("editPassing").value,
        10
      );
      player.dribbling = parseInt(
        document.getElementById("editDribbling").value,
        10
      );
      player.defending = parseInt(
        document.getElementById("editDefending").value,
        10
      );
      player.physical = parseInt(
        document.getElementById("editPhysical").value,
        10
      );
      player.rating = Math.round(
        (player.pace +
          player.shooting +
          player.passing +
          player.dribbling +
          player.defending +
          player.physical) /
          6
      );
    }

    localStorage.setItem("playerDatabase", JSON.stringify(playerDatabase));

    renderAvailablePlayers();

    modal.classList.add("hidden");
  };
}

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

    localStorage.setItem("selectedPlayers", JSON.stringify(selectedPlayers));
  } else {
    alert("You cannot add more than 11 players to the squad.");
  }
}

// Function to create a squad card for a player
function createSquadCard(player) {
  let squadCard = document.createElement("div");

  squadCard.className = "CB-5 player flex flex-col justify-center";

  // Extract the player's last name
  const playerLastName = player.name.split(" ").slice(-1)[0];

  // Determine stats based on the player's position
  const isGoalkeeper = player.position === "GK";
  const statsHTML = isGoalkeeper
    ? `
      <div>
        <span class="text-yellow-400">${player.diving}</span>
        <span style="font-size: 8px;">DIV</span>
      </div>
      <div>
        <span class="text-yellow-400">${player.handling}</span>
        <span style="font-size: 8px;">HAN</span>
      </div>
      <div>
        <span class="text-yellow-400">${player.reflexes}</span>
        <span style="font-size: 8px;">REF</span>
      </div>
      <div>
        <span class="text-yellow-400">${player.speed}</span>
        <span style="font-size: 8px;">SPD</span>
      </div>
    `
    : `
      <div>
        <span class="text-yellow-400">${player.physical}</span>
        <span style="font-size: 8px;">PHY</span>
      </div>
      <div>
        <span class="text-yellow-400">${player.shooting}</span>
        <span style="font-size: 8px;">SHO</span>
      </div>
      <div>
        <span class="text-yellow-400">${player.passing}</span>
        <span style="font-size: 8px;">PAS</span>
      </div>
      <div>
        <span class="text-yellow-400">${player.dribbling}</span>
        <span style="font-size: 8px;">DRI</span>
      </div>
    `;

  squadCard.innerHTML = `
    <div 
      class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" 
      style="background-image: url('src/assets/badge_ballon_dor-removebg-preview.png');">
      
      <!-- Delete Button -->
      <button 
        class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
        onclick="removeFromSquad('${player.name}')">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <!-- Player Icon -->
      <div class="flex justify-center mt-6">
        <img 
          class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" 
          src="${player.photo}" 
          alt="${player.name}">
      </div>
      
      <!-- Player Last Name -->
      <div 
        class="absolute bottom-[50px] w-full text-center font-bold text-sm text-white pb-1" 
        id="PlayerName">
        ${playerLastName}
      </div>
      
      <!-- Player Statistics -->
      <div class="absolute bottom-6 w-full px-3">
        <div class="grid grid-cols-2 text-center text-xs font-bold">
          ${statsHTML}
        </div>
      </div>
    </div>
  `;

  return squadCard;
}

// Function to remove a player from the squad
function removeFromSquad(playerName) {
  // Filter out the removed player
  selectedPlayers = selectedPlayers.filter(
    (player) => player.name !== playerName
  );

  // Re-render the squad list after removal
  renderSquad();
}

function renderSquad() {
  squadList.innerHTML = "";

  // Filter selected players to include only those still in playerDatabase
  const validPlayers = selectedPlayers.filter((player) =>
    playerDatabase.some((dbPlayer) => dbPlayer.name === player.name)
  );

  // Update localStorage with the valid players array
  localStorage.setItem("selectedPlayers", JSON.stringify(validPlayers));

  // Update the squad list to match the valid players
  validPlayers.forEach((player) => {
    let squadCard = createSquadCard(player);
    squadList.appendChild(squadCard);
  });
}

// Initial rendering of the squad
renderSquad();

// Add this to the existing index.js file

// Function to open the custom player modal
function openCustomPlayerModal() {
  const modalOverlay = document.createElement("div");
  modalOverlay.id = "customPlayerModalOverlay";
  modalOverlay.className =
    "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-scroll  ";

  const modal = document.createElement("div");
  modal.className = "bg-white w-11/12 max-w-2xl rounded-lg p-6 ";

  modal.innerHTML = `
    <button id="closeCustomPlayerModal" class="absolute top-4 right-4 text-red-500 hover:text-red-700  ">
      Close
    </button>
    <h2 class="text-2xl font-bold mb-4 mt-16">Add Custom Player</h2>
    
    <div class="grid grid-cols-2 gap-4">
      <input type="text" id="playerName" placeholder="Player Name" class="border rounded p-2" required>
      <select id="playerPosition" class="border rounded p-2">
        <option value="">Select Position</option>
        <option value="ST">Striker (ST)</option>
        <option value="LW">Left Wing (LW)</option>
        <option value="RW">Right Wing (RW)</option>
        <option value="CM">Central Midfielder (CM)</option>
        <option value="CDM">Defensive Midfielder (CDM)</option>
        <option value="CAM">Attacking Midfielder (CAM)</option>
        <option value="LB">Left Back (LB)</option>
        <option value="RB">Right Back (RB)</option>
        <option value="CB">Center Back (CB)</option>
        <option value="GK">Goalkeeper (GK)</option>
      </select>
    </div>
    
    <div class="mt-4">
      <input type="text" id="playerClub" placeholder="Club" class="w-full border rounded p-2 mb-2">
      <input type="text" id="playerClubLogo" placeholder="Club Logo URL (optional)" class="w-full border rounded p-2 mb-2">
      <input type="text" id="playerNationality" placeholder="Nationality" class="w-full border rounded p-2 mb-2">
      <input type="text" id="playerNationalityFlag" placeholder="Nationality Flag URL (optional)" class="w-full border rounded p-2 mb-2">
      <input type="text" id="playerPhoto" placeholder="Photo URL (optional)" class="w-full border rounded p-2 mb-2">
    </div>
    
    <div id="statsContainer" class="mt-4 grid grid-cols-2 gap-4">
      <div id="outfieldStats">
        <div class="mb-2">
          <label>Pace</label>
          <input type="range" id="paceStat" min="0" max="99" value="50" class="w-full">
          <span id="paceValue">50</span>
        </div>
        <div class="mb-2">
          <label>Shooting</label>
          <input type="range" id="shootingStat" min="0" max="99" value="50" class="w-full">
          <span id="shootingValue">50</span>
        </div>
        <div class="mb-2">
          <label>Passing</label>
          <input type="range" id="passingStat" min="0" max="99" value="50" class="w-full">
          <span id="passingValue">50</span>
        </div>
        <div class="mb-2">
          <label>Dribbling</label>
          <input type="range" id="dribblingSTat" min="0" max="99" value="50" class="w-full">
          <span id="dribblingValue">50</span>
        </div>
        <div class="mb-2">
          <label>Defending</label>
          <input type="range" id="defendingStat" min="0" max="99" value="50" class="w-full">
          <span id="defendingValue">50</span>
        </div>
        <div class="mb-2">
          <label>Physical</label>
          <input type="range" id="physicalStat" min="0" max="99" value="50" class="w-full">
          <span id="physicalValue">50</span>
        </div>
      </div>
      
      <div id="goalkeeperStats" class="hidden">
        <div class="mb-2">
          <label>Diving</label>
          <input type="range" id="divingStat" min="0" max="99" value="50" class="w-full">
          <span id="divingValue">50</span>
        </div>
        <div class="mb-2">
          <label>Handling</label>
          <input type="range" id="handleStat" min="0" max="99" value="50" class="w-full">
          <span id="handleValue">50</span>
        </div>
        <div class="mb-2">
          <label>Kicking</label>
          <input type="range" id="kickingStat" min="0" max="99" value="50" class="w-full">
          <span id="kickingValue">50</span>
        </div>
        <div class="mb-2">
          <label>Reflexes</label>
          <input type="range" id="reflexesStat" min="0" max="99" value="50" class="w-full">
          <span id="reflexesValue">50</span>
        </div>
        <div class="mb-2">
          <label>Speed</label>
          <input type="range" id="speedStat" min="0" max="99" value="50" class="w-full">
          <span id="speedValue">50</span>
        </div>
        <div class="mb-2">
          <label>Positioning</label>
          <input type="range" id="positioningStat" min="0" max="99" value="50" class="w-full">
          <span id="positioningValue">50</span>
        </div>
      </div>
    </div>
    
    <button id="createCustomPlayer" class="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
      Create Player
    </button>
  `;
  modalOverlay.appendChild(modal);
  document.body.appendChild(modalOverlay);

  // Close modal functionality
  document
    .getElementById("closeCustomPlayerModal")
    .addEventListener("click", () => {
      document.body.removeChild(modalOverlay);
    });

  // Toggle stats based on player type
  const playerTypeSelect = document.getElementById("playerPosition");
  const outfieldStats = document.getElementById("outfieldStats");
  const goalkeeperStats = document.getElementById("goalkeeperStats");

  playerTypeSelect.addEventListener("change", (e) => {
    if (e.target.value === "GK") {
      outfieldStats.classList.add("hidden");
      goalkeeperStats.classList.remove("hidden");
    } else {
      outfieldStats.classList.remove("hidden");
      goalkeeperStats.classList.add("hidden");
    }
  });

  // Add live stat value display
  document.querySelectorAll("input[type='range']").forEach((rangeInput) => {
    rangeInput.addEventListener("change", (e) => {
      const statValue = e.target.value;
      const statId = e.target.id.replace("Stat", "Value");
      document.getElementById(statId).textContent = statValue;
    });
  });

  // Create custom player
  document
    .getElementById("createCustomPlayer")
    .addEventListener("click", () => {
      const name = document.getElementById("playerName").value;
      const position = document.getElementById("playerPosition").value;
      const club = document.getElementById("playerClub").value;
      const clubLogo =
        document.getElementById("playerClubLogo").value ||
        "https://cdn.sofifa.net/meta/team/3468/240.png";
      const nationality = document.getElementById("playerNationality").value;
      const nationalityFlag =
        document.getElementById("playerNationalityFlag").value ||
        "https://cdn.sofifa.net/flags/gb-eng.png";
      const photo =
        document.getElementById("playerPhoto").value ||
        "https://cdn.sofifa.net/players/252/371/25_120.png";

      let newPlayer;

      if (position === "GK") {
        newPlayer = {
          name,
          position,
          nationality,
          club,
          photo,
          flag: nationalityFlag,
          logo: clubLogo,
          rating: Math.round(
            (parseInt(document.getElementById("divingStat").value) +
              parseInt(document.getElementById("handleStat").value) +
              parseInt(document.getElementById("kickingStat").value) +
              parseInt(document.getElementById("reflexesStat").value) +
              parseInt(document.getElementById("speedStat").value) +
              parseInt(document.getElementById("positioningStat").value)) /
              6
          ),
          diving: parseInt(document.getElementById("divingStat").value),
          handling: parseInt(document.getElementById("handleStat").value),
          kicking: parseInt(document.getElementById("kickingStat").value),
          reflexes: parseInt(document.getElementById("reflexesStat").value),
          speed: parseInt(document.getElementById("speedStat").value),
          positioning: parseInt(
            document.getElementById("positioningStat").value
          ),
        };
      } else {
        newPlayer = {
          name,
          position,
          nationality,
          club,
          photo,
          flag: nationalityFlag,
          logo: clubLogo,
          rating: Math.round(
            (parseInt(document.getElementById("paceStat").value) +
              parseInt(document.getElementById("shootingStat").value) +
              parseInt(document.getElementById("passingStat").value) +
              parseInt(document.getElementById("dribblingSTat").value) +
              parseInt(document.getElementById("defendingStat").value) +
              parseInt(document.getElementById("physicalStat").value)) /
              6
          ),
          pace: parseInt(document.getElementById("paceStat").value),
          shooting: parseInt(document.getElementById("shootingStat").value),
          passing: parseInt(document.getElementById("passingStat").value),
          dribbling: parseInt(document.getElementById("dribblingSTat").value),
          defending: parseInt(document.getElementById("defendingStat").value),
          physical: parseInt(document.getElementById("physicalStat").value),
        };
      }

      // Add player to database and render
      playerDatabase.push(newPlayer);
      localStorage.setItem("playerDatabase", JSON.stringify(playerDatabase));
      renderAvailablePlayers();

      // Close modal
      document.body.removeChild(modalOverlay);
    });
}
// Add event listener to trigger custom player modal
document.addEventListener("DOMContentLoaded", () => {
  // Create a custom button to open the modal
  const customPlayerBtn = document.createElement("button");
  customPlayerBtn.innerHTML =
    "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='12' height='12' x='0' y='0' viewBox='0 0 448 448' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''><g><path d='M408 184H272a8 8 0 0 1-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 0 1-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 0 1 8 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 0 1 8-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0' fill='#FFFFFF' opacity='1' data-original='#FFFFFF' class=''></path></g></svg> Custom Player";
  customPlayerBtn.className =
    "bg-green-500 text-white p-2 rounded ml-2 hover:bg-green-600 flex items-center gap-2";
  customPlayerBtn.addEventListener("click", openCustomPlayerModal);

  // Add the button next to the search input
  const searchContainer = document.querySelector("#playerSearch").parentNode;
  searchContainer.appendChild(customPlayerBtn);
});

// Update the formations database to include explicit position mappings
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

const field = document.getElementById("field");
const formationSelect = document.getElementById("formation");

// Remove a player from the field
function removeFromField(position) {
  // Remove the player card from the DOM
  const playerCard = field.querySelector(`[data-position="${position}"]`);
  if (playerCard) playerCard.remove();

  // Free the position
  delete fieldPositions[position];
}

function renderFieldPlayers() {
  const formationPositions = {
    "4-4-2": {
      CM: [".CenterM1", ".CenterM2", ".LeftM442", ".RightM442"],
      CDM: [".CenterM1", ".CenterM2", ".LeftM442", ".RightM442"],
      LB: ".LeftB442",
      RB: ".RightB442",
      CB: [".CenterB1442", ".CenterB2442"],
      ST: [".Striker1", ".Striker2"],
      LW: [".Striker1", ".Striker2"],
      RW: [".Striker1", ".Striker2"],
      GK: ".GoalK",
    },
    "4-3-3": {
      CM: [".RightM433", ".CenterM", ".LeftM433"],
      CDM: [".RightM433", ".CenterM", ".LeftM433"],
      LB: ".LeftB433",
      RB: ".RightB433",
      CB: [".CenterB1433", ".CenterB2433"],
      ST: ".Striker",
      LW: ".LeftW",
      RW: ".RightW",
      GK: ".GoalK",
    },
  };

  function createPlayerCard(player) {
    const playerLastName = player.name.split(" ")[1];
    const isGoalkeeper = player.position === "GK";

    const statsHTML = isGoalkeeper
      ? `
        <div><span class="text-yellow-400">${player.diving}</span><span style="font-size: 8px;">DIV</span></div>
        <div><span class="text-yellow-400">${player.handling}</span><span style="font-size: 8px;">HAN</span></div>
        <div><span class="text-yellow-400">${player.reflexes}</span><span style="font-size: 8px;">REF</span></div>
        <div><span class="text-yellow-400">${player.speed}</span><span style="font-size: 8px;">SPD</span></div>
      `
      : `
        <div><span class="text-yellow-400">${player.physical}</span><span style="font-size: 8px;">PHY</span></div>
        <div><span class="text-yellow-400">${player.shooting}</span><span style="font-size: 8px;">SHO</span></div>
        <div><span class="text-yellow-400">${player.passing}</span><span style="font-size: 8px;">PAS</span></div>
        <div><span class="text-yellow-400">${player.dribbling}</span><span style="font-size: 8px;">DRI</span></div>
      `;

    return `
      <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" 
           style="background-image: url('src/assets/badge_ballon_dor-removebg-preview.png');">
        <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                onclick="removeFromSquad('${player.name}')">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div class="flex justify-center mt-6">
          <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" 
               src="${player.photo}" 
               alt="${player.name}">
        </div>
        
        <div class="absolute bottom-[50px] w-full text-center font-bold text-sm text-white pb-1">
          ${playerLastName}
        </div>
        
        <div class="absolute bottom-6 w-full px-3">
          <div class="grid grid-cols-2 text-center text-xs font-bold">
            ${statsHTML}
          </div>
        </div>
      </div>
    `;
  }

  function placePlayer(player) {
    const formation = formationSelect.value;
    const positionMap = formationPositions[formation];

    let targetSelectors = positionMap[player.position];

    // Handle cases where multiple positions are possible
    if (Array.isArray(targetSelectors)) {
      for (let selector of targetSelectors) {
        const element = document.querySelector(selector);
        if (!element.classList.contains("occupied")) {
          element.innerHTML = createPlayerCard(player);
          element.classList.add("occupied");
          break;
        }
      }
    } else if (targetSelectors) {
      const element = document.querySelector(targetSelectors);
      element.innerHTML = createPlayerCard(player);
      element.classList.add("occupied");
    }
  }

  // Clear all previous occupied positions
  document.querySelectorAll(".occupied").forEach((el) => {
    el.innerHTML = "";
    el.classList.remove("occupied");
  });

  // Render players
  selectedPlayers.forEach(placePlayer);
}

renderFieldPlayers();
