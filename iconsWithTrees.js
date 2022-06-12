let loop = (name) => {
  try {
    let split = name.split(".");
    let look = icons;
    for (let i in split) {
      look = look[split.slice(i).join(".")] || look[split[i]];
      if (typeof look == "string") return look;
    }
  } catch (err) {}
};
