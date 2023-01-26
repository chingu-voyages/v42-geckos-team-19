import { UserData } from "../../utils/firebase/firebase.utils";

export type SignInPayload = {
  email: string;
  password: string;
};

export type SignUpPayload = {
  displayName: string;
} & SignInPayload;

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null | unknown;
};
