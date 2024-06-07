import { createContext } from "react";

export const DiffPhy6 = [
  [
    {
      _id: {
        $oid: "6661783a6ad4d74a56f03de7",
      },
      label: "test1",
      grade: "12",
      subject: "phy",
      level: "3",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question:
            "เส้นลวดโลหะ AB กำลังตกลงมาในแนวดิ่ง ขณะที่เส้นลวดดังกล่าวกำลังเคลื่อนที่เข้าใกล้ขั้วเหนือ(N) ของแม่เหล็กดังรูป อิเล็กตรอนในเส้นลวดโลหะจะมีสภาพอย่างไร?",
          choice: [
            { 1: "เคลื่อนที่จากปลาย A ไป B" },
            { 2: "เคลื่อนที่จากปลาย B ไป A" },
            { 3: "อิเล็กตรอนเคลื่อนที่ไปที่ปลาย A และ B ในสัดส่วนพอ ๆ กัน" },
            {
              4: "อิเล็กตรอนจากปลาย A และ B เคลื่อนที่มารวมกันที่กึ่งกลางเส้นลวด",
            },
          ],
          answer: "1",
        },
        {
          question:
            "แรงระหว่างอนุภาคซึ่งอยู่ภายในนิวเคลียสประกอบด้วยแรงใดบ้าง?",
          choice: [
            { 1: "แรงนิวเคลียร์เท่านั้น" },
            { 2: "แรงนิวเคลียร์และแรงไฟฟ้า" },
            { 3: "แรงนิวเคลียร์และแรงดึงดูดระหว่างมวล" },
            {
              4: "แรงนิวเคลียร์ แรงไฟฟ้า และแรงดึงดูดระหว่างมวล",
            },
          ],
          answer: "4",
        },
        {
          question:
            "วัตถุหนึ่งเคลื่อนที่เป็นวงกลมรัศมี 21 เมตร ครบหนึ่งรอบ การกระจัดมีค่าเท่าใด?",
          choice: [
            { 1: "0 เมตร" },
            { 2: "42 เมตร" },
            { 3: "84 เมตร" },
            { 4: "132 เมตร" },
          ],
          Answer: "1",
        },
        {
          question: "ข้อใดใกล้เคียงกับการเคลื่อนที่แบบโพรเจกไทล์มากที่สุด?",
          choice: [
            { 1: "เครื่องบินขณะบินขึ้นจากสนามบินปริมาณสเกลาร์" },
            { 2: "เด็กเล่นไม้ลื่น" },
            {
              3: "ลูกเทนนิสที่ถูกตีออกไปข้างหน้า",
            },
            {
              4: "เครื่องร่อนขณะร่อนลง",
            },
          ],
          Answer: "2",
        },
        {
          question:
            "ลูกตุ้มนาฬิกากำลังแกว่งกลับไปกลับมาแบบฮาร์มอนิกอย่างง่าย ที่ตำแหน่งต่ำสุดของการแกว่งลูกตุ้มจากนาฬิกามีสภาพการเคลื่อนที่เป็นอย่างไร?",
          choice: [
            { 1: "ความเร็วสูงสุด ความเร่งสูงสุด" },
            { 2: "ความเร็วต่ำสุด ความเร่งสูงสุด" },
            { 3: "ความเร็วสูงสุด ความเร่งต่ำสุด" },
            { 4: "ความเร็วต่ำสุด ความเร่งต่ำสุด" },
          ],
          Answer: "3",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
