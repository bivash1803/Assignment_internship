import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/miniavs";

let svg = createAvatar(style, {
  seed: "custom-seed",
  // ... and other options
  fetch('https://avatars.dicebear.com/api/miniavs/:seed.svg'),
  fetch('https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad')
  .then(res => res.json())
  .then(fetch =>console.log(data))
});
