import { ApiConfig } from "@/app/Apiconfig";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useAppSettings = () => {
  const [appSetting, setAppSetting] = useState({});
  const get = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: ApiConfig.getAppSetting,
      });
      return res.data.data[0];
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get().then((res) => {
      setAppSetting(res);
    });
  }, []);

  return appSetting;
};

export default useAppSettings;
