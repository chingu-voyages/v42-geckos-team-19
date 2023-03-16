import { UserData } from "../../utils/firebase/firebase.utils";
import { AppDispatch } from "../../store/rootReducer";

export interface NavContentsProps {
    isSingleLineMenu: boolean;
}

export interface NavMenuProps {
    ItemContainerTag: Function;
    isSingleLineMenu: boolean;
}

export interface LiComponentProps {
    children: React.ReactNode;
}

export interface AccountOptionsProps {
    currentUser: UserData | null;
    dispatch: AppDispatch;
}