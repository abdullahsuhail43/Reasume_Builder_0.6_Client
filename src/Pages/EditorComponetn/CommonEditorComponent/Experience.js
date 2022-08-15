import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import experienceImage from "../../../assets/experince.png";

const Experience = () => {
  const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
  // Get input field values and store values at str
  let str = {
    name: "experiencesDetails",
    value: [],
  }; // store input values

  const navigate = useNavigate();

  const getValue = () => {
    str.value = [];
    str.value.push({
      jobTitle: `${document.getElementById("jobTitle")?.value}`,
    });
    str.value.push({
      companyName: `${document.getElementById("companyName")?.value}`,
    });
    str.value.push({ country: `${document.getElementById("country")?.value}` });
    str.value.push({ state: `${document.getElementById("state")?.value}` });
    str.value.push({ city: `${document.getElementById("city")?.value}` });
    str.value.push({
      startMonth: `${document.getElementById("startMonth")?.value}`,
    });
    str.value.push({
      startYear: `${document.getElementById("startYear")?.value}`,
    });
    str.value.push({
      endMonth: `${document.getElementById("endMonth")?.value}`,
    });
    str.value.push({ endYear: `${document.getElementById("endYear")?.value}` });

    setUsersTemplateInfo([...usersTemplateInfo, str]);
    navigate("/resume-builder/editor-education");
    console.log(str);
  };

  return (
    <div className=" bg-[#f4f7f8] lg:mr-7 rounded-2xl my-5">
      <div className="md:px-16 px-7 py-10 grid lg:grid-cols-12 lg:gap-5 ">
        {/* form div */}
        <div className="lg:col-span-8">
          <h3 className="text-4xl font-bold text-gray-700 mb-8">
            What's your most recent work experience?
          </h3>

          {/* input form */}
          <form>
            {/* job title */}
            <input
              type="text"
              placeholder="Job title"
              id="jobTitle"
              class="input h-14 border-1 border-gray-200 focus:outline-none w-full my-4"
            />
            {/* company name */}
            <input
              type="text"
              placeholder="Company/Organization Name"
              id="companyName"
              class="input h-14 border-1 border-gray-200 focus:outline-none w-full mb-4"
            />
            {/* country, state, city */}
            <div className="grid md:grid-cols-3 gap-5 mb-5">
              <input
                type="text"
                placeholder="Country"
                id="country"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
              />
              <input
                type="text"
                placeholder="State"
                id="state"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
              />
              <input
                type="text"
                placeholder="City"
                id="city"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
              />
            </div>

            {/* Start month,End month,Start year,End year */}
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Start Month"
                id="startMonth"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
              />
              <input
                type="text"
                placeholder="Start Year"
                id="startYear"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
              />
              <input
                type="text"
                placeholder="End month"
                id="endMonth"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
              />
              <input
                type="text"
                placeholder="End Year"
                id="endYear"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
              />
            </div>

            <div className="flex justify-center gap-10 mt-10">
              <a
                onClick={() => navigate("/resume-builder/editor-contact")}
                href="#_"
                class="relative editor-btn inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all group md:px-24 px-10 text-lg rounded-lg border-[1px] border-solid border-gray-400 text-black"
              >
                <span class="relative w-full  text-left ">Back</span>

                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Back
                </span>
              </a>
              <a
                onClick={getValue}
                href="#_"
                class="relative inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all bg-primary group md:px-24 px-10 text-lg rounded-lg text-white hover:bg-[#3ba6d4]"
              >
                <span class="relative w-full  text-left ">Continue</span>
              </a>
            </div>
          </form>
        </div>
        {/* image div */}
        <div className="lg:col-span-4 hidden lg:block">
          <img src={experienceImage} alt="this is experience img" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
