export interface RandomUserResponse {
  results: {
    id: {
        name: String;
        value: string;
    };
    name: {
      first: string;
      last: string;
    };
    gender: string;
    email: string;
    phone: string;
    picture: {
      thumbnail: string;
      large: string;
    };
    location: {
      city: string;
      country: string;
    };
  }[];
  info: {
    page: number;
    results: number;
    seed: string;
  };
}

export type User = RandomUserResponse['results'][number];