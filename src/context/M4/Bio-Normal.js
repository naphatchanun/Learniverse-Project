import { createContext } from "react";

export const NormalBio4 = [
  [
    {
      label: "test1",
      grade: "10",
      subject: "bio",
      level: "2",
      totalmark: "5",
      duration: "180000",
      content: [
        {
          question: "ประโยชน์ของเม็ดเลือดแดงคืออะไร?",
          choice: [
            { 1: "การขนส่งออกซิเจน" },
            { 2: "การก่อสร้างกระดูก" },
            { 3: "การควบคุมการออกซิเจน" },
            { 4: "การทำลายเชื้อโรค" },
          ],
          answer: "1",
        },
        {
          question: "บิดาเเห่งวิชาพันธุ์ศาสตร์ คือข้อใด?",
          choice: [
            { 1: "กาลิเลโอ" },
            { 2: "เกรเกอร์ เมนเดล" },
            { 3: "หลุยส์ ปาสเตอร์" },
            { 4: "เซอร์ ไอเเซคนิวตัน" },
          ],
          answer: "2",
        },
        {
          question:
            "จากผลการทดลองของเมนเดล ลักษณะที่ไม่ปรากฎในรุ่น 1 เเต่ปรากฎในรุ่น 2 เมนเดลเรียกลักษณะนั้นว่าอย่างไร?",
          choice: [
            { 1: "ลักษณะเด่น" },
            { 2: "ลักษณะด้อย" },
            { 3: "ลักษณะปรากฎ" },
            { 4: "ลักษณะเเท้" },
          ],
          Answer: "2",
        },
        {
          question:
            "จีโนไทป์ที่มียีน 2 แอลลีน ที่ต่างกันเข้าคู่กัน จีโนไทป์สภาพนี้คือข้อใด?",
          choice: [
            { 1: "เฮเทอโรไซกัสจีโนไทป์ (heterozygeus genotype)" },
            { 2: "ฮอโมไซกัสโดมิแนนท์ (homezygous dominant )" },
            { 3: "ฮอมอไซกัสจีโนไทป์ (homozygous genotype)" },
            { 4: "ฮอโมไซกัส รีเซสสีพ (homozygous recessive )" },
          ],
          Answer: "1",
        },
        {
          question:
            "รูปร่างลักษณะของสิ่งมีชีวิตที่ปรากฎให้เห็นเป็นลักษณะ เรียกว่าอะไร?",
          choice: [
            { 1: "Genotype" },
            { 2: "Phenotype" },
            { 3: "Dominant gene" },
            { 4: "Recessive gene" },
          ],
          Answer: "2",
        },
      ],
    },
  ],
];

export const AuthContext = createContext(null);
