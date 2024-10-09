import { SvgIcon, SvgIconProps } from '@mui/material';

const BulbIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M10 2C7.79 2 6 3.79 6 6c0 2.11 1.31 3.88 3.11 4.62C9.4 11.39 9 12.13 9 13h6c0-.87-.4-1.61-1.11-2.38C12.69 9.88 14 8.11 14 6c0-2.21-1.79-4-4-4zm1 15h-2v2h2v-2zm2 0h-2v2h2v-2z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default BulbIcon;
