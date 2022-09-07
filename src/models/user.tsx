export interface Userinterface {
  Id: number;
  firstName: string;
  lastName: string;
  Gender: string;
  Birthday: string;
  Phone: string;
  province: string;
  city: string;
  address: string;
  Email: string;
  Active: number;
  //   Created_at: string;
  //   Updated_at: string;
  //   Deleted_at: string;
}

export const faKe_data: Userinterface[] = [
  {
    Id: 1,
    firstName: "Thắng",
    lastName: "Phạm",
    Gender: "Male",
    Birthday: "14/6/1999",
    Phone: "0796309286",
    province: "QuangNinh",
    city: "HaLong",
    address: " BaiChay",
    Email: " phamdinhthang11@gmail.com",
    Active: 1,
    //     Created_at: "25/8/2022",
    //     Updated_at: "25/8/2022",
    //     Deleted_at: "25/8/2022",
  },
];

let Id = 2;
export const generateId: () => number = () => {
  Id += 1;
  return Id;
};
