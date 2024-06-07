import { createContext } from "react";

export const NormalMath2 = [
  [
    {
      _id: {
        $oid: "6661783a6ad4d74a56f03de7",
      },
      label: "test1",
      grade: "8",
      subject: "math",
      level: "2",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question: "สมการ 2y+3 = 11 ค่าของ y คือเท่าใด?",
          choice: [{ 1: "2" }, { 2: "3" }, { 3: "4" }, { 4: "5" }],
          answer: "4",
        },
        {
          question:
            "ถ้าจำนวนเต็ม a หารด้วย 4 เหลือเศษ 1 เเละจำนวนเต็ม b หารด้วย 4 เหลือเศษ 3 เเล้ว a+b หารด้วย 4 จะเหลือเศษเท่าใด?",
          choice: [{ 1: "0" }, { 2: "1" }, { 3: "2" }, { 4: "3" }],
          answer: "1",
        },
        {
          question: "ถ้า y = 2x+1 เเล้ว y มีค่าเท่าใดเมื่อ x = 3?",
          choice: [{ 1: "10" }, { 2: "9" }, { 3: "8" }, { 4: "7" }],
          answer: "4",
        },
        {
          question: "ถ้าจำนวนเต็ม k เป็นจำนวนเฉพาะ และ 2<k<10 จงหาค่า k",
          choice: [
            { 1: "1,3,4" },
            { 2: "1,3,5" },
            { 3: "3,5,8" },
            { 4: "3,5,7" },
          ],
          answer: "3",
        },
        {
          question: "จงหาผลบวกของมุมในของรูปสี่เหลี่ยม",
          choice: [
            { 1: "180 องศา" },
            { 2: "270 องศา" },
            { 3: "360 องศา" },
            { 4: "540 องศา" },
          ],
          answer: "3",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
