import { createContext } from "react";

export const EasyMath = [
  {
    label: "Question 1",
    content: [
      {
        question1: "7+5=?",
        Ans1: "10",
        Ans2: "11",
        Ans3: "12"(true),
        Ans4: "13",
      },
    ],
  },
  {
    label: "Question 2",
    content: [
      {
        question2: "ผลลัพธ์ของ 9−4 คือเท่าใด?",
        Ans1: "3",
        Ans2: "4",
        Ans3: "5"(true),
        Ans4: "6",
      },
    ],
  },
  {
    label: "Question 3",
    content: [
      {
        question2:
          "ถ้าต้องการแบ่งแอปเปิ้ล 15 ลูกให้เด็ก 3 คนเท่ากัน เด็กแต่ละคนจะได้แอปเปิ้ลกี่ลูก?",
        Ans1: "3",
        Ans2: "4",
        Ans3: "5"(true),
        Ans4: "6",
      },
    ],
  },
  {
    label: "Question 4",
    content: [
      {
        question2: "4×3=?",
        Ans1: "7",
        Ans2: "10",
        Ans3: "12"(true),
        Ans4: "16",
      },
    ],
  },
  {
    label: "Question 5",
    content: [
      {
        question2: "ถ้ามีเงิน 50 บาท ซื้อขนมราคา 15 บาท จะได้เงินทอนเท่าใด?",
        Ans1: "53",
        Ans2: "50",
        Ans3: "45",
        Ans4: "35"(true),
      },
    ],
  },
];

export const AuthContext = createContext(null);
