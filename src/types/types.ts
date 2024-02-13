export type Permission = {
  id: number;
  key: string;
  name: string;
};

export type Role = {
  id: number;
  name: string;
  description: string;
  permissions: {
    users: Permission[];
    tabs: Permission[];
    roles: Permission[];
  };
};

export type User = {
  id: number;
  name: string;
  lastName: string;
  agency: string;
  position: string;
  email: string;
  phone: string;
  password: string;
  role: Role;
  token?: string
};

export type UsersArray = User[];
