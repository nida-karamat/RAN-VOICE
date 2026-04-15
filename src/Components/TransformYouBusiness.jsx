

import React, { useState, useMemo } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowTrendUp } from "react-icons/fa6";
import { lazy, Suspense } from "react";
const AIAgentCards = lazy(() => import("./AIAgentCards"));


import liza1 from "../assets/Images/slider/liza1.jpg";
import liza2 from "../assets/Images/slider/liza2.jpg";
import liza3 from "../assets/Images/slider/liza3.jpg";
import liza4 from "../assets/Images/slider/liza4.jpg";

import diego1 from "../assets/Images/slider/diego1.jpg";
import diego2 from "../assets/Images/slider/diego2.jpg";
import diego3 from "../assets/Images/slider/diego3.jpg";
import diego4 from "../assets/Images/slider/diego4.jpg";

import ethan1 from "../assets/Images/slider/ethan1.jpg";
import ethan2 from "../assets/Images/slider/ethan2.jpg";
import ethan3 from "../assets/Images/slider/ethan3.jpg";
import ethan4 from "../assets/Images/ethan/ethan2.webp";

import amina1 from "../assets/Images/slider/amina1.jpg";
import amina2 from "../assets/Images/slider/amina2.jpg";
import amina3 from "../assets/Images/slider/amina3.jpg";
import amina4 from "../assets/Images/slider/amina4.jpg";

const aiEmployees = [
  {
    id: 1,
    title: "AI Receptionist",
    desc: "Answer every incoming call instantly with a friendly, directing customers with unmatched speed, accuracy, and professionalism—no missed opportunities, ever.",
    icon: <IoMdCheckmarkCircleOutline className="text-blue-600 w-4 h-4" />,
    skills: ["24/7 Availability", "Call Routing", "Professional Handling"],
    imgs: [liza1, ethan1, amina1, diego1],
    tag: "~40% fewer missed calls",
    label: "AI Receptionist",
  },
  {
    id: 2,
    title: "Healthcare Assistant",
    desc: "Provide multilingual patient support around the clock, delivering sensitive, accurate responses that enhance care without delays or confusion.",
    icon: <IoMdCheckmarkCircleOutline className="text-blue-600 w-4 h-4" />,
    skills: ["Appointment Reminders", "Health Screening", "Prescription Refills"],
    imgs: [amina2, ethan2, liza2, diego2],
    tag: "Boost attendance ~35%",
    label: "Care Nurse",
  },
  {
    id: 3,
    title: "Sales Representative",
    desc: "Engage prospects 24/7 by qualifying leads, booking demos, and following up consistently—driving growth without fatigue or scheduling gaps.",
    icon: <IoMdCheckmarkCircleOutline className="text-blue-600 w-4 h-4" />,
    skills: ["Lead Qualification", "CRM Integration", "Automated Follow-ups"],
    imgs: [liza3, ethan3, amina3, diego3],
    tag: "~60% more leads",
    label: "AI Sales Executive",
  },
  {
    id: 4,
    title: "Legal Assistant",
    desc: "Drafts, reviews, and organizes legal documents with precision and compliance, ensuring accurate, confidential support that meets every legal standard.",
    icon: <IoMdCheckmarkCircleOutline className="text-blue-600 w-4 h-4" />,
    skills: ["Technical Support", "Billing Inquiries", "Product Guidance"],
    imgs: [amina4, ethan4, liza4, diego4],
    tag: "~80% faster call resolution",
    label: " AI Legal Assistant",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const TransformYourBusiness = () => {
  const [modalEmp, setModalEmp] = useState(null);

  const imageToPersonBase = useMemo(() => new Map([
    [liza1, 1], [liza2, 1], [liza3, 1], [liza4, 1],
    [diego1, 5], [diego2, 5], [diego3, 5], [diego4, 5],
    [ethan1, 9], [ethan2, 9], [ethan3, 9], [ethan4, 9],
    [amina1, 13], [amina2, 13], [amina3, 13], [amina4, 13],
  ]), []);

  const defaultRoleOrder = ["receptionist", "sales", "legal", "nurse"];
  const personRoleOrder = useMemo(() => new Map([
    [1, ["receptionist", "nurse", "sales", "legal"]],
    [5, ["receptionist", "nurse", "sales", "legal"]],
    [9, ["receptionist", "nurse", "sales", "legal"]],
    [13, ["receptionist", "nurse", "sales", "legal"]],
  ]), []);

  const sectionTargetRoles = ["receptionist", "legal", "sales", "nurse"];

  const getRoleOffsetForSection = (personBase, sectionIndex) => {
    const roleOrder = personRoleOrder.get(personBase) || defaultRoleOrder;
    const targetRole = sectionTargetRoles[sectionIndex] || roleOrder[0];
    return Math.max(0, roleOrder.indexOf(targetRole));
  };

  const handleImageClick = (img, emp, index) => {
    const personBase = imageToPersonBase.get(img);
    const offset = typeof personBase === "number" ? getRoleOffsetForSection(personBase, index) : index;
    const popupId = typeof personBase === "number" ? personBase + offset : undefined;
    setModalEmp({ emp, imgIndex: emp.imgs.indexOf(img), popupId });
  };

  return (
    <section
      className="w-full bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden"
      style={{ fontFamily: "DM Sans, sans-serif" }}
    >
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium text-gray-900 mb-3 leading-12">
          Transform Your Business
          <br /> with <span className="text-blue-600">AI Employees</span>
        </h2>
        <p className="text-gray-500 text-base sm:text-lg md:text-[24px] px-2 sm:px-0">
          Our AI team members handle the work of ten people with unmatched
          speed, accuracy, and consistency—without breaks, delays, or
          errors.{" "}
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-24 max-w-7xl mx-auto">
        {aiEmployees.map((emp, index) => {
          const slideX = Array.from(
            { length: emp.imgs.length },
            (_, i) => `-${i * 100}%`,
          );
          return (
            <div
              key={emp.id}
              className={`flex flex-col md:flex-row items-start gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* LEFT SIDE TEXT */}
              <motion.div
                className="w-full md:w-1/2 flex flex-col p-4 sm:p-6 md:p-10"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 text-sm sm:text-base lg:text-[14px] font-medium px-4 py-2 rounded-full mb-4 w-fit"
                style={{fontFamily:"Inter , sans serif"}}
                >
                  <FaArrowTrendUp className="w-2 h-2 sm:w-3.5 sm:h-3.5 flex-shrink-0 text-[#121ABD]"
                  />
                  <span>{emp.tag}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-3 leading-snug">
                  {emp.title}
                </h3>
                <p className="text-gray-600 mb-6 text-base sm:text-lg md:text-[20px]  leading-relaxed">
                  {emp.desc}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-2 mb-6 w-full justify-start items-center">
                  {emp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-gray-700 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    >
                      {emp.icon}
                      <span className="font-medium">{skill}</span>
                    </span>
                  ))}
                </div>

               

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    const defaultImg = emp.imgs[0];
                    handleImageClick(defaultImg, emp, index);
                  }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0px 0px 25px rgba(59,130,246,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="relative inline-flex items-center 
                  px-4 sm:px-7 py-3 
                  bg-gradient-to-r from-[#4149EE] to-[#252A88]
                  text-white rounded-full font-medium text-sm sm:text-base shadow-md 
                  w-35 gap-10"
                >
                  {modalEmp?.emp?.id === emp.id ? "Close" : "Explore"}

                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2
    w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 
    bg-white rounded-full flex items-center justify-center"
                  >
                    <FaArrowRight className="text-blue-600 text-sm sm:text-base md:text-base" />
                  </motion.div>
                </motion.button>
              </motion.div>

              {/* RIGHT SIDE SLIDER */}
              <div className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{ x: slideX }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ width: `${emp.imgs.length * 100}%` }}
                >
                  {emp.imgs.map((img, i) => (
                    <div
                      key={i}
                      className="group w-full flex-shrink-0 flex items-center justify-center h-[260px] sm:h-[320px] md:h-[400px] lg:h-[420px] relative"
                    >
                      <img
                        src={img}
                        alt={emp.title}
                        role="button"
                        tabIndex={0}
                        loading="lazy"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageClick(img, emp, index);
                        }}
                        onKeyDown={(e) => {
                          if (["Enter", " "].includes(e.key)) {
                            e.preventDefault();
                            handleImageClick(img, emp, index);
                          }
                        }}
                        className="h-full w-auto object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        style={{ objectPosition: "center" }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out transform group-hover:-translate-y-1">
                          <div className="bg-white/90 rounded-full p-2 shadow-lg flex items-center justify-center">
                            <FaArrowRight className="text-blue-600 w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          );
        })}

        {/* MODAL SECTION */}
        {modalEmp && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-6 overflow-y-auto">
            <div
              className="absolute inset-0"
              onClick={() => setModalEmp(null)}
            ></div>
            <div className="relative w-full max-w-4xl">
              {(() => {
                if (typeof modalEmp.popupId === "number") {
                  return (
                    <AIAgentCards
                      popupId={modalEmp.popupId}
                      onClose={() => setModalEmp(null)}
                      roleScopedThumbnails
                    />
                  );
                }
                const groupStartId = (modalEmp.emp.id - 1) * 4 + 1;
                const idx =
                  typeof modalEmp.imgIndex === "number" ? modalEmp.imgIndex : 0;
                const popupId = groupStartId + idx;
                return (
                  <Suspense fallback={<div>Loading...</div>}>
                    <AIAgentCards
                      popupId={popupId}
                      onClose={() => setModalEmp(null)}
                      roleScopedThumbnails
                    />
                  </Suspense>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TransformYourBusiness;
