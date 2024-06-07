import { createContext } from "react";

export const DiffMath3 = [
  [
    {
      _id: {
        $oid: "6661783a6ad4d74a56f03de7",
      },
      label: "test1",
      grade: "10",
      subject: "math",
      level: "2",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question: "ถ้า 3x−4=11 แล้ว x มีค่าเท่าใด?",
          choice: [{ 1: "3" }, { 2: "5" }, { 3: "6" }, { 4: "7" }],
          answer: "2",
        },
        {
          question: "จงหาผลบวกของมุมภายในของรูปห้าเหลี่ยม",
          choice: [
            { 1: "360 องศา" },
            { 2: "540 องศา" },
            { 3: "720 องศา" },
            { 4: "900 องศา" },
          ],
          answer: "2",
        },
        {
          question: "ถ้า y=4x+7 และ x=−1 แล้ว y มีค่าเท่าใด?",
          choice: [{ 1: "1" }, { 2: "3" }, { 3: "-1" }, { 4: "-3" }],
          Answer: "3",
        },
        {
          question: "จงหารากที่สองของ 81?",
          choice: [{ 1: "3" }, { 2: "6" }, { 3: "9" }, { 4: "12" }],
          Answer: "3",
        },
        {
          question: "ถ้า a=2 และ b=3 จงหาค่าของ 2a+3b",
          choice: [{ 1: "10" }, { 2: "11" }, { 3: "12" }, { 4: "13" }],
          Answer: "4",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
