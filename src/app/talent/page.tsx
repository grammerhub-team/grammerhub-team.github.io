import Image from "next/image";
import Link from "next/link";
import { talentMembers } from "./talent-members";

export default function TalentPage() {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mt-[4rem]">
        GRAMMERS | TALENT FOR HIRE
      </h1>
      <p className="text-center mt-[1rem] text-sm">
        Grammerhub is commited to providing top-quality talent to help your
        business succeed. <br />
        Browse out talent listings today and find the perfect tech professional
        for your company!
      </p>
      <hr className="my-[4rem]" />

      <section className="flex flex-col lg:gap-[2rem]">
        {talentMembers.map((member, index) => (
          <div
            key={member.name}
            className="flex justify-center items-center flex-col lg:flex-row gap-[4rem] lg:h-[80vh] mx-[2rem]"
          >
            <div
              className={`relative w-[300px] sm:w-[500px] h-[500px] lg:h-full ${
                index % 2 === 0 ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <Image alt="Image of Lia Moua" src={member.imageSrc} fill />
            </div>
            <div
              className={`flex flex-col justify-center w-[300px] sm:w-[500px] ${
                index % 2 === 0 ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <h4 className="text-xl">{member.title}</h4>
              {!!member.bio && (
                <p className="mt-[2rem] whitespace-pre-wrap">{member.bio}</p>
              )}

              <section className="mt-[2rem]">
                <h4 className="text-xl">Skills</h4>
                <span>{member.skills.join(", ")}</span>
              </section>

              <h4 className="mt-[2rem]">Portfolio</h4>
              <Link
                href={member.portfolioLink}
                target="_blank"
                className="text-blue-500 underline"
              >
                {member.portfolioLink}
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
