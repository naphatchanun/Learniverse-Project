import { createContext } from "react";

export const EasyMath2 = [
  {
    label: "Question 1",
    content: [
      {
        question1: "7+5x2 = ?",
        Ans1: "14",
        Ans2: "17"(true),
        Ans3: "19",
        Ans4: "24",
      },
    ],
  },
  {
    label: "Question 2",
    content: [
      {
        question2: "จงหาค่าของ 12/4+3?",
        Ans1: "3",
        Ans2: "5",
        Ans3: "6"(true),
        Ans4: "7",
      },
    ],
  },
  {
    label: "Question 3",
    content: [
      {
        question2: "ถ้ารัศมีของวงกลมคือ 5 ซม. จงหาความยาวเส้นรอบวง?",
        Ans1: "10.28 ซม.",
        Ans2: "15.70 ซม.",
        Ans3: "25.12 ซม.",
        Ans4: "31.40 ซม."(true),
      },
    ],
  },
  {
    label: "Question 4",
    content: [
      {
        question2:
          "ถ้าความยาวด้านหนึ่งของรูปสี่เหลี่ยมจัตุรัสคือ 6 ซม. พื้นที่ของรูปสี่เหลี่ยมจัตุรัสนี้คือเท่าใด?",
        Ans1: "24 ตร.ซม.",
        Ans2: "30 ตร.ซม.",
        Ans3: "36 ตร.ซม."(true),
        Ans4: "42 ตร.ซม.",
      },
    ],
  },
  {
    label: "Question 5",
    content: [
      {
        question2: "จงหาค่า 5a เมื่อ a = 7",
        Ans1: "20",
        Ans2: "18",
        Ans3: "16",
        Ans4: "14"(true),
      },
    ],
  },
];

export const AuthContext = createContext(null);
