import Avatar from '@mui/material/Avatar'

type Props = {
  name: string
  src: string
}

export default function ImageAvatars({ name, src }: Props) {
  return <Avatar alt={name} src={src} />
}
