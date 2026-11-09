console.log("WWWIdle Loading...");

let currentRoom = "dusty_gulch";

function loadRoom(roomID) {
  const room = rooms[roomID];

  if (!room) {
    console.error("Room not found:", roomID);
    return;
  }

  currentRoom = roomID;

  // Display room information
  document.getElementById("roomName").textContent = room.name;
  document.getElementById("roomText").textContent = room.text;

  // Display image
  const image = document.getElementById("roomImage");
  image.src = room.image;
  image.alt = room.name;

  // Generate buttons
  const buttonContainer = document.getElementById("roomButtons");
  buttonContainer.innerHTML = "";

  room.buttons.forEach(buttonData => {
    const button = document.createElement("button");

    button.textContent = buttonData.text;

    button.onclick = () => {
      loadRoom(buttonData.toRoom);
    };

    buttonContainer.appendChild(button);
  });
}

// Start game
loadRoom(currentRoom);