import { createContext } from "react";

export const DiffBio4 = [
  [
    {
      label: "test1",
      grade: "10",
      subject: "bio",
      level: "3",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question: "โครงสร้างใดคือร่องรอยของช่องเหงือกในระยะเอ็มบริโอของคน?",
          choice: [
            { 1: "ช่องหู" },
            { 2: "ท่อบูสเตเชียน" },
            { 3: "ปอด" },
            { 4: "คอหอย" },
          ],
          answer: "2",
        },
        {
          question: "สารใดไม่ใช่เอนไซม์ย่อยอาหาร?",
          choice: [
            { 1: "ทริปซิน" },
            { 2: "ไคโมทริปซิน" },
            { 3: "เอนเทอโรไคเนส" },
            { 4: "คาร์บอกซิเพปทิเดส" },
          ],
          answer: "3",
        },
        {
          question:
            "เซลล์ในอวัยวะใดมีกิจกรรมของเอนไซม์ในวัฏจักรเครบส์สูงที่สุด?",
          choice: [
            { 1: "กล้ามเนื้อ" },
            { 2: "สมอง" },
            { 3: "ตับ" },
            { 4: "ไขกระดูก" },
          ],
          Answer: "2",
        },
        {
          question:
            "ความผิดปกติของออร์เเกเนลล์ใดอาจมีผลทำให้การสร้างผนังเซลล์ผิดปกติได้?",
          choice: [
            { 1: "คลอไรพลาสต์" },
            { 2: "ไมโทคอนเดรีย" },
            { 3: "กลอจิคอมเพลกซ์" },
            { 4: "ไลโซโวม" },
          ],
          Answer: "3",
        },
        {
          question:
            "เมื่อร่างกายเป็นไข มีอุณหภูมิสู.ผิดปกติ เนื่องจากการทำงานของสมองส่วนใด",
          choice: [
            { 1: "ซีริบรัม" },
            { 2: "ซีริเบลลัม" },
            { 3: "ไฮโพธาลามัส" },
            { 4: "ธาลามัส" },
          ],
          Answer: "3",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
