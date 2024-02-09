import { SocialMediaType } from '@app/types/casts/cast';
import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import {useRouter} from "next/router";

type SocialMediaProps = {
  links?: SocialMediaType;
}

export const SocialMedia = ({links}:SocialMediaProps) => {
  const {push} = useRouter();
  const handleInstagramClick = () => {
    push(`https://www.instagram.com/${links?.instagram_id}`)
  }
  const handleTwitterClick = () => {
    push(`https://twitter.com/${links?.instagram_id}`)
  }
  return (
    <div className="flex gap-8">
      {links?.instagram_id && <InstagramLogoIcon onClick={handleInstagramClick} className="cursor-pointer" width={30} height={30} />}
      {links?.twitter_id && <TwitterLogoIcon onClick={handleTwitterClick} className="cursor-pointer" width={30} height={30} />}
    </div>
  )
}