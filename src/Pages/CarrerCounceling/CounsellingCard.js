import Collapse from "@kunukn/react-collapse";
import React from 'react';

import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";

const CounsellingCard = ({service}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onInit = ({ state, style, node }) => {
        setIsOpen(true);
      };
    return (
        <div className="mt-10">
        <div
          className="flex items-center"
          onClick={() => setIsOpen((state) => !state)}
        >
          <div>
            <img src={service.picture} alt="" />
          </div>
          <div>
            <div className="">
              <div>
                <h4 className="text-[16px] font-semibold text-gray-600">
                  {service.name}
                </h4>
              </div>
            </div>
            <p>{service.title}</p>
          </div>
        </div>
        <div className="relative left-[300px] bottom-[40px]">
                {isOpen ? (
                  <AiOutlineDown className="text-[15px] font-[900] text-gray-600" />
                ) : (
                  <AiOutlineRight className="text-[15px] font-bold text-gray-600" />
                )}
              </div>
        <Collapse onInit={onInit} isOpen={isOpen}>
          <p className="mt-4 ml-2">
            {service.desc}
          </p>
        </Collapse>
      </div>
    );
};

export default CounsellingCard;