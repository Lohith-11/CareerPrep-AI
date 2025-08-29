import React, { useState } from "react";
import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { HiSparkles } from "react-icons/hi2";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { RiRobot3Fill } from "react-icons/ri";

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};
  return (
    <>
      <div className="w-full min-h-full relative overflow-hidden">
        {/* Modern background with animated gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl animate-float1"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-r from-sky-400/20 to-cyan-500/20 rounded-full blur-3xl animate-float2"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-float3"></div>

        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          {/* header */}
          <header className="flex justify-between items-center mb-16">
            <div className="text-xl text-black font-bold flex items-center">
              <RiRobot3Fill size={29}/>CareerPrep AI
            </div>
            <button
              className="bg-gradient-to-r from-indigo-600 to-sky-500 text-sm font-semibold text-white px-8 py-3 rounded-full hover:from-indigo-700 hover:to-sky-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-indigo-500/30 transform hover:scale-105"
              onClick={() => setOpenAuthModal(true)}
            >
              Access Platform
            </button>
          </header>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center justify-left mb-6">
                <div className="flex items-center gap-2 text-[13px] text-indigo-700 font-semibold bg-indigo-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200">
                  <HiSparkles className="text-indigo-500" /> Next-Gen AI
                  Technology
                </div>
              </div>
              <h1 className="text-6xl font-bold mb-8 leading-tight font-['Poppins']">
                <span className="text-slate-800">Master Interviews with</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 animate-gradient bg-[length:400%_400%]">
                  Intelligent Coaching
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Transform your interview preparation with our sophisticated AI
                platform. Experience adaptive learning, strategic question
                curation, and deep conceptual mastery—designed for ambitious
                professionals who demand excellence.
              </p>
              <button
                className="bg-gradient-to-r from-slate-800 to-slate-700 text-sm font-semibold text-white px-8 py-4 rounded-full hover:from-slate-700 hover:to-slate-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 glow-effect"
                onClick={handleCTA}
              >
                Begin Your Transformation
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-2xl blur-xl transform rotate-6"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                  <img
                    src={HERO_IMG}
                    alt="AI Interview Platform Dashboard"
                    className="w-full rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full relative z-10">
        {/* Features Section */}
        <div className="w-full min-h-full bg-gradient-to-b from-white to-slate-50 py-24">
          <div className="container mx-auto px-4">
            <section className="text-center mb-20">
              <h2 className="text-4xl font-bold text-slate-800 mb-6 font-['Poppins']">
                Revolutionary Features for Modern Professionals
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover the sophisticated capabilities that set our platform
                apart from conventional interview preparation tools.
              </p>
            </section>

            <div className="flex flex-col items-center gap-12">
              {/* First 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {APP_FEATURES.slice(0, 3).map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-indigo-200 transform hover:-translate-y-2 ${
                      index === 1 ? "md:scale-105" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                        <span className="text-white font-bold text-lg">
                          {feature.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-slate-800 font-['Poppins']">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Last 2 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                {APP_FEATURES.slice(3).map((feature) => (
                  <div
                    key={feature.id}
                    className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-indigo-200 transform hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                        <span className="text-white font-bold text-lg">
                          {feature.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-slate-800 font-['Poppins']">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modern Footer */}
        <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-center py-8">
          <div className="container mx-auto px-4">
            <p className="text-slate-300 text-sm">
              Crafted with precision by the{" "}
              <span className="text-indigo-400 font-semibold">
                InterviewMaster
              </span>{" "}
              team
            </p>
          </div>
        </footer>
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};
export default LandingPage;
