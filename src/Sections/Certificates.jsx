import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../constants/motion';
import { achievements } from '../constants/constants';

const CertificateCard = ({ certificate, index }) => {
  return (
    <motion.div
      variants={textVariant(index * 0.2)}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className="relative p-6 shadow-lg glass w-full sm:max-w-[350px] z-20 glass rounded-xl bg-[#3D2817]/80 border border-[#C97D60]/30 backdrop-blur-sm hover:border-[#D4A574]/50 transition-all"
    >
      <div>
        {certificate.image && (
          <motion.img
            src={certificate.image}
            alt={certificate.title}
            className="w-full rounded-lg mb-4 h-[200px] object-cover transition-all"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}
        <motion.h3 className="text-xl font-semibold text-textdark2 drop-shadow-xl mb-2">
          {certificate.title}
        </motion.h3>
        <motion.h4 className="text-md font-medium mb-3 text-[#D4A574] drop-shadow-xl">
          {certificate.subtitle}
        </motion.h4>
        {certificate.text && (
          <motion.p className="text-textdark2 mb-3 text-sm">
            {certificate.text}
          </motion.p>
        )}
        {certificate.date && (
          <motion.p className="text-textdark2 mb-3 text-sm text-[#7A8471]">
            {certificate.date}
          </motion.p>
        )}
        {certificate.link && (
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C97D60] hover:text-[#D4A574] text-sm font-medium"
          >
            View Certificate →
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <motion.div
      variants={textVariant()}
      className="bg-[#2C1810] rounded-[50px] p-8 sm:p-20 min-h-screen relative overflow-hidden"
    >
      <motion.h1
        variants={textVariant(0.2)}
        className="text-textdark1 text-4xl sm:text-8xl font-semibold text-center p-8 z-20 relative"
      >
        CERTIFICATES
      </motion.h1>

      {/* Background decorative elements */}
      <motion.div
        variants={textVariant(1.3)}
        className="bg-gradient-to-b from-[#D4A574] to-transparent w-[15rem] sm:w-[25rem] h-[15rem] sm:h-[25rem] absolute top-[30rem] sm:top-[30rem] -right-10 sm:-right-10 z-10"
        style={{
          clipPath:
            'polygon(33% 0%, 66% 0%, 100% 33%, 100% 66%, 66% 100%, 33% 100%, 0% 66%, 0% 33%, 33% 0%)',
        }}
      ></motion.div>
      <motion.div
        variants={textVariant(1.5)}
        className="bg-gradient-to-b from-[#7A8471] to-transparent w-[25rem] sm:w-[30rem] h-[25rem] sm:h-[30rem] absolute top-[20rem] sm:top-40 -left-28 sm:-left-20 z-10"
        style={{
          clipPath:
            'polygon(33% 0%, 66% 0%, 100% 33%, 100% 66%, 67% 100%, 33% 100%, 0% 66%, 0% 33%, 33% 0%)',
        }}
      ></motion.div>
      <motion.div
        variants={textVariant(1.7)}
        className="bg-gradient-to-b from-[#7A8471] to-transparent w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] absolute bottom-[30rem] sm:bottom-36 -right-32 sm:-right-0 z-10"
        style={{
          clipPath:
            'polygon(33% 0%, 66% 0%, 100% 33%, 100% 66%, 66% 100%, 33% 100%, 0% 66%, 0% 33%, 33% 0%)',
        }}
      ></motion.div>
      <motion.div
        variants={textVariant(1.9)}
        className="bg-gradient-to-b from-[#C9A9A6] to-transparent w-[15rem] sm:w-[25rem] h-[15rem] sm:h-[25rem] absolute bottom-[20rem] sm:bottom-2 -right-28 sm:right-80 z-10"
        style={{
          clipPath:
            'polygon(33% 0%, 66% 0%, 100% 33%, 100% 66%, 66% 100%, 33% 100%, 0% 66%, 0% 33%, 33% 0%)',
        }}
      ></motion.div>

      {/* Certificates Grid */}
      <motion.div className="flex flex-wrap justify-center gap-8 sm:gap-12 z-20 relative mt-8">
        {achievements && achievements.length > 0 ? (
          achievements.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} index={index} />
          ))
        ) : (
          <p className="text-textdark2 text-xl">No certificates available</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Certificates, 'certificates');

