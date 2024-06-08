import { createContext } from "react";

export const EasyMath3 = [
  [
    {
      _id: {
        $oid: "6661783a6ad4d74a56f03de7",
      },
      label: "test1",
      grade: "9",
      subject: "math",
      level: "1",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question: "จงหาค่าของ 2x+5 เมื่อ x = 3 ?",
          choice: [{ 1: "11" }, { 2: "10" }, { 3: "9" }, { 4: "8" }],
          answer: "1",
        },
        {
          question: "สมการ 3y-4 = 2y+1 เเล้ว y มีค่าเท่าใด?",
          choice: [{ 1: "-5" }, { 2: "-3" }, { 3: "5" }, { 4: "3" }],
          answer: "4",
        },
        {
          question: "พื้นที่ของรูปสี่เหลี่ยมจัตุรัสที่มีความยาวด้าน 6 ซม. มีค่าเท่าใด?",
          choice: [{ 1: "12 ตร.ซม." }, { 2: "24 ตร.ซม." }, { 3: "36 ตร.ซม." }, { 4: "48 ตร.ซม." }],
          answer: "3",
        },
        {
          question: "ผลบวกของเลขคู่สามจำนวนเเรกมีค่าเท่าใด?",
          choice: [{ 1: "16" }, { 2: "14" }, { 3: "12" }, { 4: "10" }],
          answer: "3",
        },
        {
          question: "ถ้ามีเงิน 200 บาท ซื้อขนมราคา 35 บาท 4 ชิ้น จะเหลือเงินเท่าใด ?",
          choice: [{ 1: "100" }, { 2: "80" }, { 3: "60" }, { 4: "40" }],
          answer: "4",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
