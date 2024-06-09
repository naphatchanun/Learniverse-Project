import { createContext } from "react";

export const EasyPhy5 = [
  [
    {
      label: "test1",
      grade: "11",
      subject: "phy",
      level: "1",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question:
            "ทรงกลม A มีปริมาณประจุไฟฟ้า -2Q คูลอมบ์ และทรงกลม B ไม่มีประจุไฟฟ้า เมื่อนำทรงกลม มาแตะกัน (โดยทรงกลมทั้งสองมีขนาดเท่ากัน)?",
          choice: [{ 1: "Q" }, { 2: "0" }, { 3: "-Q" }, { 4: "2Q" }],
          answer: "3",
        },
        {
          question:
            "วัตถุ A และ B มีปริมาณประจุไฟฟ้าไม่เท่ากัน แรงที่ A กระทำต่อ B และแรงที่ B กระทำต่อ A มีค่าเท่ากันหรือไม่ เพราะเหตุใด?",
          choice: [
            {
              1: "เท่ากัน เพราะ เป็นแรงในทิศเดียวกัน",
            },
            {
              2: "เท่ากัน เพราะ เป็นแรงกระทำต่อกันและกัน",
            },
            { 3: "ไม่เท่ากัน เพราะ ขนาดประจุต่างกัน" },
            {
              4: "ไม่เท่ากัน เพราะ แรงกระทำคนละวัตถุกัน",
            },
          ],
          answer: "2",
        },
        {
          question:
            "จุดประจุ 1 μC และ 2 μC อยู่ห่างกัน 3 เซนติเมตร แรงกระทำระหว่างประจุไฟฟ้ามีค่าเป็นเท่าใด?",
          choice: [
            { 1: "2 นิวตัน" },
            { 2: "4 นิวตัน" },
            { 3: "9 นิวตัน" },
            { 4: "20 นิวตัน" },
          ],
          Answer: "4",
        },
        {
          question:
            "ถ้าจุดประจุสองอันมีระยะห่างเพิ่มขึ้นเป็น 2 เท่าของเดิม แรงกระทำระหว่างประจุในครั้งหลังจะมีค่าเป็นกี่เท่าของครั้งแรก?",
          choice: [
            { 1: "1/2 เท่า" },
            { 2: "1/4 เท่า" },
            {
              3: "1/8 เท่า",
            },
            {
              4: "1/16 เท่า",
            },
          ],
          Answer: "2",
        },
        {
          question: "สนามไฟฟ้ารอบจุดประจุบวก มีทิศอย่างไร?",
          choice: [
            { 1: "เข้าสู่ศูนย์กลางของโลก" },
            { 2: "เข้าสู่ศูนย์กลางของประจุ" },
            { 3: "ออกจากจุดประจุ" },
            { 4: "ส่วนทางกันแรงโน้มถ่วง" },
          ],
          Answer: "3",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
