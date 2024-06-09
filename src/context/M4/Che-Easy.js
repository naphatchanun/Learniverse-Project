import { createContext } from "react";

export const EasyChem4 = [
  [
    {
      label: "test1",
      grade: "10",
      subject: "chem",
      level: "1",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question:
            "ปฏิกิริยาเคมีในข้อใดต่อไปนี้ทำให้เกิดเเก๊สคาร์บอนไดออกไซด์?",
          choice: [
            { 1: "สังกะสีกับกรดซัลฟิวริก" },
            { 2: "เเคลเซียมคาร์ไบด์กับน้ำ" },
            { 3: "การเผาไหม้ของน้ำมันเบนซิน" },
            { 4: "อะลูมิเนียมกับสารบะบายโซเดียมไฮดรอกไซด์" },
          ],
          answer: "3",
        },
        {
          question:
            "ธาตุฮีเลียม ปรอท เหล็ก เขียนเเทนด้วยสัญลักษณ์เรียงลำดับตามข้อใด?",
          choice: [
            { 1: "H, M, I" },
            { 2: "He, Hg,Fe" },
            { 3: "He, Hg, Ir" },
            { 4: "He, Me, Ir" },
          ],
          answer: "3",
        },
        {
          question: "อะตอมประกอบด้วยอนุภาคมูลฐานใดบ้าง?",
          choice: [
            { 1: "โปรตรอน นิวตรอน" },
            { 2: "อิเล็กตรอน โปรตอน" },
            { 3: "อิเล็กตรอน นิวเคลียส นิวตรอน" },
            { 4: "อิเล็กตรอน โปรตอน นิวตรอน" },
          ],
          Answer: "4",
        },
        {
          question: "น้ำประกอบด้วยธาตุไฮโดรเจน:ออกซิเจน ตามข้อใด?",
          choice: [
            { 1: "2:1 โดยปริมาตร หรือ 8:1 โดยน้ำหนัก" },
            { 2: "2:1 โดยปริมาตร หรือ 1:8 โดยน้ำหนัก" },
            { 3: "1:8 โดยปริมาตร หรือ 1:2 โดยน้ำหนัก" },
            { 4: "1:8 โดยปริมาตร หรือ 2:1 โดยน้ำหนัก" },
          ],
          Answer: "1",
        },
        {
          question: "เเมกนีเซียมไฮดรอกไซด์นำมาใช้ประโยชน์อย่างไร",
          choice: [
            { 1: "ทำเเสงระยิบระยับ" },
            { 2: "ทำหลอดไฟถ่ายรูป" },
            { 3: "ใช้ทาเมื่อเเมลงกัดต่อย" },
            { 4: "ช่วยลดกรดในกระเพาะอาหาร" },
          ],
          Answer: "4",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
