export interface IUser {
  id:                string;
  role_id:           string;
  area_id:           string;
  is_active:         boolean;
  email:             string;
  remember_me_token: null;
  created_at:        Date;
  updated_at:        Date;
  area:              IArea;
  role:              IRole;
}

export interface IArea {
  id:         string;
  name:       string;
  created_at: Date;
  updated_at: Date;
}

export interface IRole {
  id:         string;
  name:       string;
  created_at: Date;
  updated_at: Date;
}
