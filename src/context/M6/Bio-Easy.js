import { createContext } from "react";

export const EasyBio6 = [
  [
    {
      label: "test1",
      grade: "12",
      subject: "bio",
      level: "1",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question: "ข้อความใดอธิบายถถึงลิกาเมนต์ได้อย่างถูกต้อง?",
          choice: [
            { 1: "ไม่มีการยืดหยุ่นเเละยืดกล้ามเนื้อกับกระดูก" },
            {
              2: "มีการยืดหยุ่นเเละยืดกล้ามเนื้อกับกระดูก",
            },
            {
              3: "ไม่มีการยืดหยุ่นเเละยืดกระดูกกับกระดูก",
            },
            {
              4: "มีการยืดหยุ่นเเละยืดกระดูกกับกระดูก",
            },
          ],
          answer: "4",
        },
        {
          question: "กล้ามเนื้อยืดติดกับกระดูกโดยอาศัยส่วนใด?",
          choice: [
            { 1: "Tendon" },
            { 2: "Cartilage" },
            { 3: "Ligament" },
            { 4: "Synovial membrance" },
          ],
          answer: "1",
        },
        {
          question:
            "การเคลื่อนที่ของไส้เดือนมีทิศทางที่เเน่นอนต่างกับพยาธิตัวกลมซึ่งได้เเต่งอตัวไปมาเป็นเพราะอะไร?",
          choice: [
            { 1: "ไส้เดือนดินมีขนเเข็งๆสั้นๆช่วยยืดดิน" },
            { 2: "ไส้เดือรดินมีกบล้ามเนื้อทั้งตามยาวเเละตามขวาง" },
            { 3: "ไส้เดือนดินมีอวัยวะรับความรู้สึกเจริญดี" },
            { 4: "ไส้เดือนดินมีลำตัวที่เปียกชื้นอยู่เสมอ" },
          ],
          Answer: "2",
        },
        {
          question: "โครงสร้างคู่ใดทำหน้าที่เหมือนกัน?",
          choice: [
            { 1: "เดือยของไส้เดือนกับทิวป์ฟีดของดาวทะเล" },
            { 2: "เซลล์คอลลาของฟองน้ำกับเฟรมเซลล์" },
            { 3: "เฟลมเซลล์กับนีมาโตซิสต์" },
            { 4: "เซลล์คอลลากับนีมาโตซิสต์" },
          ],
          Answer: "1",
        },
        {
          question: "อูฐสามารถทนอยู่ในทะเลทรายที่ร้อนได้เพราะอะไร?",
          choice: [
            { 1: "เก็บน้ำไว้หนอกบนหลัง" },
            { 2: "ขับความร้อนไปกับเลือดในหนอกบนหลัง" },
            { 3: "ยอมให้อุณหภูมิร่างกายลดลงในเวลากลางคืน" },
            { 4: "มีอัตราส่วนระหว่างพื้นที่ผิวกับลำตัวน้อย" },
          ],
          Answer: "3",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
