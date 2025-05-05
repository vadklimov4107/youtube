import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, type LucideIcon } from 'lucide-react';

import type { IVideo } from '@/types/video.types';
import { PAGE } from '@/config/public-page';
import { transformViews } from '@/utils/transform-views';
import { transformDate } from '@/utils/transform-data';

interface Props {
  video: IVideo;
  Icon?: LucideIcon;
}

export function VideoItems({ video, Icon }: Props) {
  return (
    <div>
      <div>
        <Link href={PAGE.VIDEO(video.slug)}>
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            width={250}
            height={140}
          />
        </Link>
        <Link href={PAGE.CHANNEL(video.channel.slug)}>
          <Image
            src={video.channel.avatarUrl}
            alt={video.channel.name}
            width={30}
            height={30}
          />
        </Link>
      </div>
      <div>
        {Icon && <Icon />}
        <span>{transformViews(video.viewsCount)}</span>
      </div>
      <div>
        <span>{transformDate(video.createdAt)}</span>
      </div>
      <div>{video.title}</div>
      <div>
        <span>{video.channel.name}</span>
        <span><BadgeCheck className='text-green-500'/></span>
      </div>
    </div>
  );
}
