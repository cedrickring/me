import Card from "../Card/Card";

function Icon({ className }: { className: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function AboutMe() {
  return (
    <Card icon={Icon} name={"About Me"} notHoveredClassName="inline-flex flex-col ml-10" notHoveredContainerClassName="flex items-center">
      <p className="font-extralight">
        I'm a student at the Institute of Technology in Berlin pursuing my masters in Computer Science. When I'm not actively studying, I
        work at PwC Germany as a part-time software engineer on AI and Machine Learning stuff. Though I'm rather on the front- and backend
        side than on the data science side. Most of the things I'm working on involves Node.js, with frameworks like NestJS and React +
        Relay. As my job also gave me the opportunity to dive into DevOps stuff, I also like to work with Cloud / Kubernetes stuff.
      </p>
    </Card>
  );
}
