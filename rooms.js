const rooms = {
    dusty_gulch: {
      name: "Dusty Gulch",
      image: "images/Dusty_Gulch_outside.jpg",
      text: "You arrive in Dusty Gulch, a forgotten frontier town.",
      buttons: [
        {
          text: "Enter the Saloon",
          toRoom: "saloon"
        },
        {
          text: "Talk to the Guard",
          toRoom: "town_guard"
        }
      ]
    },
  
    saloon: {
      name: "The Saloon",
      image: "images/saloon.jpeg",
      text: "A skeleton is losing an arm-wrestling match to a cowboy.",
      buttons: [
        {
          text: "Talk to Buck",
          toRoom: "bartender"
        },
        {
          text: "Leave",
          toRoom: "dusty_gulch"
        }
      ]
    }
  };