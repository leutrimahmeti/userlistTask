export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email:string;
    status: string;
    image?:string;
    
  };
  


export interface CardData {
    label: string;
    value: number;
    color: string;
    description: string;
    subLabel: string;
    subValue: number;
  };


 export  interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: any;
  }

 export type Column = "firstName" | "email";
