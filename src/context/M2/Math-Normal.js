import { createContext } from "react";

export const NormalMath2 = [
  {
    label: "Question 1",
    content: [
      {
        question1: "จงหาค่าของ 5x-3 เมื่อ x=2?",
        Ans1: "5",
        Ans2: "7"(true),
        Ans3: "9",
        Ans4: "11",
      },
    ],
  },
  {
    label: "Question 2",
    content: [
      {
        question2: "สมการ 2y+3 = 11 ค่าของ y คือเท่าใด?",
        Ans1: "2",
        Ans2: "3",
        Ans3: "4"(true),
        Ans4: "5",
      },
    ],
  },
  {
    label: "Question 3",
    content: [
      {
        question3:
          "ถ้าจำนวนเต็ม a หารด้วย 4 เหลือเศษ 1 เเละจำนวนเต็ม b หารด้วย 4 เหลือเศษ 3 เเล้ว a+b หารด้วย 4 จะเหลือเศษเท่าใด?",
        Ans1: "0"(true),
        Ans2: "1",
        Ans3: "2",
        Ans4: "3",
      },
    ],
  },
  {
    label: "Question 4",
    content: [
      {
        question4: "ถ้า y = 2x+1 เเล้ว y มีค่าเท่าใดเมื่อ x = 3?",
        Ans1: "10",
        Ans2: "9",
        Ans3: "8",
        Ans4: "7"(true),
      },
    ],
  },
  {
    label: "Question 5",
    content: [
      {
        question5: "ถ้าจำนวนเต็ม k เป็นจำนวนเฉพาะ และ 2<k<10 จงหาค่า k",
        Ans1: "5,3,7",
        Ans2: "3,5,7"(true),
        Ans3: "4,5,7",
        Ans4: "5,4,7",
      },
    ],
  },
];

export const AuthContext = createContext(null);
