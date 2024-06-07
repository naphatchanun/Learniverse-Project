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
          question: "จจงหาผลบวกของมุมภายในของรูปห้าเหลี่ยม",
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
  // {
  //   label: "Question 1",
  //   content: [
  //     {
  //       question1: "สมการ 2y-5 = 3y+1 เเล้ว y มีค่าเท่าใด?",
  //       Ans1: "-6",
  //       Ans2: "11",
  //       Ans3: "5",
  //       Ans4: "3",
  //       Answer: "3",
  //     },
  //   ],
  // },
  // {
  //   label: "Question 2",
  //   content: [
  //     {
  //       question2: "กำหนดให้ f(x) = x-1, g(x) = 2f(x) จงหาค่าของ gof(2)?",
  //       Ans1: "0",
  //       Ans2: "1",
  //       Ans3: "2",
  //       Ans4: "3",
  //       Answer: "1",
  //     },
  //   ],
  // },
  // {
  //   label: "Question 3",
  //   content: [
  //     {
  //       question3: "พื้นที่ของวกลมที่มีรัศมี 3 ซม. มีค่าเท่าใด?",
  //       Ans1: "28.26 ตร.ซม.",
  //       Ans2: "18.84 ตร.ซม.",
  //       Ans3: "9.42 ตร.ซม.",
  //       Ans4: "6.28 ตร.ซม.",
  //       Answer: "2",
  //     },
  //   ],
  // },
  // {
  //   label: "Question 4",
  //   content: [
  //     {
  //       question4:
  //         "ถ้า a:b = 2:3 เเละ c:b = 5:2 เเละ 3a-2b+c = 30 เเล้ว ab+c เท่ากับเท่าใด?",
  //       Ans1: "25",
  //       Ans2: "50",
  //       Ans3: "60",
  //       Ans4: "70",
  //       Answer: "1",
  //     },
  //   ],
  // },
  // {
  //   label: "Question 5",
  //   content: [
  //     {
  //       question5:
  //         "จงหาจำนวนเต็มบวกที่มากที่สุดที่หาร 147, 189 และ 273 แล้วมีเศษเหลือเท่ากัน",
  //       Ans1: "6",
  //       Ans2: "21",
  //       Ans3: "42",
  //       Ans4: "84",
  //       Answer: "2",
  //     },
  //   ],
  // },
];

export const AuthContext = createContext(null);
