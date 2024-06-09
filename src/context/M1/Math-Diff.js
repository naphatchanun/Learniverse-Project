import { createContext } from "react";

export const DiffMath = [
  [
    {
      label: "test1",
      grade: "7",
      subject: "math",
      level: "3",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question: "ถ้า x+3 = 2(x-1) เเล้วค่า x เป็นเท่าใด?",
          choice: [{ 1: "1" }, { 2: "2" }, { 3: "3" }, { 4: "5" }],
          answer: "4",
        },
        {
          question: "ผลบวกของจำนวนเต็มคู่ 5 จำนวนแรกคือเท่าใด?",
          choice: [{ 1: "20" }, { 2: "30" }, { 3: "40" }, { 4: "50" }],
          answer: "2",
        },
        {
          question:
            "ถ้าสามเหลี่ยม ABC มีมุม A = 40 องศา และมุม B = 60 องศา มุม C จะมีขนาดเท่าใด?",
          choice: [
            { 1: "40 องศา" },
            { 2: "60 องศา" },
            { 3: "80 องศา" },
            { 4: "100 องศา" },
          ],
          Answer: "3",
        },
        {
          question:
            "ถ้าจำนวนเต็ม a หารด้วย 4 เหลือเศษ 3 และจำนวนเต็ม b หารด้วย 4 เหลือเศษ 1 แล้ว a+b หารด้วย 4 จะเหลือเศษเท่าใด?",
          choice: [{ 1: "0" }, { 2: "1" }, { 3: "2" }, { 4: "3" }],
          Answer: "1",
        },
        {
          question:
            "ถ้า x และ y เป็นจำนวนเต็มบวก และ x+y=12 แล้วจงหาค่ามากที่สุดของ xy",
          choice: [{ 1: "32" }, { 2: "38" }, { 3: "48" }, { 4: "64" }],
          Answer: "1",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
