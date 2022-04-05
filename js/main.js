const loadMap = () => {
  starter_map = [
    [".", ".", ".", ".", "."],
    [".", "_", "_", "_", "."],
    [".", "_", "_", "_", "."],
    [".", "_", "_", "_", "_"],
    [".", ".", ".", ".", "."],
  ];
  let mapDisplay = document.getElementById(map);
  starter_map.forEach((tile) => {
    switch (tile) {
      case ".":
        let wall = document.createElement("div");
        wall.classList.add("wall");
        mapDisplay.appendChild(wall);
        break;
      case "_":
        let floor = document.createElement("div");
        floor.classList.add("floor");
        mapDisplay.appendChild(floor);
      default:
        break;
    }
  });
};
