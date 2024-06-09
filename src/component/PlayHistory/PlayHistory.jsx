import { useEffect, useCallback, useState } from "react";
import { AxiosLib } from "../../lib/axiosLib";
import { useContext } from "react";
import { AuthContext } from "../../context/user";
import { format, parseISO } from "date-fns";

const PlayHistory = () => {
  const auth = useContext(AuthContext);
  const userID = auth.userId;

  const [histories, setHistories] = useState([]);
  const isoDate = "2024-06-09T07:03:19.266Z";
  const formattedDate = format(parseISO(isoDate), "dd-MM-yyyy");
  const fetchHistory = useCallback(async () => {
    try {
      const result = await AxiosLib.get(`/user/history/${userID}`);
      if (result.status === 200) {
        setHistories(result.data);
        console.log(histories);
      }
    } catch (error) {
      console.log(error);
    }
  }, [userID]);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  return (
    <main>
      {histories.map((item, index) => {
        return (
          <div className="rounded-md bg-gray-200 mt-3" key={index}>
            <div className="grid md:grid-cols-[3fr_3fr_3fr_3fr-3fr] grid-cols-5 space-x-3">
              <div className="flex justify-center  px-2 py-2">
                {item.examID.label}
              </div>
              <div className="flex justify-center  px-2 py-2 ">
                {item.examID.subject}
              </div>
              <div className="flex justify-center  px-2 py-2 ">
                {item.examID.level}
              </div>
              <div className="flex justify-center  px-2 py-2 ">
                {item.score}
              </div>
              <div className="flex justify-center  px-2 py-2 ">
                {item.Date}
                <p>{formattedDate}</p>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default PlayHistory;
