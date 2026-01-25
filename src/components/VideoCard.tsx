"use client";

import { PlayIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import type { Video } from "@/data/videos";

export default function VideoCard({
  video,
  index = 0,
}: {
  video: Video;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-video bg-black">
        <video
          src={video.src}
          poster={video.poster}
          controls
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <track kind="captions" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
            <PlayIcon size={28} weight="fill" className="text-primary ml-1" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
        <p className="text-muted text-sm">{video.description}</p>
      </div>
    </motion.div>
  );
}
