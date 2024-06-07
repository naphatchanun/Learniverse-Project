import { createContext } from "react";

export const EasyChem6 = [
  [
    {
      _id: {
        $oid: "6661783a6ad4d74a56f03de7",
      },
      label: "test1",
      grade: "12",
      subject: "chem",
      level: "1",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question: "ข้อใดไม่ใช่ประเภทของสารประกอบไฮโดรคาร์บอน?",
          choice: [
            { 1: "อะลิฟาติกไฮโดรคาร์บอน" },
            { 2: "ไซคลิกอะลิฟาติกไฮโดรคาร์บอน" },
            { 3: "อะโรมาติกไฮโดรคาร์บอน" },
            { 4: "อะลิฟาคริกไฮโดรคาร์บอน" },
          ],
          answer: "4",
        },
        {
          question: "ข้อใดไม่ใช่อะลิฟาติกไฮโดรคาร์บอน?",
          choice: [
            {
              1: "เบนซีน",
            },
            {
              2: "แอลเคน",
            },
            { 3: "แอลคีน" },
            {
              4: "แอลไคน์",
            },
          ],
          answer: "1",
        },
        {
          question: "ข้อใดเป็นประโยชน์ของแอลเคน?",
          choice: [
            { 1: "ใช้เป็นเชื้อเพลิงสำหรับทำความร้อน" },
            { 2: "ใช้เป็นแก๊สหุงต้ม" },
            { 3: "ทำน้ำมันหล่อลื่น" },
            { 4: "ไม่มีข้อใดผิด" },
          ],
          Answer: "4",
        },
        {
          question:
            "หมู่แอลคิลที่มีสูตรต่อไปนี้ มีชื่อเรียกว่าอย่างไร -CH2 - CH2 - CH3?",
          choice: [
            { 1: "methyl" },
            { 2: "Ethyl" },
            {
              3: "propyl",
            },
            {
              4: "butyl",
            },
          ],
          Answer: "3",
        },
        {
          question: "ชื่อสามัญของของสารต่อไปนี CH3 - CH2 - CH = CH2 คือข้อใด",
          choice: [
            { 1: "methylene" },
            { 2: "ethylene" },
            { 3: "proylene" },
            { 4: "buthylene" },
          ],
          Answer: "4",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
