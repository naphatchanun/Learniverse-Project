import { createContext } from "react";

export const EasyMath2 = [
  [
    {
      label: "test1",
      grade: "8",
      subject: "math",
      level: "1",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question: "7+5x2 = ?",
          choice: [{ 1: "14" }, { 2: "17" }, { 3: "19" }, { 4: "24" }],
          answer: "2",
        },
        {
          question: "จงหาค่าของ 12/4+3?",
          choice: [{ 1: "3" }, { 2: "5" }, { 3: "6" }, { 4: "7" }],
          answer: "3",
        },
        {
          question: "ถ้ารัศมีของวงกลมคือ 5 ซม. จงหาความยาวเส้นรอบวง?",
          choice: [
            { 1: "10.28 ซม." },
            { 2: "15.70 ซม." },
            { 3: "25.12 ซม." },
            { 4: "31.40 ซม." },
          ],
          answer: "4",
        },
        {
          question:
            "ถ้าความยาวด้านหนึ่งของรูปสี่เหลี่ยมจัตุรัสคือ 6 ซม. พื้นที่ของรูปสี่เหลี่ยมจัตุรัสนี้คือเท่าใด?",
          choice: [
            { 1: "24 ตร.ซม." },
            { 2: "30 ตร.ซม." },
            { 3: "36 ตร.ซม." },
            { 4: "42 ตร.ซม." },
          ],
          answer: "3",
        },
        {
          question: "จงหาค่า 5a เมื่อ a = 7",
          choice: [{ 1: "20" }, { 2: "18" }, { 3: "16" }, { 4: "14" }],
          answer: "4",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
