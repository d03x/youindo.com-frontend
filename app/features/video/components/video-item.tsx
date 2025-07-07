import { Link } from "react-router";
import styles from "./styles/video-item.module.scss";
import { Badge, Button } from "@fluentui/react-components";
import { Dot } from "lucide-react";
import {
  MoreVertical24Filled,
  Play16Filled,
  Play20Filled,
  Play20Regular,
} from "@fluentui/react-icons";
const VideoItem = () => {
  return (
    <Link to={""} className={styles.video_item}>
      <div className={styles.thumbnail}>
        <div className={styles.thumbnail__media}>
          <img src="https://rutube.ru/api/video/preview/487b320e973104a481368466b3d8fd6b/?width=300" />
        </div>
        <div className={styles.thumbnail__info}>
          <div className="">
            <Badge color="danger">Live</Badge>
          </div>
          <div className="">
            <Badge shape="rounded" color="subtle">
              1:18:00
            </Badge>
          </div>
        </div>
      </div>

      <div className={styles.video_item__info}>
        <h2 className={styles.video_item__info__title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          quidem.
        </h2>
        <div className={styles.video_item__footer}>
          <div className={styles.channel_info}>
            <img
              src="https://yt3.ggpht.com/gB9L0xSZjS8mRO3tpV5BvaVKgStbQCKQl97dqnUcvdEB7NQYbLMxN2RMocqZepv-VBsjFSnU=s68-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div className={styles.channel_info__right}>
              <ul>
                <li className={styles.channel_info__channel_name}>
                  Arul.eka.putra
                </li>
                <li className={styles.channel_info__name}>
                  <span>
                    <Play16Filled />
                    10jt
                  </span>
                  &bull;
                  <span>1 jam lalu</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Button appearance="subtle" icon={<MoreVertical24Filled />} />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default VideoItem;
