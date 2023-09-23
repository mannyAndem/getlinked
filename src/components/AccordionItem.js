const AccordionItem = ({ item, handleClick }) => {
  return (
    <li className="gap-6 w-full py-3 border-b border-purple">
      <div className="w-full">
        <div className="flex self-center items-center justify-between">
          <span className="text-sm">{item.question}</span>
          <span
            className="cursor-pointer text-xl text-purple"
            id={item.id}
            onClick={(e) => handleClick(e)}
          >
            +
          </span>
        </div>
      </div>
      <p
        className={`mt-2 pt-2 ml-4 border-t border-purple text-sm ${
          item.active ? "" : "hidden"
        }`}
      >
        {item.answer}
      </p>
    </li>
  );
};

export default AccordionItem;
