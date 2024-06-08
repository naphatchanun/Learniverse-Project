import { createContext } from "react";

export const DiffMath2 = [
  [
    {
      _id: {
        $oid: "6661783a6ad4d74a56f03de7",
      },
      label: "test1",
      grade: "8",
      subject: "math",
      level: "3",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question: "สมการ 2y + 3x = 17 เมื่อ x = 2 เเล้ว y มีค่าเท่าใด?",
          choice: [{ 1: "2.5" }, { 2: "3.5" }, { 3: "4.5" }, { 4: "5.5" }],
          answer: "4",
        },
        {
          question: "จงหาผลลัพธ์ของ 3/4 หาร 2/3?",
          choice: [{ 1: "3/8" }, { 2: "8/9" }, { 3: "9/8" }, { 4: "9/4" }],
          answer: "3",
        },
        {
          question: "ราคาขายหลังลด 25% จาก 240 บาท มีราคาเท่าใด?",
          choice: [{ 1: "140" }, { 2: "180" }, { 3: "220" }, { 4: "260" }],
          answer: "2",
        },
        {
          question: "จงหาค่า X จากสมการ 3X+2 = 11?",
          choice: [{ 1: "3" }, { 2: "6" }, { 3: "9" }, { 4: "12" }],
          answer: "1",
        },
        {
          question:
            "ถ้าจำนวนเต็ม a หารด้วย 5 เหลือเศษ 3 เเละจำนวนเต็ม b หารด้วย 5 เหลือเศษ 4 เเล้ว a + b หารด้วย 5 เหลือเศษเท่าใด?",
          choice: [{ 1: "5" }, { 2: "3" }, { 3: "2" }, { 4: "1" }],
          answer: "1",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
