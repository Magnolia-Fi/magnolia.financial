import { SquigglyLine } from "./SquigglyLine";
import { TenetsItem } from "./TenetsItem";

export const TenetsSection = () => {
  return (
    <div className="px-20 py-8 mx-auto flex flex-col justify-center gap-[48px]">
      <h2 className="font-aktiv-grotesk text-2xl font-bold text-center">
        Our Tenets
      </h2>

      <TenetsItem
        idx={1}
        title="Money is sacred."
        description={
          <p>
            It’s the lifeblood that fuels our economies and our lives.
            Safeguarding you and your customer’s bitcoin is our priority #1.
          </p>
        }
      />

      <TenetsItem
        idx={2}
        title="Stay grounded in reality."
        description={
          <p>
            Compliance and regulatory issues are part of running your business.
            Magnolia has all the <a href="#">licenses and certifications</a> to
            ensure your business transactions are compliant.
          </p>
        }
      />

      <TenetsItem
        idx={3}
        title="Bitcoin without borders."
        description={
          <p>
            We support the networks and technologies you need in order to serve
            your customers. Bitcoin mainnet, Lightning network, Liquid,
            Inscriptions, and Mezo. Need more? <a href="#">Tell us</a>.
          </p>
        }
      />

      <TenetsItem
        idx={4}
        title="Building without bullshit."
        description={
          <p>
            Magnolia has a modern, developer-friendly <a href="">API</a> that is
            easy to use, so you can focus on building your company.
          </p>
        }
      />

      <SquigglyLine className="mx-auto w-[200px] h-[50px]" />
    </div>
  );
};
