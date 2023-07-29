const About = ({children}) => {
  return (
    <>
      <div className="lg:flex items-center mt-20 gap-x-6 max-w-7xl mx-auto">
        <img src="https://i.ibb.co/LSvhZg4/image-4.png" alt="" />
        <div>
          <p className="pb-2">
            International Associative Upliftment is a global Service Company.
            There is always a team working daily to grow your business.
          </p>
          <p className="pb-2">
            International Associative Upliftment (IAU) Company operates
            worldwide. We create good and successful businesses at a low cost.
            We have different professional team members for each company for
            each business. For your company, we have (Team Supervisor), Business
            Management Specialist Team, Digital Marketing Specialist Team, Web
            Developer Specialist Team, Graphic Designer Specialist Team, Email
            marketing specialist Team, Video Editor Specialist Team, a team of
            six people spends six hours per day. Everyone works 36 hours a day
            for your company. That works 216 hours per Week. That works out to
            1008 hours per month.
          </p>
          <p>
            Large projects sometimes make a one-size-fits-all service
            impossible, which is why Associative Upliftment enables you to
            contact a large team of technical experts and request a custom order
            instead. If you still can`t find what you`re looking for, remember,
            Associative Upliftment`s Business Success Managers are here to guide
            and assist you
          </p>
        </div>
      </div>
      <div className="lg:flex items-center mt-20 gap-x-6 max-w-7xl mx-auto">
        <div>
          <h3 className="text-4xl font-bold pb-6">Sell quality products quickly.</h3>
          <p className="pb-2">
            Planning to decorate your project by a talented master craftsman in
            minutes, 5 to 6 master craftsmen work daily for long-lasting
            results.
          </p>
          <p className="pb-2">
            Your Associative Upliftment (IAU) Business Account seats a team of
            up to 50 Specialists! Need more? Contact our customer support and
            they will take care of you.
          </p>
          <p>
            That`s exactly what Associative Upliftment (IAU) Business has set
            out to guarantee by designing a unique catalog of Success
            business-relevant, top-tier Specialists. You will browse work
            samples and reviews first, and reach out to a designated Associative
            Upliftment Business Success Manager to help find you the Successful
            Plan.
          </p>
        </div>
        <img className="w-[628px] rounded-2xl" src="https://i.ibb.co/Qpyn7Gx/image.png" alt="" />
      </div>
      <div className="mt-20">{children}</div>
    </>
  );
};

export default About;
