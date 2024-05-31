import { createContext } from "react";

export const EasyMath = [
  {
    label: "Question 1",
    content: [
      {
        question1: "ผลบวกของ 3×4 และ 2×2 คือเท่าใด?",
        Ans1: "12",
        Ans2: "14",
        Ans3: "16"(true),
        Ans4: "18",
      },
    ],
  },
  {
    label: "Question 2",
    content: [
      {
        question2: "จงหาค่าของ 2+4×3−6?",
        Ans1: "3",
        Ans2: "4",
        Ans3: "8"(true),
        Ans4: "10",
      },
    ],
  },
  {
    label: "Question 3",
    content: [
      {
        question2:
          "ถ้าความยาวรัศมีของวงกลมคือ 7 ซม. จงหาความยาวเส้นรอบวง (ใช้ π = 22/7)?",
        Ans1: "22 ซม",
        Ans2: "44 ซม"(true),
        Ans3: "66 ซม",
        Ans4: "88 ซม",
      },
    ],
  },
  {
    label: "Question 4",
    content: [
      {
        question2:
          "ถ้าน้ำหนักของลูกบอล 3 ลูก คือ 120 กรัม น้ำหนักเฉลี่ยของลูกบอล 1 ลูกคือเท่าใด?",
        Ans1: "30 กรัม",
        Ans2: "40 กรัม"(true),
        Ans3: "50 กรัม",
        Ans4: "60 กรัม",
      },
    ],
  },
  {
    label: "Question 5",
    content: [
      {
        question2:
          "ถ้าสินค้าราคาปกติ 200 บาท ลดราคา 20% ราคาขายหลังลดราคาคือเท่าใด?",
        Ans1: "140 บาท",
        Ans2: "160 บาท"(true),
        Ans3: "200 บาท",
        Ans4: "220 บาท",
      },
    ],
  },
];

export const AuthContext = createContext(null);
