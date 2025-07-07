import { Button, type ButtonProps } from "@fluentui/react-components";
import {MicRegular} from "@fluentui/react-icons"
const MicButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      appearance="transparent"
      icon={<MicRegular />}
      size="small"
    />
  );
};
export default MicButton;