const Section = ({
  children,
  hero = false,
}: {
  children: React.ReactNode;
  hero?: boolean;
}) => {
  return (
    <section
      data-standard-pyro-component={hero ? "Section-VariantHero" : "Section"}
      className={`${hero ? "relative h-screen min-h-[950px] w-full px-4 md:px-16" : "relative my-[12rem] h-full w-full px-16"}`}
    >
      <div
        data-standard-pyro-component={hero ? "Section-VariantHero" : "Section"}
        className={`${hero ? "mx-auto flex h-full w-full max-w-[1620px] flex-col" : "relative mx-auto flex h-full w-full max-w-[1620px] flex-col items-center justify-center py-32 text-center"} `}
      >
        {children}
      </div>
    </section>
  );
};

const SectionTitle = ({
  children,
  hero = false,
  ...other
}: {
  children: React.ReactNode;
  hero?: boolean;
}) => {
  return (
    <h1
      data-standard-pyro-component="SectionTitle"
      className={`${hero ? "mt-4 max-w-[960px] text-[60px] font-extrabold leading-[98%] tracking-[-0.25rem] md:text-[109px] md:tracking-[-0.35rem]" : "mt-4 max-w-[650px] text-[62px] font-extrabold leading-[98%] tracking-[-0.2rem]"} `}
      {...other}
    >
      {children}
    </h1>
  );
};

SectionTitle.displayName = "Title";
Section.Title = SectionTitle;

const SectionDescription = ({
  children,
  hero = false,
  maxWidth = 480,
  ...other
}: {
  children: React.ReactNode;
  hero?: boolean;
  maxWidth?: number;
}) => {
  return (
    <p
      data-standard-pyro-component="SectionDescription"
      className={`mt-10 text-[17px] font-normal leading-[155%] text-[#ffffff99] md:text-[22px]`}
      style={{ maxWidth: `${maxWidth}px` }}
      {...other}
    >
      {children}
    </p>
  );
};

SectionDescription.displayName = "Description";
Section.Description = SectionDescription;

export default Section;
