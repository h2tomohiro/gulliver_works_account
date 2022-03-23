import { Profile } from "./Profile";

export interface Account {
  id: string;
  email: string;
  profile?: Profile;
}
