import { createContext } from "react";

export const DiffMath6 = [
  [
    {
      _id: {
        $oid: "6661783a6ad4d74a56f03de7",
      },
      label: "test1",
      grade: "12",
      subject: "math",
      level: "1",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question: "จงหาค่าของ 3+5×2?",
          choice: [{ 1: "10" }, { 2: "13" }, { 3: "16" }, { 4: "8" }],
          answer: "2",
        },
        {
          question: "จงหาค่าของ 2x+3=11",
          choice: [{ 1: "3" }, { 2: "4" }, { 3: "5" }, { 4: "6" }],
          answer: "4",
        },
        {
          question: "จงหาผลรวมของเลขจำนวนเต็มตั้งแต่ 1 ถึง 10?",
          choice: [{ 1: "45" }, { 2: "50" }, { 3: "55" }, { 4: "60" }],
          Answer: "3",
        },
        {
          question: "ถ้ารัศมีของวงกลมคือ 7 เซนติเมตร จงหาพื้นที่ของวงกลม?",
          choice: [
            { 1: "49π ตารางเซนติเมตร" },
            { 2: "14π ตารางเซนติเมตร" },
            { 3: "28π ตารางเซนติเมตร" },
            { 4: "21π ตารางเซนติเมตร" },
          ],
          Answer: "1",
        },
        {
          question: "จงหาค่าอินทิเกรตจาก 1ไป 0 ∫(x+2)dx?",
          choice: [{ 1: "1" }, { 2: "2" }, { 3: "2.5" }, { 4: "3" }],
          Answer: "3",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
