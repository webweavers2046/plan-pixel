"use client";

import { taskContext } from "@/Providers/TaskDndProvider";

// const { taskContext } = require("@/Providers/TaskDndProvider");
const { useContext } = require("react");

const useDNDcontext = () => {
  return useContext(taskContext);
};

export default useDNDcontext;
