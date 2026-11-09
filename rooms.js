const rooms = {
    dusty_gulch: {
      name: "Dusty Gulch",
      image: "images/Dusty_Gulch_outside.jpg",
      text: "You arrive in Dusty Gulch, a forgotten frontier town where tumbleweeds outnumber people. A wooden sign warns visitors to beware of the chickens.",
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
      text: "You enter the local saloon, where a skeleton is losing an arm-wrestling match to a cowboy. The bartender, Buck, notices you and offers you work. Apparently, the town has a problem.",
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
    },


      bartender: {
      name: "Buck the Bartender",
      image: "images/Buck.jpg",
      text: "The bartender of the saloon. he tells you about the lost train and the reward for its recovery.",
      buttons: [
        {
          text: "Leave the Bar",
          toRoom: "saloon"
        },
        {
          text: "Leave",
          toRoom: "dusty_gulch"
        },
        {
          text: "Talk to the skeleton",
          toRoom: "dusty_gulch"
        }
      ]
    },
    skeleton: {
      name: "A defeated skeleton",
      image: "",
      text: "The skeleton ask to a arm-wrestling match.",
      buttons: [
        {
          text: "leave the match",
          toRoom: "saloon"
        },
        {
          text: "Leave",
          toRoom: "dusty_gulch"
        },
        {
          text: "Talk to the skeleton",
          toRoom: "dusty_gulch"
        }
      ]
    }
  };