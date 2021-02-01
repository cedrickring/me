import Card from "../Card/Card";
import { useMemo } from "react";

function Icon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 496.231 496.231" fill="white">
      <path d="m389.145 0h-282c-26.468 0-48 21.533-48 48 0 356.953-.389 335.402.829 339.058.817 2.446 2.185 4.573 3.831 6.227.998 1.002 98.184 98.301 99.598 99.387 6.322 4.869-3.396 3.328 225.742 3.328 26.468 0 48-21.533 48-48v-400c0-26.467-21.532-48-48-48zm-232 441.373-43.373-43.373h43.373zm248 6.627c0 8.822-7.178 16-16 16h-200v-82c0-8.836-7.163-16-16-16h-82v-318c0-8.822 7.178-16 16-16h282c8.822 0 16 7.178 16 16zm-51-125c0 8.836-7.163 16-16 16h-181c-8.837 0-16-7.164-16-16s7.163-16 16-16h181c8.837 0 16 7.164 16 16zm0 82c0 8.836-7.163 16-16 16h-103c-8.837 0-16-7.164-16-16s7.163-16 16-16h103c8.837 0 16 7.164 16 16zm-106.656-236.923c29.694 0 53.852-24.158 53.852-53.852s-24.157-53.852-53.852-53.852-53.852 24.158-53.852 53.852 24.158 53.852 53.852 53.852zm0-75.704c12.049 0 21.852 9.803 21.852 21.852s-9.803 21.852-21.852 21.852-21.852-9.803-21.852-21.852 9.803-21.852 21.852-21.852zm-81.019 154.078v-21.938c0-13.835 8.163-26.42 20.797-32.062l25.376-11.331c4.255-1.9 1.275-1.39 62.806-1.39 4.498 0 4.344.417 31.899 12.72 12.634 5.642 20.797 18.227 20.797 32.062v21.938c0 8.836-7.163 16-16 16s-16-7.164-16-16v-21.938c0-1.227-.724-2.342-1.844-2.842l-22.263-9.94h-49.462l-22.263 9.94c-1.12.5-1.844 1.616-1.844 2.842v21.938c0 8.836-7.163 16-16 16s-15.999-7.163-15.999-15.999z" />
    </svg>
  );
}

interface Job {
  title: string;
  company: string;
  length: string;
  location: string;
}

export default function Resume() {
  const jobs = useMemo<Job[]>(
    () => [
      {
        title: "Working Student Software Engineer",
        company: "PwC Germany",
        length: "Oct 2017 - Present",
        location: "Düsseldorf, Germany",
      },
      {
        title: "Working Student",
        company: "ThyssenKrupp Steel Europe AG",
        length: "May 2017 - Sept 2017",
        location: "Dortmund, Germany",
      },
    ],
    []
  );

  return (
    <Card
      icon={Icon}
      name="Resume"
      notHoveredClassName="inline-flex flex-col"
      notHoveredContainerClassName="flex items-center justify-center"
      iconClassName="h-10 mb-2"
    >
      <div>
        {jobs.map((job, index) => (
          <div className="grid grid-cols-2-auto gap-2">
            <span className="w-3.5">{index === 0 ? "➤" : ""}</span>
            <div key={`job-${index}`} className="mb-8">
              <h1 className="font-thin text-xl">{job.title}</h1>
              <h4>{job.length}</h4>
              <h5 className="font-extralight">{job.company}</h5>
              <h5 className="font-extralight">{job.location}</h5>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
