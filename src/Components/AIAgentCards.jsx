import React, { useState, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { GrPhone } from "react-icons/gr";
import { RiCalendarCheckLine } from "react-icons/ri";
import { LuMessageSquare } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdOutlineHeadset } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { FaRegBell } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { IoBagAddOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

// Agent images
import liza1 from "../assets/Images/liza/liza1.webp";
import liza2 from "../assets/Images/liza/liza2.jpg";
import liza3 from "../assets/Images/liza/liza3.jpg";
import liza4 from "../assets/Images/slider/liza3.jpg";
import diego1 from "../assets/Images/diego/diego1.webp";
import diego2 from "../assets/Images/diego/diego2.webp";
import diego3 from "../assets/Images/diego/diego3.webp";
import diego33 from "../assets/Images/slider/diego3.jpg";
import diego4 from "../assets/Images/slider/diego4.jpg";
import ethan1 from "../assets/Images/ethan/ethan1.webp";
import ethan2 from "../assets/Images/ethan/ethan2.webp";
import ethan3 from "../assets/Images/ethan/ethan3.webp";
import ethan4 from "../assets/Images/ethan/ethan4.webp";
import amina1 from "../assets/Images/amina/anima1.webp";
import amina2 from "../assets/Images/slider/amina4.jpg";
import amina3 from "../assets/Images/amina/anima3.webp";
import amina33 from "../assets/Images/amina/amina33.jpg";
import amina4 from "../assets/Images/amina/anima4.webp";
import ethanVideo1 from "../assets/Videos/ethanVideo1.mov";
import ethanVideo2 from "../assets/Videos/ethanVideo2.mp4";

import ethanVideo3 from "../assets/Videos/ethanVideo3.mp4";
import ethanVideo4 from "../assets/Videos/ethanVideo4.mp4";
import diego11 from "../assets/Images/slider/diego1.jpg";
import diego22 from "../assets/Images/slider/diego3.jpg";
// import diego33 from "../assets/Images/diego/diego33.jpg";
import diegoVideo1 from "../assets/Videos/diegoVideo1.mp4";
import diegoVideo2 from "../assets/Videos/diegoVideo2.mp4";
import diegoVideo4 from "../assets/Videos/diegoVideo4.mp4";
import lizaVideo2 from "../assets/Videos/lizaVideo2.mp4";
import lizaVideo3 from "../assets/Videos/lizaVideo3.mp4";
import lizaVideo4 from "../assets/Videos/lizaVideo4.mp4";
import aminaVideo1 from "../assets/Videos/aminaVideo1.mp4";
import aminaVideo4 from "../assets/Videos/aminaVideo4.mp4";
import aminaVideo2 from "../assets/Videos/aminaVideo2.mp4";
import aminaVideo3 from "../assets/Videos/aminaVideo3.mp4";
import lizaVideo1 from "../assets/Videos/lizaVideo1.mp4";
import diegoVideo3 from "../assets/Videos/diegoVideo3.mp4";

export default function AIAgentCards({
  popupId,
  onClose,
  roleScopedThumbnails = false,
}) {
  const [activeTab, setActiveTab] = useState("description");
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false); // NEW: track if play button should show
  const videoRef = useRef(null);
  const [currentPopupId, setCurrentPopupId] = useState(popupId);
  const [loadingVideo, setLoadingVideo] = useState(true);
  const showLoaderTimerRef = useRef(null); // NEW: timer ref to delay showing loader
  const isUnmountedRef = useRef(false);

  useEffect(() => {
    setCurrentPopupId(popupId);
  }, [popupId]);

  useEffect(() => {
    const handleAgentPopup = (e) => setCurrentPopupId(e.detail);
    window.addEventListener("openAgentPopup", handleAgentPopup);
    return () => window.removeEventListener("openAgentPopup", handleAgentPopup);
  }, []);

  useEffect(() => {
    return () => {
      isUnmountedRef.current = true;
      if (showLoaderTimerRef.current) {
        clearTimeout(showLoaderTimerRef.current);
        showLoaderTimerRef.current = null;
      }
    };
  }, []);

  // 🧠 12 agents data (unique titles + realistic descriptions)
  const agents = [
    {
      id: 1,
      name: "Liza",
      title: "AI Receptionist",
      subtitle: "Customer Care Assistant",
      desc: "A professional and friendly AI receptionist designed to manage calls, schedule meetings, and provide seamless first-point contact for businesses of all sizes.",
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Call Routing",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Inquiry Handling",
        },
        {
          icon: (
            <FiUsers className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Coordination",
        },
      ],
      performance: [
        { label: "Missed call reduction", value: "45%" },
        { label: "Response time improvement", value: "35%" },
      ],
      appearance:
        "Smart office attire with professional headset. Polite, confident, and dependable — always maintaining a warm, professional tone.",
      compliance: [
        "Enterprise-grade data privacy",
        "Secure call handling",
        "Customer record management",
      ],
      image: liza1,
      video: lizaVideo1,
      images: [liza1, liza2, liza4, liza3],
      tag: "~40% fewer missed calls",
    },
    {
      id: 2,
      name: "Liza",
      title: "Legal Assistant",
      subtitle: "Legal Support Agent",
      desc: "Analytical, precise, and trustworthy— liza is your AI legal assistant designed to support law firms, in-house counsels, and compliance teams. She helps draft documents, organize case files, and manage client communication efficiently while maintaining the highest confidentiality standards.",
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <MdOutlineHeadset className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Document Drafting",
        },
        {
          icon: (
            <FaCalendarCheck className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case File Organization",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Legal Research",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Client Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Confidentiality Monitoring",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case Summaries",
        },
      ],
      performance: [
        { label: "Reduces document preparation time", value: "50%" },
        { label: "Improves legal research efficiency", value: "40%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire" },
        {
          label: "Personality",
          value:
            "Intelligent, composed, and detail-oriented — communicates with clarity, professionalism, and confidentiality",
        },
      ],
      compliance: [
        "GDPR and CCPA compliant",
        "Legal data retention standards",
        "End-to-end encryption",
        "Role-based access control",
      ],
      image: liza2,
      video: lizaVideo2,
      images: [liza1, liza2, liza4, liza3],
      tag: "Quick support",
    },
    {
      id: 3,
      name: "Liza",

      title: "Sales Development Representative",
      subtitle: "Sales Agent",
      video: lizaVideo3,
      desc: "Confident, persuasive, and goal-driven — Liza is your AI sales representative fluent in Spanish, English. She connects with prospects naturally, qualifies leads, and schedules meetings that keep your pipeline growing across English-speaking markets.",
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Lead Qualification",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Demo Scheduling",
        },
        {
          icon: (
            <FiDatabase className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "  CRM Integration",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Campaign Engagement",
        },
      ],
      performance: [
        { label: "Improves outreach conversion", value: "43" },
        { label: "Shortens lead response time", value: "33%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire with headset" },
        {
          label: "Personality",
          value:
            "Confident, persuasive, and goal-driven — maintains natural conversations while expertly guiding prospects through the sales process",
        },
      ],
      compliance: [
        "GDPR compliant",
        "TCPA compliant",
        "Enterprise-grade data privacy",
      ],
      image: liza4,
      images: [liza1, liza2, liza4, liza3],
      tag: "Automated scheduling",
    },

    {
      id: 4,
      name: "Liza",
      title: "Care Nurse",
      subtitle: "Healthcare Assistant ",

      desc: "Compassionate, reliable, and precise — Liza is your AI healthcare assistant fluent in Arabic and English. She manages patient communication, appointment coordination, and medication reminders with empathy and professionalism, ensuring every interaction feels human and caring.",
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Appointments Scheduling",
        },
        {
          icon: (
            <FaRegBell className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Medication Reminders",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Patient Inquiries",
        },
        {
          icon: (
            <TbWorld className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Multilingual Support",
        },
      ],
      performance: [
        { label: "Improves patient adherence rates", value: "40%" },
        { label: "Reduces missed appointments", value: "35%" },
      ],
      appearance: [
        { label: "Outfit", value: "Medical scrubs with a headset" },
        {
          label: "Personality",
          value:
            "Calm, empathetic, and trustworthy — communicates with warmth and reassurance, ensuring patients feel supported and understood",
        },
      ],
      compliance: [
        "HIPAA compliant",
        "Global healthcare data privacy standards",
        "Secure patient information handling",
      ],

      image: liza3,
      images: [liza1, liza2, liza4, liza3],
      video: lizaVideo4,
      tag: "Better engagement",
    },

    {
      id: 5,
      name: "Diego",
      title: "AI Receptionist",
      subtitle: "Customer Care Assistant",
      image: diego11,
      video: diegoVideo1,
      desc: "A professional and friendly AI receptionist designed to manage calls, schedule meetings, and provide seamless first-point contact for businesses of all sizes.",
      images: [diego1, diego4, diego2, diego3],
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Call Routing",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Inquiry Handling",
        },
        {
          icon: (
            <FiUsers className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Coordination",
        },
      ],
      performance: [
        { label: "Missed call reduction", value: "45%" },
        { label: "Response time improvement", value: "35%" },
      ],
      appearance:
        "Smart office attire with professional headset. Polite, confident, and dependable — always maintaining a warm, professional tone.",
      compliance: [
        "Enterprise-grade data privacy",
        "Secure call handling",
        "Customer record management",
      ],
    },
    {
      id: 6,
      name: "Diego",
      title: " Legal Assistant",
      subtitle: "IT Support Agent",
      image: diego4,
      video: diegoVideo2,
      images: [diego1, diego4, diego2, diego3],
      desc: "Analytical, precise, and trustworthy — Diego is your AI legal assistant designed to support law firms, in-house counsels, and compliance teams. He helps draft documents, organize case files, and manage client communication efficiently while maintaining the highest confidentiality standards.",
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <MdOutlineHeadset className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Document Drafting",
        },
        {
          icon: (
            <FaCalendarCheck className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case File Organization",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Legal Research",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Client Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Confidentiality Monitoring",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case Summaries",
        },
      ],
      performance: [
        { label: "Reduces document preparation time", value: "50%" },
        { label: "Improves legal research efficiency", value: "40%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire" },
        {
          label: "Personality",
          value:
            "Intelligent, composed, and detail-oriented — communicates with clarity, professionalism, and confidentiality",
        },
      ],
      compliance: [
        "GDPR and CCPA compliant",
        "Legal data retention standards",
        "End-to-end encryption",
        "Role-based access control",
      ],
    },
    {
      id: 7,
      name: "Diego",
      title: "Sales Development Representative",
      subtitle: "Sales Agent",
      image: diego22,
      video: diegoVideo3,
      images: [diego1, diego4, diego2, diego3],
     
      desc: "Confident, persuasive, and goal-driven — Diego is your AI sales representative fluent in Spanish, English. He connects with prospects naturally, qualifies leads, and schedules meetings that keep your pipeline growing across English-speaking markets.",
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Lead Qualification",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Demo Scheduling",
        },
        {
          icon: (
            <FiDatabase className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "  CRM Integration",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Campaign Engagement",
        },
      ],
      performance: [
        { label: "Improves outreach conversion", value: "43" },
        { label: "Shortens lead response time", value: "33%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire with headset" },
        {
          label: "Personality",
          value:
            "Confident, persuasive, and goal-driven — maintains natural conversations while expertly guiding prospects through the sales process",
        },
      ],
      compliance: [
        "GDPR compliant",
        "TCPA compliant",
        "Enterprise-grade data privacy",
      ],
    },
    {
      id: 8,
      name: "Diego",
      images: [diego1, diego4, diego2, diego3],
      title: "Care Nurse",
      subtitle: "Healthcare Assistant",
      image: diego3,
      video: diegoVideo4,
      desc: "Compassionate, reliable, and precise — Diego is your AI healthcare assistant fluent in Arabic and English. He manages patient communication, appointment coordination, and medication reminders with empathy and professionalism, ensuring every interaction feels human and caring.",
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Appointments Scheduling",
        },
        {
          icon: (
            <FaRegBell className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Medication Reminders",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Patient Inquiries",
        },
        {
          icon: (
            <TbWorld className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Multilingual Support",
        },
      ],
      performance: [
        { label: "Improves patient adherence rates", value: "40%" },
        { label: "Reduces missed appointments", value: "35%" },
      ],
      appearance: [
        { label: "Outfit", value: "Medical scrubs with a headset" },
        {
          label: "Personality",
          value:
            "Calm, empathetic, and trustworthy — communicates with warmth and reassurance, ensuring patients feel supported and understood",
        },
      ],
      compliance: [
        "HIPAA compliant",
        "Global healthcare data privacy standards",
        "Secure patient information handling",
      ],
    },
    {
      id: 9,
      name: "Ethan",
      title: "AI Receptionist",
      subtitle: "Customer Care Assistant",
      image: ethan1,
      video: ethanVideo1,
      images: [ethan1, ethan2, ethan3, ethan4],
      desc: "A professional and friendly AI receptionist designed to manage calls, schedule meetings, and provide seamless first-point contact for businesses of all sizes.",

      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Call Routing",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Inquiry Handling",
        },
        {
          icon: (
            <FiUsers className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Coordination",
        },
      ],
      performance: [
        { label: "Reduces missed calls", value: "45%" },
        { label: "Response time improvement", value: "35%" },
      ],
      appearance:
        "Smart office attire with professional headset. Polite, confident, anddependable — always maintaining a warm, professional tone.",
      compliance: [
        "Enterprise-grade data privacy",
        "Secure call handling",
        "Customer data management",
      ],
    },

    {
      id: 10,
      name: "Ethan",
      title: "Legal Assistant",
      subtitle: "Legal Support Agent",
      image: ethan2,
      video: ethanVideo2,
      images: [ethan1, ethan2, ethan3, ethan4],
      desc: "Analytical, precise, and trustworthy — Ethan is your AI legal assistant designed to support law firms, in-house counsels, and compliance teams. He helps draft documents, organize case files, and manage client communication efficiently while maintaining the highest confidentiality standards.",
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <MdOutlineHeadset className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Document Drafting",
        },
        {
          icon: (
            <FaCalendarCheck className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case File Organization",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Legal Research",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Client Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Confidentiality Maintenance",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case Summaries",
        },
      ],
      performance: [
        { label: "Reduces document preparation time", value: "50%" },
        { label: "Improves legal research efficiency", value: "40%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire" },
        {
          label: "Personality",
          value:
            "Intelligent, composed, and detail-oriented — communicates with clarity, professionalism, and confidentiality",
        },
      ],
      compliance: [
        "GDPR and CCPA compliant",
        "Legal data retention standards",
        "End-to-end encryption",
        "Role-based access control",
      ],
    },
    {
      id: 11,
      name: "Ethan",
      title: "Sales Development Representative",
      subtitle: "Sales Agent",
      image: ethan3,
      video: ethanVideo3,
      images: [ethan1, ethan2, ethan3, ethan4],
      desc: "Confident, persuasive, and goal-driven — Ethan is your AI sales representative fluent in Spanish, English. He connects with prospects naturally, qualifies leads, and schedules meetings that keep your pipeline growing across English-speaking markets.",
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Lead Qualification",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Demo Scheduling",
        },
        {
          icon: (
            <FiDatabase className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "  CRM Integration",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Campaign Engagement",
        },
      ],
      performance: [
        { label: "Improves outreach conversion", value: "43" },
        { label: "Shortens lead response time", value: "33%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire with headset" },
        {
          label: "Personality",
          value:
            "Confident, persuasive, and goal-driven — maintains natural conversations while expertly guiding prospects through the sales process",
        },
      ],
      compliance: [
        "GDPR compliant",
        "TCPA compliant",
        "Enterprise-grade data privacy",
      ],
    },
    {
      id: 12,
      name: "Ethan",
      title: "Care Nurse",
      subtitle: "Healthcare Assistant",
      image: ethan4,
      video: ethanVideo4,
      images: [ethan1, ethan2, ethan3, ethan4],
      desc: "Compassionate, reliable, and precise — Ethan is your AI healthcare assistant fluent in Arabic and English. He manages patient communication, appointment coordination, and medication reminders with empathy and professionalism, ensuring every interaction feels human and caring.",
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Appointments Scheduling",
        },
        {
          icon: (
            <FaRegBell className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Medication Reminders",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Patient Inquiries",
        },
        {
          icon: (
            <TbWorld className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Multilingual Support",
        },
      ],
      performance: [
        { label: "Improves patient adherence rates", value: "40%" },
        { label: "Reduces missed appointments", value: "35%" },
      ],
      appearance: [
        { label: "Outfit", value: "Medical scrubs with a headset" },
        {
          label: "Personality",
          value:
            "Calm, empathetic, and trustworthy — communicates with warmth and reassurance, ensuring patients feel supported and understood",
        },
      ],
      compliance: [
        "HIPAA compliant",
        "Global healthcare data privacy standards",
        "Secure patient information handling",
      ],
    },
    {
      id: 13,
      name: "Amina",
      title: " AI Receptionist",
      subtitle: "Customer Care Assistant",
      image: amina1,
      video: aminaVideo1,
      images: [amina1, amina2, amina3, amina4],
      desc: "A professional and friendly AI receptionist designed to manage calls, schedule meetings, and provide seamless first-point contact for businesses of all sizes.",
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Call Routing",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Inquiry Handling",
        },
        {
          icon: (
            <FiUsers className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Coordination",
        },
      ],
      performance: [
        { label: "Reduces missed calls", value: "45%" },
        { label: "Response time improvement", value: "95%" },
      ],
      appearance:
        "Smart office attire with professional headset. Polite, confident, anddependable — always maintaining a warm, professional tone.",
      compliance: [
        "Enterprise-grade data privacy",
        "Secure call handling",
        "Customer data management",
      ],
    },

    {
      id: 14,
      name: "Amina",
      images: [amina1, amina2, amina3, amina4],
      title: "Legal Assistant",
      subtitle: "Legal Support Agent",
      image: amina2,
      video: aminaVideo2,
      desc: "Analytical, precise, and trustworthy — Amina is your AI legal assistant designed to support law firms, in-house counsels, and compliance teams. She helps draft documents, organize case files, and manage client communication efficiently while maintaining the highest confidentiality standards.",
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <MdOutlineHeadset className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Document Drafting",
        },
        {
          icon: (
            <FaCalendarCheck className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case File Organization",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Legal Research",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Client Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Confidentiality Monitoring",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case Summaries",
        },
      ],
      performance: [
        { label: "Reduces document preparation time", value: "50%" },
        { label: "Improves legal research efficiency", value: "40%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire" },
        {
          label: "Personality",
          value:
            "Intelligent, composed, and detail-oriented — communicates with clarity, professionalism, and confidentiality",
        },
      ],
      compliance: [
        "GDPR and CCPA compliant",
        "Legal data retention standards",
        "End-to-end encryption",
        "Role-based access control",
      ],
    },
    {
      id: 15,
      name: "Amina",
      title: "Sales Development Representative",
      subtitle: "Sales Agent ",
      image: amina3,
      images: [amina1, amina2, amina3, amina4],
      video: aminaVideo3,
      desc: "Confident, persuasive, and naturally engaging — Amina is your AI sales representative built to connect with prospects, qualify leads, and book meetings with authenticity and precision. She blends charm with strategic communication, making every outreach feel personal and impactful.",
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Lead Qualification",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Demo Scheduling",
        },
        {
          icon: (
            <FiDatabase className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "  CRM Integration",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Campaign Engagement",
        },
      ],
      performance: [
        { label: "Improves outreach conversion", value: "43" },
        { label: "Shortens lead response time", value: "33%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire with headset" },
        {
          label: "Personality",
          value:
            "Confident, persuasive, and goal-driven — maintains natural conversations while expertly guiding prospects through the sales process",
        },
      ],
      compliance: [
        "GDPR compliant",
        "TCPA compliant",
        "Enterprise-grade data privacy",
      ],
    },
    {
      id: 16,
      name: "Amina",
      title: "Care Nurse",
      subtitle: "Healthcare Assistant",
      image: amina4,
      video: aminaVideo4,
      images: [amina1, amina2, amina3, amina4],
      desc: "Compassionate, reliable, and precise — Amina is your AI healthcare assistant fluent in Arabic and English. She manages patient communication, appointment coordination, and medication reminders with empathy and professionalism, ensuring every interaction feels human and caring.",
      languages: ["Multilingual"],
      keyTasks: [
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Appointments Scheduling",
        },
        {
          icon: (
            <FaRegBell className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Medication Reminders",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Patient Inquiries",
        },
        {
          icon: (
            <TbWorld className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Multilingual Support",
        },
      ],
      performance: [
        { label: "Improves patient adherence rates", value: "40%" },
        { label: "Reduces missed appointments", value: "35%" },
      ],
      appearance: [
        { label: "Outfit", value: "Medical scrubs with a headset" },
        {
          label: "Personality",
          value:
            "Calm, empathetic, and trustworthy — communicates with warmth and reassurance, ensuring patients feel supported and understood",
        },
      ],
      compliance: [
        "HIPAA compliant",
        "Global healthcare data privacy standards",
        "Secure patient information handling",
      ],
    },

    // Continue same pattern for remaining 8 agents (5–12)
  ];

  // Group agents by role and store their thumbnails
  const roleThumbnailMap = agents.reduce((acc, agent) => {
    const role = (agent.title || "").trim().toLowerCase();
    if (!role) return acc;

    const thumbnail =
      agent.image ||
      agent.img ||
      (Array.isArray(agent.images) ? agent.images[0] : null);

    if (!thumbnail) return acc;

    if (!acc[role]) acc[role] = [];

    acc[role].push({
      id: agent.id,
      image: thumbnail,
      name: agent.name,
      title: agent.title,
    });

    return acc;
  }, {});

  // When clicking a role-based thumbnail
  const handleRoleThumbnailClick = (id) => {
    if (typeof id !== "number" || id === currentPopupId) return;

    setCurrentPopupId(id);
    window.dispatchEvent(new CustomEvent("openAgentPopup", { detail: id }));
  };

  // Current selected agent
  const agent = agents.find((a) => a.id === currentPopupId);

  if (!agent) {
    return (
      <div className="p-10 text-center text-gray-500">Agent not found.</div>
    );
  }

  // Reset loader / play-button when agent (video) changes — show loader only after short delay
  useEffect(() => {
    // hide loader by default; will show only if load takes longer than delay
    setLoadingVideo(false);
    setShowPlayButton(false);

    // clear any previous timer
    if (showLoaderTimerRef.current) {
      clearTimeout(showLoaderTimerRef.current);
      showLoaderTimerRef.current = null;
    }

    // start a short timer; show skeleton only when load is slow
    showLoaderTimerRef.current = setTimeout(() => {
      // safety: don't set state if unmounted
      if (!isUnmountedRef.current) setLoadingVideo(true);
      showLoaderTimerRef.current = null;
    }, 150); // 150ms threshold (adjustable)

    // Only reload video, do not force play
    const v = videoRef.current;
    if (v) {
      try {
        v.pause();
        v.load(); // reload with new src
        // Do not call play() here, let browser handle autoplay after loaded
      } catch (err) {
        // ignore
      }
    }

    return () => {
      if (showLoaderTimerRef.current) {
        clearTimeout(showLoaderTimerRef.current);
        showLoaderTimerRef.current = null;
      }
    };
  }, [agent?.video, currentPopupId]);

  // Preload current agent video (safe: runs after agents & agent exist)
  useEffect(() => {
    if (!agent?.video) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "video";
    link.href = agent.video;
    // optional: hint crossorigin if your videos require it
    // link.crossOrigin = "anonymous";

    document.head.appendChild(link);
    return () => {
      try {
        document.head.removeChild(link);
      } catch (e) {}
    };
  }, [agent?.video]);

  // When clicking a small image inside popup (cycle 4 images)
  const handleImageClick = (_agentId, index) => {
    const groupStart = Math.floor((agent.id - 1) / 4) * 4 + 1;
    const targetId = groupStart + index;

    setCurrentPopupId(targetId);
    window.dispatchEvent(
      new CustomEvent("openAgentPopup", { detail: targetId })
    );
  };

  // Thumbnails based on role OR agent images
  const role = (agent.title || "").trim().toLowerCase();
  const roleThumbnails = roleScopedThumbnails
    ? roleThumbnailMap[role] || []
    : [];

  const thumbnailItems = roleScopedThumbnails
    ? roleThumbnails.slice(0, 4).map((thumb) => ({
        key: thumb.id,
        image: thumb.image,
        alt: `${thumb.name} - ${thumb.title}`,
        handleClick: () => handleRoleThumbnailClick(thumb.id),
      }))
    : Array.isArray(agent.images)
    ? agent.images.slice(0, 4).map((img, index) => ({
        key: `${agent.id}-${index}`,
        image: img,
        alt: `${agent.name} option ${index + 1}`,
        handleClick: () => handleImageClick(agent.id, index),
      }))
    : [];

  return (
    <div
      className="
      relative
      bg-white rounded-2xl shadow-lg p-4 md:p-5 max-w-4xl w-full mx-auto mt-2
      overflow-hidden
      max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
      md:overflow-visible md:max-h-none
      transition-all duration-300
    "
    >
      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-gray-800 p-2 z-50 transition-all duration-300"
          aria-label="Close popup"
        >
          <IoMdClose className="w-4 h-4" />
        </button>
      )}

      {/* ✅ Changed flex order for mobile */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        {/* Image/video Section */}
        <div
          className="w-full md:w-[50%] flex justify-center items-center overflow-hidden rounded-xl bg-gray-50 order-2 md:order-1 relative"
          style={{ aspectRatio: "9/12" }}
        >
          {/* Modern Skeleton Shimmer Loader (Facebook/TikTok style) */}
          {loadingVideo && (
            <div className="absolute inset-0 rounded-xl overflow-hidden z-10 pointer-events-none flex items-center justify-center bg-gray-200">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-48 md:w-40 md:h-64 rounded-xl bg-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer" />
                </div>
              </div>
              <style>{`
                @keyframes shimmer {
                  0% { background-position: -400px 0; }
                  100% { background-position: 400px 0; }
                }
                .animate-shimmer {
                  background-size: 800px 100%;
                  animation: shimmer 1.4s linear infinite;
                }
              `}</style>
            </div>
          )}
          {/* {agent.video ? (
            <> */}
          <video
            key={agent.id} // force recreate when agent changes
            ref={videoRef}
            src={agent.video}
            autoPlay
            loop
            muted={isVideoMuted}
            playsInline
            controls={false}
            disablePictureInPicture
            controlsList="nodownload noplaybackrate nofullscreen"
            preload="auto"
            className={`w-full h-full object-cover object-center scale-105 transition-opacity duration-300 
    ${loadingVideo ? "opacity-0" : "opacity-100"}`}
            onLoadedData={() => {
              // cancel pending timer and hide loader
              if (showLoaderTimerRef.current) {
                clearTimeout(showLoaderTimerRef.current);
                showLoaderTimerRef.current = null;
              }
              setLoadingVideo(false);
            }}
            onCanPlay={() => {
              if (showLoaderTimerRef.current) {
                clearTimeout(showLoaderTimerRef.current);
                showLoaderTimerRef.current = null;
              }
              setLoadingVideo(false);
            }}
            onEnded={(e) => {
              e.target.pause();
              setTimeout(() => {
                try {
                  e.target.currentTime = Math.max(0, e.target.duration - 0.1);
                } catch (err) {}
              }, 50);
              setShowPlayButton(true);
            }}
          />

          {/* Play Button */}
          {showPlayButton && !loadingVideo && (
            <button
              onClick={() => {
                const v = videoRef.current;
                if (v) {
                  v.currentTime = 0.5;
                  v.play().catch(() => {});
                  setShowPlayButton(false);
                }
              }}
              className="absolute inset-0 z-40 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-all duration-300 group"
            >
              <div className="w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 sm:w-8 sm:h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}

          {/* Mute Button */}
          {!loadingVideo && (
            <button
              onClick={() => {
                const v = videoRef.current;
                if (v) {
                  const next = !isVideoMuted;
                  v.muted = next;
                  setIsVideoMuted(next);
                  if (v.paused) v.play().catch(() => {});
                }
              }}
              className="absolute bottom-3 left-3 z-50 px-3 py-1.5 text-xs rounded-full bg-black/60 text-white hover:bg-black/80 transition"
            >
              {isVideoMuted ? "Unmute" : "Mute"}
            </button>
          )}

          {/* </>
          ) : (
            <img
              src={agent.img || agent.image}
              alt={agent.title}
              className="w-full h-full object-contain md:object-cover object-center transition-transform duration-500 ease-in-out hover:scale-[1.03]"
            />
          ) */}

          {/* ✅ Final Version — Full width, no cut-off, perfect spacing */}
          {thumbnailItems.length > 0 && (
            <div className="absolute bottom-3 left-1/2-translate-x-1/2 flex gap-6 space-x-[-6px] sm:space-x-[-8px] z-30">
              {thumbnailItems.map((thumb) => (
                <img
                  key={thumb.key}
                  src={thumb.image}
                  alt={thumb.alt}
                  onClick={thumb.handleClick}
                  className="
          w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 
          rounded-full overflow-hidden border-2 border-white 
          shadow-md object-cover object-top cursor-pointer 
          hover:scale-110 hover:shadow-blue-300/60 
          transition-transform duration-300 ease-out mt-2
        "
                  style={{
                    objectPosition: "top",
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div
          className="w-full md:w-1/2 flex flex-col order-1 md:order-2"
          style={{ height: "500px" }}
        >
          {/* Fixed Header Section */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-between gap-2">
              <h2
                className="
      text-base sm:text-lg md:text-xl lg:text-2xl
      font-bold text-gray-900 text-left
      mt-2 sm:mt-4 md:mt-6 lg:-mt-3
    "
              >
                {agent.name} - {agent.title}
              </h2>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium text-gray-600">
                  Available 24/7
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-2">{agent.subtitle}</p>
            {/* Star Ratings */}
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-3.5 h-3.5" />
              ))}
            </div>
            {/* Tabs */}
            <div className="flex gap-5 mt-4 border-b border-gray-200 overflow-x-auto">
              <button
                onClick={() => setActiveTab("description")}
                className={`pb-2 text-xs font-medium transition-colors ${
                  activeTab === "description"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`pb-2 text-xs font-medium transition-colors ${
                  activeTab === "details"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                Details
              </button>
            </div>
          </div>
          {/* Scrollable Tab Content */}
          <div className="mt-4 space-y-4 flex-grow  text-xs">
            {activeTab === "description" ? (
              <>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                  {agent.desc}
                </p>

                <div>
                  <h4 className="font-medium text-gray-900">Languages</h4>
                  <p className="mt-1 text-gray-600">
                    {Array.isArray(agent.languages)
                      ? agent.languages.join(", ")
                      : agent.languages}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Key Tasks</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {agent.keyTasks.map((task, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-2 py-1 rounded-lg text-gray-800 font-medium hover:text-blue-600"
                      >
                        <div>{typeof task === "object" ? task.icon : null}</div>
                        <span>
                          {typeof task === "object" ? task.label : task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">Compliance</h4>
                  <ul className="mt-1 space-y-1 list-disc list-inside text-gray-500">
                    {Array.isArray(agent.compliance) ? (
                      agent.compliance.map((item, i) => (
                        <li key={i} className="flex items-center gap-1">
                          <GoDotFill className="w-3 h-3" />
                          {item}
                        </li>
                      ))
                    ) : (
                      <li className="flex items-center gap-1">
                        <GoDotFill className="w-3 h-3" />
                        {agent.compliance}
                      </li>
                    )}
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg px-2 mt-7 py-5">
                  <h4 className="font-medium text-gray-900">
                    Performance Impact
                  </h4>
                  <div className="space-y-1 mt-1 ">
                    {Array.isArray(agent.performance) ? (
                      agent.performance.map((perf, i) => (
                        <div
                          key={i}
                          className="flex justify-between text-gray-500"
                        >
                          <span>{perf.label}</span>
                          <span className="text-blue-600 font-medium">
                            {perf.value}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-700">{agent.performance}</div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Fixed Footer Buttons */}
          <div className="flex-shrink-0 flex flex-col sm:flex-row ">
            <button className="flex-1 border border-blue-400 text-blue-600 py-2.5 rounded-full text-xs font-medium hover:bg-blue-100">
              Schedule Demo with {agent.name}
            </button>
          </div>
        </div>
      </div>
      {/* CallScreen is opened globally by App.jsx via the "openCallScreen" event */}
    </div>
  );
}
