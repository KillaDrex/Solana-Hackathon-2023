import { atom } from "recoil";

export interface AuthModalState {
  open: boolean;
  view: ModalView;
}

const defaultModalState: AuthModalState = {
  open: false,
  view: "login",
};

export const AuthModalState = atom<AuthModalState>({
  key: "authModalState",
  default: defaultModalState,
});

export type ModalView = "login" | "signup" | "resetPassword";
