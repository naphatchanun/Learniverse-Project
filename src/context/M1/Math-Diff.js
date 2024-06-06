import { createContext } from "react";

export const DiffMath = [
  {
    label: "Question 1",
    content: [
      {
        question: "ถ้า x+3 = 2(x-1) เเล้วค่า x เป็นเท่าใด?",
        Ans1: "1",
        Ans2: "2",
        Ans3: "3",
        Ans4: "5",
        Answer: "4",
      },
    ],
  },
  {
    label: "Question 2",
    content: [
      {
        question: "ผลบวกของจำนวนเต็มคู่ 5 จำนวนแรกคือเท่าใด?",
        Ans1: "20",
        Ans2: "30",
        Ans3: "40",
        Ans4: "50",
        Answer: "2",
      },
    ],
  },
  {
    label: "Question 3",
    content: [
      {
        question:
          "ถ้าสามเหลี่ยม ABC มีมุม A = 40 องศา และมุม B = 60 องศา มุม C จะมีขนาดเท่าใด?",
        Ans1: "40 องศา",
        Ans2: "60 องศา",
        Ans3: "80 องศา",
        Ans4: "100 องศา",
        Answer: "3",
      },
    ],
  },
  {
    label: "Question 4",
    content: [
      {
        question:
          "ถ้าจำนวนเต็ม a หารด้วย 4 เหลือเศษ 3 และจำนวนเต็ม b หารด้วย 4 เหลือเศษ 1 แล้ว a+b หารด้วย 4 จะเหลือเศษเท่าใด?",
        Ans1: "0",
        Ans2: "1",
        Ans3: "2",
        Ans4: "3",
        Answer: "1",
      },
    ],
  },
  {
    label: "Question 5",
    content: [
      {
        question: "ถ้าจำนวนเต็ม k เป็นจำนวนเฉพาะ และ 2<k<10 จงหาค่า k",
        Ans1: "3,5,8",
        Ans2: "3,5,7",
        Ans3: "4,5,7",
        Ans4: "5,4,7",
        Answer: "2",
      },
    ],
  },
];

export const AuthContext = createContext(null);
