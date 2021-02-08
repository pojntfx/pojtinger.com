interface Person {
  name: string;
  path: string;
  remoteLink?: string;
  avatarLink: string;
  username: string;
  followLink: string;
  emailLink: string;
}

import constants from "./constants.json";

export { constants, Person };
