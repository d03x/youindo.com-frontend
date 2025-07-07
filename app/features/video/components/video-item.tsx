import { Link } from "react-router";
import styles from "./styles/video-item.module.scss";
import { Badge, Button } from "@fluentui/react-components";
import { CheckCircle, CheckCircle2, Dot, Radio, Verified, X, XCircle } from "lucide-react";
import {
  Checkmark24Regular,
  CheckmarkCircle12Filled,
  CheckmarkCircle16Color,
  CheckmarkCircle16Filled,
  EmojiLaugh16Filled,
  EmojiSmileSlight24Filled,
  Live20Filled,
  MoreCircle24Filled,
  MoreCircle24Regular,
  MoreVertical24Filled,
  Play16Filled,
  Play20Filled,
  Play20Regular,
} from "@fluentui/react-icons";
import { motion } from "motion/react";
import classNames from "classnames";
const VideoItem = () => {
  return (
    <Link to={""} className={styles.video_item}>
      <div className={styles.video_item}>
        <div className={classNames(styles.video_item__thumbnail,'group')}>
          <img
            src={
              "https://rutube.ru/api/video/preview/9c39ed2e2d5eb3792f728a3c1cb56577/?width=300"
            }
          />
          <div className="absolute animate-pulse flex items-center gap-1 top-0 left-0 bg-red-500/60 backdrop-blurl font-thin px-3 rounded-2xl mx-2 mt-2 text-white">
            <Radio size={16} />
            <span> Live</span>
          </div>
          <motion.div
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.8 }}
            className="absolute group-hover:opacity-100 transition-all duration-150 opacity-0  flex items-center gap-1 top-0 right-0 bg-black/60 backdrop-blur font-thin p-2 rounded-full mx-2 mt-2 text-white"
          >
            <X size={24} />
          </motion.div>
          <div className="absolute bottom-0 right-0 bg-black/60 backdrop-blur-xl text-sm font-semibold py-0.5 px-3 rounded-2xl mx-3 mb-2 text-white">
            1.18.00
          </div>
        </div>

        <div className={styles.video_item__meta}>
          <div
            className={classNames(
              `aspect-square w-[36px] rounded-full overflow-hidden border-2 border-white ring-offset-1 ring-2 ring-red-500`
            )}
          >
            <img src="https://yt3.ggpht.com/8t5r0led93vMBlXgM4GTuRL11ZySfPsjuPfVAqYNSbDJzT_lDiGhROgUcYwpbODag3gWHY1hqw=s68-c-k-c0x00ffffff-no-rj" />
          </div>
          <div>
            <div className={styles.video_item__title}>
              <h1
                className={classNames(
                  `text-lg mb-1.5 tracking-relaxed line-clamp-2 leading-tight font-bold`
                )}
              >
                Mutant Pilihan Ovie Bisa Saling Melengkapi!? - Mutant Mencari
                Jodoh Repellendus
              </h1>
              <motion.button
                whileTap={{
                  scale: 0.8,
                }}
              >
                <MoreCircle24Regular />
              </motion.button>
            </div>

            <div className="text-md flex items-center space-x-1">
              <span>Dadan Hidayat.</span>
              <CheckmarkCircle16Filled color="#0097b2" />
            </div>
            <div className="text-xs space-x-1 font-thin">
              <span>1,9 jt x ditonton</span>
              <span>&bull;</span>
              <span>17 Jam yang lalu</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default VideoItem;
