export type UserData = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: "USER" | "ADMIN"; // Prisma enum type
  liveIn?: string | null;
  streetAddress?: string | null;
  dateOfBirth?: string | null;
  gender?: string | null;
  profilePic?: string | null;
};
