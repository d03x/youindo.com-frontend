import {
  Field,
  SearchBox as BaseSearchBox,
  type SearchBoxProps,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import MicButton from "./MicButton";
const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
  },
  filledLighter: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
  },
  filledLighterLabel: {
    color: tokens.colorNeutralForegroundInverted2,
  },
  filledDarker: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
  },
  filledDarkerLabel: {
    color: tokens.colorNeutralForegroundInverted2,
  },
  fieldWrapper: {
    padding: `${tokens.spacingVerticalMNudge} ${tokens.spacingHorizontalMNudge}`,
  },
});
export default function SearchBox(props: SearchBoxProps) {
  const styles = useStyles();
  return (
    <Field className={styles.fieldWrapper}>
      <BaseSearchBox contentAfter={<MicButton/>} appearance="filled-darker" {...props} />
    </Field>
  );
}
