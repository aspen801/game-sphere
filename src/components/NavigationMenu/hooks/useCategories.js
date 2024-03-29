import { useEffect, useState } from "react";

import * as categoriesService from "@/services/categories.api.js";

export const useGetCategories = () => {
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    categoriesService.getItems().then(({ data }) => {
      setItems(data);
    });
  }, [refresh]);

  const refreshItems = () => {
    setRefresh(!refresh);
  };

  return { items, refreshItems };
};
