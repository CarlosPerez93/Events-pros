type Api = {
  data: object | object[];
  patch: string;
  params: string;
  token: any;
};

type User = {
  email: string;
  username: string;
  password: string;
};

export type { Api, User };
