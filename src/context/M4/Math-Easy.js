import { createContext } from "react";

export const EasyMath4 = [
  [
    {
      label: "Math for grade 10",
      grade: "10",
      subject: "math",
      level: "1",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question: "ถ้า x+7=15 แล้ว x มีค่าเท่าใด?",
          choice: [{ 1: "5" }, { 2: "6" }, { 3: "7" }, { 4: "8" }],
          answer: "4",
        },
        {
          question: "จงหาผลบวกของมุมภายในของรูปสามเหลี่ยม",
          choice: [
            { 1: "90 องศา" },
            { 2: "180 องศา" },
            { 3: "270 องศา" },
            { 4: "360 องศา" },
          ],
          answer: "2",
        },
        {
          question: "ถ้า y=2x+3 และ x=5 แล้ว y มีค่าเท่าใด?",
          choice: [{ 1: "10" }, { 2: "11" }, { 3: "12" }, { 4: "13" }],
          Answer: "4",
        },
        {
          question: "จงหารากที่สองของ 49?",
          choice: [{ 1: "1" }, { 2: "3" }, { 3: "5" }, { 4: "7" }],
          Answer: "4",
        },
        {
          question: "ถ้าf(x) = x-4x+4 จงหา f(3)",
          choice: [{ 1: "-1" }, { 2: "-3" }, { 3: "-5" }, { 4: "-7" }],
          Answer: "3",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
