

const AnimeFilterByDate = () => {

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <label htmlFor="from" className="text-lg text-white/70">
          {" "}
          From
        </label>
        <input
          type="date"
          name="from"
          id="from"
          className="outline-none bg-dark-lighten-2 px-3 py-1 rounded-md"
        />
      </div>

      <div className="flex justify-between items-center">
        <label htmlFor="to" className=" text-lg text-white/70">
          {" "}
          To
        </label>
        <input
          type="date"
          name="to"
          id="to"
          className="outline-none bg-dark-lighten-2 px-3 py-1 rounded-md"
        />
      </div>
    </div>
  );
};

export default AnimeFilterByDate;
