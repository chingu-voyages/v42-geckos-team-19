import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  createSelector,
} from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import { User, AuthErrorCodes } from "firebase/auth";
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  AdditionalInformation,
  signOutUser,
  getCurrentUser,
} from "../../utils/firebase/firebase.utils";
import { SignInPayload, SignUpPayload, UserState } from "./types";
import { RootState } from "../rootReducer";

const getUserSnapshot = async (
  userAuth: User,
  additionalInformation?: AdditionalInformation
) => {
  const userSnapshot = await createUserDocumentFromAuth(
    userAuth,
    additionalInformation
  );
  if (!userSnapshot) return { success: false, data: null };
  return {
    success: true,
    data: { id: userSnapshot.id, ...userSnapshot.data() },
  };
};

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }: SignInPayload, { rejectWithValue }) => {
    try {
      const userCredential = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (!userCredential) return rejectWithValue("No user credential");
      const { user } = userCredential;
      const { success, data } = await getUserSnapshot(user);
      if (!success) return rejectWithValue("No user snapshot");
      return data;
    } catch (error) {
      const errorCode = (error as FirebaseError).code;
      switch (errorCode) {
        case AuthErrorCodes.INVALID_PASSWORD:
          return rejectWithValue("Incorrect password");
        case AuthErrorCodes.USER_DELETED:
          return rejectWithValue("User not found, please sign up");
        case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
          return rejectWithValue("Too many attempts, try again later");
        default:
          return rejectWithValue(errorCode);
      }
    }
  }
);

export const signUp = createAsyncThunk(
  "user/signUp",
  async (
    { email, password, displayName }: SignUpPayload,
    { rejectWithValue }
  ) => {
    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (!userCredential) return rejectWithValue("No user credential");
      const { user } = userCredential;
      const { success, data } = await getUserSnapshot(user, { displayName });
      if (!success) return rejectWithValue("No user snapshot");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signOut = createAsyncThunk(
  "user/signOut",
  async (payload, { rejectWithValue }) => {
    try {
      return signOutUser();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const checkUserSession = createAsyncThunk(
  "user/checkUserSession",
  async (payload, { rejectWithValue }) => {
    try {
      const userAuth = await getCurrentUser();
      if (!userAuth) return rejectWithValue("User not authenticated");
      const { success, data } = await getUserSnapshot(userAuth);
      if (!success) return rejectWithValue("No user snapshot");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const isAuthFailed = isRejected(signIn, signUp, signOut, checkUserSession);
const isAuthPending = isPending(signIn, signUp, signOut, checkUserSession);
const isAuthSuccess = isFulfilled(signIn, signUp, checkUserSession);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signOut.fulfilled, (state) => {
      state.isLoading = false;
      state.currentUser = null;
      state.error = null;
    });
    builder.addMatcher(isAuthPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isAuthSuccess, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.error = null;
    });
    builder.addMatcher(isAuthFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const selectUserSlice = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  selectUserSlice,
  (user) => user.currentUser
);

export const selectUserIsLoading = createSelector(
  selectUserSlice,
  (user) => user.isLoading
);
export const selectError = createSelector(
  selectUserSlice,
  (user) => user.error
);

export default userSlice.reducer;
