import { createContext } from "react";

export const NormalPhy6 = [
  [
    {
      label: "test1",
      grade: "12",
      subject: "phy",
      level: "2",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question:
            "เหตุใดโรงไฟฟ้านิวเคลียร์ในปัจจุบันจึงต้องสร้างใกล้แหล่งน้ำธรรมชาติ?",
          choice: [
            { 1: "เพื่อให้มีน้ำเพียงพอต่อการดับไฟ กรณีไฟไหม้เตาปฏิกรณ์ปรมาณู" },
            {
              2: "ใช้น้ำปริมาณมากในการถ่ายเทความร้อนจากเตาปฏิกรณ์ไปยังกังหันไอน้ำ",
            },
            {
              3: "ใช้น้ำปริมาณมากในการทำให้เกิดปฏิกิริยาลูกโซ่ของปฏิกิริยานิวเคลียร์",
            },
            { 4: "ต้องใช้นิวตรอนจำนวนมากจากน้ำในการเริ่มปฏิกิริยานิวเคลียร์" },
          ],
          answer: "2",
        },
        {
          question:
            "ข้อใดต่อไปนี้เป็นการเคลื่อนที่ที่มีขนาดของการกระจัดน้อยที่สุด?",
          choice: [
            {
              1: "เดินไปทางขวา 10 เมตร แล้วเดินย้อนกลับมาทางซ้าย 2 เมตร",
            },
            {
              2: "เดินไปทางขวาด้วยความเร็วคงที่ 3 เมตรต่อวินาที เป็นเวลา 4 วินาที",
            },
            {
              3: "เดินไปทางซ้ายด้วยความเร็วคงที่ 4 เมตรต่อวินาที เป็นเวลา3 วินาที",
            },
            {
              4: "ทั้งสามข้อมีขนาดการกระจัดเท่ากัน",
            },
          ],
          answer: "1",
        },
        {
          question:
            "เด็กคนหนึ่งวิ่งไปทางขวา 20 เมตร ใช้เวลา 4 วินาที จากนั้นหันกลับหลังแล้ววิ่งอีก 2 เมตร ในเวลา 1 วินาที เด็กคนนี้มีความเร็วเฉลี่ยเท่าใด?",
          choice: [
            { 1: "3.5 เมตรต่อวินาที" },
            { 2: "3.6 เมตรต่อวินาที" },
            { 3: "6.0 เมตรต่อวินาที" },
            { 4: "9.0 เมตรต่อวินาที" },
          ],
          Answer: "2",
        },
        {
          question:
            "รถยนต์ A เริ่มเคลื่อนที่จากหยุดนิ่งโดยความเร็วเพิ่มขึ้น 2 เมตร/วินาที ทุก 1 วินาที เมื่อสิ้นวินาทีที่ 5 รถยนต์จะมีความเร็วเท่าไร?",
          choice: [
            {
              1: "5 เมตร/วินาที",
            },
            {
              2: "10 เมตร/วินาที",
            },
            {
              3: "15 เมตร/วินาที",
            },
            {
              4: "20 เมตร/วินาที",
            },
          ],
          Answer: "2",
        },
        {
          question:
            "วัตถุที่มีการเคลื่อนที่แบบโพรเจกไทล์ ขณะวัตถุอยู่บนจุดสูงสุด ข้อใดต่อไปนี้ถูกต้อง?",
          choice: [
            { 1: "ความเร็วของวัตถุมีค่าเป็นศูนย์" },
            { 2: "ความเร่งของวัตถุมีค่าเป็นศูนย์" },
            { 3: "ความเร็วของวัตถุในแนวดิ่งมีค่าเป็นศูนย์" },
            { 4: "ความเร็วของวัตถุในแนวราบมีค่าเป็นศูนย์" },
          ],
          Answer: "3",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
