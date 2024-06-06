import { useEffect, useCallback, useState } from "react";
import { AxiosLib } from "../../lib/axiosLib";
import { useContext } from "react";
import { AuthContext } from "../../context/user";

const PlayHistory = () => {
  const auth = useContext(AuthContext);
  const userID = auth.userId;

  const [histories, setHistories] = useState([]);

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
          <div className="grid" key={index}>
            <div>{item.examID.label}</div>
          </div>
        );
      })}
    </main>
  );
};

export default PlayHistory;
