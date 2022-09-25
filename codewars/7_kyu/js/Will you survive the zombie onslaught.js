const zombie_shootout = (zombies, range, ammo) => {
  const distance = range * 2;

  if (zombies <= ammo && zombies <= distance) {
    return 'You shot all ' + zombies + ' zombies.';
  } else if (zombies > ammo && zombies > distance) {
    return 'You shot ' + ammo + ' zombies before being eaten: ran out of ammo.';
  } else if (zombies <= ammo && zombies > distance) {
    return 'You shot ' + distance + ' zombies before being eaten: overwhelmed.';
  }
};

console.log(zombie_shootout(3, 10, 10));
console.log(zombie_shootout(100, 8, 200));
console.log(zombie_shootout(50, 10, 8));