import { createContext } from "react";

export const EasyMath1 = [
  [
    {
      _id: {
        $oid: "6661783a6ad4d74a56f03de7",
      },
      label: "test1",
      grade: "7",
      subject: "math",
      level: "1",
      totalmark: "5",
      duration: "180000",
      createBy: "Learniverse",
      content: [
        {
          question: "7+5=?",
          choice: [
            {
              1: "11",
            },
            {
              2: "12",
            },
            {
              3: "13",
            },
            {
              4: "15",
            },
          ],
          answer: "2",
        },
        {
          question: "ผลลัพธ์ของ 9−4 คือเท่าใด",
          choice: [
            {
              1: "0",
            },
            {
              2: "10",
            },
            {
              3: "11",
            },
            {
              4: "13",
            },
          ],
          answer: "4",
        },
        {
          question:
            "ถ้าต้องการแบ่งแอปเปิ้ล 15 ลูกให้เด็ก 3 คนเท่ากัน เด็กแต่ละคนจะได้แอปเปิ้ลกี่ลูก?",
          choice: [
            {
              1: "3",
            },
            {
              2: "4",
            },
            {
              3: "5",
            },
            {
              4: "6",
            },
          ],
          answer: "3",
        },
        {
          question: "4×3=?",
          choice: [
            {
              1: "8",
            },
            {
              2: "10",
            },
            {
              3: "12",
            },
            {
              4: "14",
            },
          ],
          answer: "3",
        },
        {
          question: "ถ้ามีเงิน 50 บาท ซื้อขนมราคา 15 บาท จะได้เงินทอนเท่าใด?",
          choice: [
            {
              1: "53",
            },
            {
              2: "50",
            },
            {
              3: "45",
            },
            {
              4: "35",
            },
          ],
          answer: "4",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
