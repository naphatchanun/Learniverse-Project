import { createContext } from "react";

export const NormalMath3 = [
  [
    {
      label: "Math for grade 9",
      grade: "9",
      subject: "math",
      level: "2",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question: "สมการ 4y-7 = 5y+2 เเล้ว y มีค่าเท่าใด?",
          choice: [{ 1: "-9" }, { 2: "-2" }, { 3: "9" }, { 4: "2" }],
          answer: "1",
        },
        {
          question:
            "พื้นที่ของสามเหลี่ยมที่มีฐาน 8 ซม. เเละสูง 5 ซม. มีค่าเท่าใด?",
          choice: [
            { 1: "10 ซม." },
            { 2: "20 ซม." },
            { 3: "30 ซม." },
            { 4: "40 ซม." },
          ],
          answer: "2",
        },
        {
          question: "จงหาค่าของ 4a-7 เมื่อ a = 3 ?",
          choice: [{ 1: "5" }, { 2: "7" }, { 3: "-5" }, { 4: "-7" }],
          Answer: "3",
        },
        {
          question:
            "ถ้าผลบวกของตัวเลขสองจำนวนคือ 15 และผลต่างของตัวเลขสองจำนวนนั้นคือ 3 จงหาตัวเลขทั้งสอง?",
          choice: [
            { 1: "10 เเละ 5" },
            { 2: "9 เเละ 6" },
            { 3: "8 เเละ 7" },
            { 4: "7 เเละ -2" },
          ],
          Answer: "2",
        },
        {
          question:
            "ถ้ามีเงิน 500 บาท ซื้อน้ำอัดลมราคา 15 บาทต่อขวด ซื้อทั้งหมด 12 ขวด จะเหลือเงินเท่าใด?",
          choice: [{ 1: "180" }, { 2: "220" }, { 3: "280" }, { 4: "320" }],
          Answer: "4",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
