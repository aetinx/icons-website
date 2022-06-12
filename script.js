let iconsList = document.getElementById("icons");
let notifsList = document.getElementById("notifs");

document.getElementById("iconCount").innerText = Object.keys(icons).length;

let loop = (item, name, prefix) => {
  if (typeof item != "object") {
    let iconName = prefix.length > 0 ? prefix.join(".") + "." + name : name;
    let div = document.createElement("div");
    div.onclick = (event) => {
      try {
        navigator.clipboard.writeText(iconName);
        let notif = document.createElement("span");
        notif.innerText = `Copied "${iconName}" to your clipboard!`;
        notifsList.append(notif);
        setTimeout(() => {
          notif.remove();
        }, 5000)
      } catch (err) {}
    }
    div.append(new Icon(iconName));
    let nameElement = document.createElement("span");
    nameElement.innerText = iconName;
    div.append(nameElement);
    iconsList.append(div);
  } else {
    for (let [key, value] of Object.entries(item)) {
      let newPrefix = [];
      if (prefix) newPrefix.push(name);
      loop(value, key, newPrefix);
    }
  }
}
loop(icons);