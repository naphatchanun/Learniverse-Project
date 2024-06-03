import { createContext } from "react";

export const DiffMath2 = [
  {
    label: "Question 1",
    content: [
      {
        question1: "สมการ 2y + 3x = 17 เมื่อ x = 2 เเล้ว y มีค่าเท่าใด?",
        Ans1: "1.5",
        Ans2: "0",
        Ans3: "3.5",
        Ans4: "5.5"(true),
      },
    ],
  },
  {
    label: "Question 2",
    content: [
      {
        question2: "จงหาผลลัพธ์ของ 3/4 หาร 2/3?",
        Ans1: "3/8",
        Ans2: "8/9",
        Ans3: "9/8"(true),
        Ans4: "9/4",
      },
    ],
  },
  {
    label: "Question 3",
    content: [
      {
        question2: "จงหาค่า X จากสมการ 3X+2 = 11?",
        Ans1: "3"(true),
        Ans2: "6",
        Ans3: "9",
        Ans4: "12",
      },
    ],
  },
  {
    label: "Question 4",
    content: [
      {
        question2:
          "ราคาขายหลังลด 25% 0kd 240 บาท มีราคาเท่าใด?",
        Ans1: "140",
        Ans2: "180"(true),
        Ans3: "220",
        Ans4: "260",
      },
    ],
  },
  {
    label: "Question 5",
    content: [
      {
        question2: "ถ้าจำนวนเต็ม a หารด้วย 5 เหลือเศษ 3 เเละจำนวนเต็ม b หารด้วย 5 เหลือเศษ 4 เเล้ว a + b หารด้วย 5 เหลือเศษเท่าใด?",
        Ans1: "5",
        Ans2: "3",
        Ans3: "2"(true),
        Ans4: "1",
      },
    ],
  },
];

export const AuthContext = createContext(null);
