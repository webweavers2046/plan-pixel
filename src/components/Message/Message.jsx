"use client"
import React from "react";
import { FacebookProvider, CustomChat } from 'react-facebook';
const Message = () => {
  return (
    <FacebookProvider appId="1574756050007081">
      <CustomChat pageId="100862432719404" />
    </FacebookProvider>
  );
};

export default Message;
