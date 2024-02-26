// GameMessage.tsx
import React from "react";

interface GameMessageProps {
  elementName: string;
  botElementName: string;
  score: number;
  extraElementName?: string;
  remain: number;
}

const GameMessage: React.FC<GameMessageProps> = ({
  elementName,
  botElementName,
  score,
  extraElementName,
  remain,
}) => {
  return (
    <>
      <p>
        در مقابل <strong>{elementName}</strong> تو، روبات یک{" "}
        <strong>{botElementName}</strong> بازی کرد
      </p>
      <p>{score} امتیاز برات ثبت شد</p>
      {extraElementName ? (
        <p>
          <strong>یه دونه {extraElementName} جدید هم گرفتی</strong>
        </p>
      ) : (
        <p>هیچ عنصر اضافی دریافت نشد</p>
      )}
      <p>{remain} تا دیگه هم از این عنصر داری</p>
    </>
  );
};

export default GameMessage;
