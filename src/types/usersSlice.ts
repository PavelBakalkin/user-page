import { requestEnum } from "../constants/api-constants";
import { IAlbums } from "../interfaces/albums";
import { IPosts } from "../interfaces/posts";
import { IUser } from "../interfaces/user";

export type FetchInfoError = {
  message: string;
};

export type UsersState = {
  status: "loading" | "idle";
  error: string | null;
  users: IUser[];
  posts: IPosts[];
  albums: IAlbums[];
};

export type ResponseType = {
  data: any;
  request: requestEnum;
};

export type IInfo = {
  requestName: requestEnum;
  userId?: number;
  path?: "userId" | "id";
};
