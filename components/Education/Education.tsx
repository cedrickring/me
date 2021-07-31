import Card from "../Card/Card";

function Icon({ className }: { className: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="white" width="35" height="35" viewBox="0 0 24 24">
      <path d="M20 12.875v5.068c0 2.754-5.789 4.057-9 4.057-3.052 0-9-1.392-9-4.057v-6.294l9 4.863 9-3.637zm-8.083-10.875l-12.917 5.75 12 6.5 11-4.417v7.167h2v-8.25l-12.083-6.75zm13.083 20h-4c.578-1 1-2.5 1-4h2c0 1.516.391 2.859 1 4z" />
    </svg>
  );
}

export default function Education() {
  return (
    <Card
      icon={Icon}
      name="Education"
      notHoveredContainerClassName="flex items-end justify-end"
      notHoveredClassName="flex gap-2 items-center flex-row mr-5 mb-4"
    >
      <div className="flex flex-col space-y-8 mx-4">
        <div className="grid grid-cols-2-auto gap-2">
          <span className="w-3.5">{"➤"}</span>
          <div>
            <h1 className="font-thin text-xl">Computer Science Masters</h1>
            <h4>August 2021 - Present</h4>
            <h5 className="font-extralight">Technische Universität Berlin</h5>
          </div>
        </div>
        <div className="grid grid-cols-2-auto gap-2">
          <span className="w-3.5">{""}</span>
          <div>
            <h1 className="font-thin text-xl">Software Engineering Bachelors</h1>
            <h4>Oct 2016 - July 2021</h4>
            <h5 className="font-extralight">University of Duisburg-Essen</h5>
          </div>
        </div>
      </div>
    </Card>
  );
}
