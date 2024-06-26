import { createContext } from "react";

export const NormalChem5 = [
  [
    {
      label: "test1",
      grade: "11",
      subject: "chem",
      level: "2",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question:
            "มีปฏิกิริยาระหว่างของแข็งกับก๊าซชนิดหนึ่ง ซึ่งสามารถเกิดขึ้นได้ตลอดเวลา ถ้าต้องการทำให้อัตราของการเกิดปฏิกิริยาเพิ่มขึ้น จะต้องทำให้มีการเปลี่ยนแปลงอะไร?",
          choice: [
            { 1: "ลดความดันของก๊าซ" },
            { 2: "ลดอุณหภูมิลง" },
            { 3: "ลดขนาดของของแข็งลง" },
            { 4: " รักษาความกดดันให้คงที่" },
          ],
          answer: "2",
        },
        {
          question:
            "สารในข้อใดทำให้เกิดปฏิกิริยาเคมีที่สังเกตได้จากการเปลี่ยนสีของสารละลาย?",
          choice: [
            {
              1: "สารละลายโพแทสเซียมเปอร์แมงกาเนต และ สารละลายโซเดียมไฮดรอกไซด์",
            },
            {
              2: "สารละลายโซเดียมไฮโดรเจนคาร์บอเนต และ สารละลายกรดไฮโดรคลอริก",
            },
            { 3: "สารละลายกรดไฮโดรคลอริก และ สารละลายโซเดียมไฮดรอกไซด์" },
            {
              4: "สารละลายโซเดียมไทโอซัลเฟต และ สารละลายกรดไฮโดรคลอริก",
            },
          ],
          answer: "1",
        },
        {
          question:
            "การเพิ่มขึ้นของปัจจัยใด ทำให้อัตราการเกิดปฏิกิริยาเคมีช้าลง?",
          choice: [
            { 1: "อุณหภูมิ" },
            { 2: "ตัวหน่วงปฏิกิริยา" },
            { 3: "พื้นที่ผิวของสารตั้งต้น" },
            { 4: "ความเข้มข้นของสารตั้งต้น" },
          ],
          Answer: "2",
        },
        {
          question: "การเปลี่ยนแปลงในข้อใดเป็นการเกิดปฏิกิริยาเคมี?",
          choice: [
            { 1: "การใช้เตาสุริยะต้มน้ำให้เดือด" },
            { 2: "การระเหยของน้ำเมื่อถูกแสงอาทิตย์" },
            {
              3: "การเกิดรุ้งกินน้ำที่ให้แสงสีต่างๆ ออกมา",
            },
            {
              4: "การที่ฟิล์มถ่ายรูปเปลี่ยนสีเมื่อถูกแสงอาทิตย์",
            },
          ],
          Answer: "4",
        },
        {
          question: "การที่ฟิล์มถ่ายรูปเปลี่ยนสีเมื่อถูกแสงอาทิตย์",
          choice: [
            { 1: "การสังเคราะห์แสงของพืช กลิ่นหอมที่เกิดจากยาดับกลิ่น" },
            { 2: "การเกิดหินงอกหินย้อย การเผากระดาษ" },
            { 3: "การจุดพลุดอกไม้ไฟ เมฆรวมตัวเป็นฝน" },
            { 4: "การเกิดสนิมเหล็ก การสูบลมยางล้อรถยนต์" },
          ],
          Answer: "2",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
