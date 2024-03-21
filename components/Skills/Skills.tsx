import Card from "../Card/Card";
import { ComponentPropsWithRef, forwardRef } from "react";

function Icon({ className }: { className: string }) {
  return (
    <svg className={className} fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M23.27 19.743l-11.946-11.945c-.557-.557-.842-1.331-.783-2.115.115-1.485-.395-3.009-1.529-4.146-1.03-1.028-2.375-1.537-3.723-1.537-.507 0-1.015.072-1.506.216l3.17 3.17c.344 1.589-1.959 3.918-3.566 3.567l-3.17-3.17c-.145.492-.217 1-.217 1.509 0 1.347.51 2.691 1.537 3.721 1.135 1.136 2.66 1.646 4.146 1.53.783-.06 1.557.226 2.113.783l11.947 11.944c.468.468 1.103.73 1.763.73 1.368 0 2.494-1.108 2.494-2.494 0-.638-.244-1.276-.73-1.763zm-1.77 2.757c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm-8.375-15.753l6.723-6.747 4.152 4.128-6.722 6.771-1.012-1.012 5.488-5.533c.165-.165.165-.435-.001-.602-.166-.165-.436-.165-.601 0l-5.489 5.533-.935-.936 5.495-5.539c.166-.166.166-.437 0-.603-.168-.166-.436-.166-.603.001l-5.494 5.539-1.001-1zm-3.187 9.521l-5.308 5.35c-.166.166-.437.166-.603 0-.165-.166-.166-.436 0-.602l5.308-5.351-.936-.935-5.301 5.343c-.165.168-.435.167-.601.001-.166-.167-.166-.436 0-.602l5.3-5.343-1.004-1.004-5.745 5.787-1.048 5.088 5.203-.937 5.743-5.786-1.008-1.009z" />
    </svg>
  );
}

const Link = forwardRef<HTMLAnchorElement, ComponentPropsWithRef<"a">>(function Link(props, ref) {
  return <a ref={ref} {...props} className="underline underline-offset-2 decoration-dotted" />;
});

export default function Skills() {
  return (
    <Card
      icon={Icon}
      name="Skills"
      notHoveredContainerClassName="flex items-end justify-end"
      notHoveredClassName="flex gap-2 items-center flex-row mr-16 mb-8"
    >
      <div className="ml-4 mb-8">
        <h1 className="font-extralight text-xl">Languages</h1>
        <p className="font-semibold">Good: Java- / TypeScript, Java, Kotlin, Go, HTML, CSS</p>
        <p className="font-light">Mediocre: Bash, Python</p>
      </div>

      <div className="ml-4 mb-8">
        <h1 className="font-extralight text-xl">Technologies / Frameworks</h1>
        <p>
          Kubernetes, Docker, Node.js, NestJS, Next, React, GraphQL, Relay, Angular, RxJS, Git, IaC (Pulumi & Terraform), Spring Boot,{" "}
          <Link href="https://nx.dev/">Nx</Link>, <Link href="https://www.prisma.io/">Prisma</Link>
        </p>
      </div>
    </Card>
  );
}
