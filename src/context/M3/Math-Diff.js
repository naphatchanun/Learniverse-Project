import { createContext } from "react";

export const DiffMath3 = [
  [
    {
      label: "test1",
      grade: "9",
      subject: "math",
      level: "3",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question: "จงหาค่า 2x-3x+1 เมื่อ x = -2?",
          choice: [{ 1: "1" }, { 2: "2" }, { 3: "3" }, { 4: "5" }],
          answer: "3",
        },
        {
          question:
            "ถ้า x เเละ y เป็นจำนวนเต็มบวกที่ทำให้ 2x+3y = 18 เเละ y = 2x-3 ค่าของ x เเละ y คือเท่าใด?",
          choice: [
            { 1: "x=3,y=4" },
            { 2: "x=4,y=3" },
            { 3: "x=2,y=5" },
            { 4: "x=5,y=2" },
          ],
          answer: "1",
        },
        {
          question: "จงหาค่า 4(x−1)=3x+5?",
          choice: [{ 1: "11" }, { 2: "9" }, { 3: "7" }, { 4: "5" }],
          answer: "2",
        },
        {
          question: "ถ้าจำนวนเต็มบวก a+b หารด้วย 7 เหลือเศษเท่าใด?",
          choice: [{ 1: "0" }, { 2: "1" }, { 3: "2" }, { 4: "3" }],
          answer: "1",
        },
        {
          question: "จงหาค่า 2x-3x+1 เมื่อ x = 5",
          choice: [{ 1: "5" }, { 2: "4" }, { 3: "-5" }, { 4: "-4" }],
          answer: "4",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
