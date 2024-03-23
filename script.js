document.getElementById("addWater").addEventListener("click", function () {
  addLayer("water");
});

document.getElementById("addMilk").addEventListener("click", function () {
  addLayer("milk");
});

document.getElementById("addRoohAfza").addEventListener("click", function () {
  addLayer("roohAfza");
});

document.getElementById("mixButton").addEventListener("click", function () {
  mix();
});

document.getElementById("emptyGlass").addEventListener("click", function () {
  emptyGlass();
});

function addLayer(layer) {
  let currentHeight = parseFloat(document.getElementById(layer).style.height) || 0;
  let increment = 33.33;

  if (layer === "roohAfza") {
    let roohAfzaColor = "#de354c";
    let waterHeight = parseFloat(document.getElementById("water").style.height) || 0;
    let milkHeight = parseFloat(document.getElementById("milk").style.height) || 0;

    if (milkHeight >= waterHeight || (milkHeight > 0 && waterHeight === 0)) {
      roohAfzaColor = "#de354c";
    } else {
      roohAfzaColor = "#de354c";
    }

    document.getElementById(layer).style.background = roohAfzaColor;
    increment = 0.5 * 33.33;
  }

  let newHeight = Math.min(currentHeight + increment, 100);
  document.getElementById(layer).style.height = newHeight + "%";
}

function mix() {
  let waterHeight = parseFloat(document.getElementById("water").style.height) || 0;
  let milkHeight = parseFloat(document.getElementById("milk").style.height) || 0;
  let roohAfzaHeight = parseFloat(document.getElementById("roohAfza").style.height) || 0;

  if (roohAfzaHeight === 0) {
    return;
  }

  if (waterHeight >= milkHeight) {
    document.getElementById("water").style.background = "#de354c";
    document.getElementById("milk").style.background = "#de354c";
    document.getElementById("roohAfza").style.background = "#de354c";
  } else {
    document.getElementById("water").style.background = "#fdb8c0";
    document.getElementById("milk").style.background = "#fdb8c0";
    document.getElementById("roohAfza").style.background = "#fdb8c0";
  }
}

function emptyGlass() {
  document.querySelectorAll(".layer").forEach(function (layer) {
    layer.style.height = "0%";
    layer.style.background = "";
  });
  
  // Check if all layers are empty and add the empty class to the jug if true
  let allLayersEmpty = [...document.querySelectorAll(".layer")].every(layer => parseFloat(layer.style.height) === 0);
  if (allLayersEmpty) {
    document.querySelector(".jug").classList.add("empty");
  } else {
    document.querySelector(".jug").classList.remove("empty");
  }
}

