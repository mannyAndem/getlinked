const Timeline = () => {
  return (
    <section className="p-5 lg:p-32 text-white">
      <h2 className="text-[3rem] font-bold text-center">Timeline</h2>
      <p className="text-sm text-center">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>
      {/* timeline section on desktop */}
      <div className="mt-24">
        <div className="flex flex-col justify-between">
          <div className="w-2/5 text-right flex flex-col justify-end">
            <h3 className="text-2xl mb-3 text-purple font-bold">
              Hackathon Announcement
            </h3>
            <p className="text-sm">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <div className="h-full flex flex-col gap-5 items-center">
            <div className="w-1 bg-purple h-32"></div>
            <div className="w-14 h-14 text-2xl font-bold flex items-center justify-center rounded-full purple-gradient">
              1
            </div>
          </div>
          <div className="w-2/5 flex items-end">
            <span className="text-2xl font-bold text-purple mb-4">
              November 18, 2023
            </span>
          </div>
        </div>
        <div className="mt-3 flex justify-between">
          <div className="w-2/5 text-right flex flex-col justify-end">
            <span className="text-2xl font-bold text-purple mb-4">
              November 18, 2023
            </span>
          </div>
          <div className="h-full flex flex-col gap-5 items-center">
            <div className="w-1 bg-purple h-24"></div>
            <div className="w-14 h-14 text-2xl font-bold flex items-center justify-center rounded-full purple-gradient">
              2
            </div>
          </div>
          <div className="w-2/5 flex flex-col justify-end">
            <h3 className="text-2xl mb-3 text-purple font-bold">
              Teams Registration begins
            </h3>
            <p className="text-sm">
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
        </div>
        <div className="mt-3 flex justify-between">
          <div className="w-2/5 text-right flex flex-col justify-end">
            <h3 className="text-2xl mb-3 text-purple font-bold">
              Teams Registration ends
            </h3>
            <p className="text-sm">
              Interested participants are no longer allowed to register
            </p>
          </div>
          <div className="h-full flex flex-col gap-5 items-center">
            <div className="w-1 bg-purple h-24"></div>
            <div className="w-14 h-14 text-2xl font-bold flex items-center justify-center rounded-full purple-gradient">
              3
            </div>
          </div>
          <div className="w-2/5 flex flex-col justify-end">
            <span className="text-2xl font-bold text-purple mb-4">
              November 18, 2023
            </span>
          </div>
        </div>
        <div className="mt-3 flex justify-between">
          <div className="w-2/5 text-right flex flex-col justify-end">
            <span className="text-2xl font-bold text-purple mb-4">
              November 18, 2023
            </span>
          </div>
          <div className="h-full flex flex-col gap-5 items-center">
            <div className="w-1 bg-purple h-24"></div>
            <div className="w-14 h-14 text-2xl font-bold flex items-center justify-center rounded-full purple-gradient">
              4
            </div>
          </div>
          <div className="w-2/5 flex flex-col justify-end">
            <h3 className="text-2xl mb-3 text-purple font-bold">
              Announcement of the Selected Teams and ideas
            </h3>
            <p className="text-sm">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
        </div>
        <div className="mt-3 flex justify-between">
          <div className="w-2/5 text-right flex flex-col justify-end">
            <h3 className="text-2xl mb-3 text-purple font-bold">
              Getlinked Hackathon 1.0 Offically Begins
            </h3>
            <p className="text-sm">
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <div className="h-full flex flex-col gap-5 items-center">
            <div className="w-1 bg-purple h-24"></div>
            <div className="w-14 h-14 text-2xl font-bold flex items-center justify-center rounded-full purple-gradient">
              5
            </div>
          </div>
          <div className="w-2/5 flex flex-col justify-end">
            <span className="text-2xl font-bold text-purple mb-4">
              November 18, 2023
            </span>
          </div>
        </div>
        <div className="mt-3 flex justify-between">
          <div className="w-2/5 text-right flex flex-col justify-end">
            <span className="text-2xl font-bold text-purple mb-4">
              November 18, 2023
            </span>
          </div>
          <div className="h-full flex flex-col gap-5 items-center">
            <div className="w-1 bg-purple h-20"></div>
            <div className="w-14 h-14 text-2xl font-bold flex items-center justify-center rounded-full purple-gradient">
              6
            </div>
          </div>
          <div className="w-2/5 flex flex-col justify-end">
            <h3 className="text-2xl mb-3 text-purple font-bold">Demo Day</h3>
            <p className="text-sm">
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
