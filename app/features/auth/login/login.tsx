import {
  Button,
  Card,
  CardHeader,
  CardPreview,
  CardFooter,
  Field,
  Input,
  Text,
  Title1,
  makeStyles,
  shorthands,
  tokens,
  Body1,
  Caption1,
  Link as FluentLink,
} from "@fluentui/react-components";
import { Link } from "react-router";
import { LockClosedRegular, MailRegular } from "@fluentui/react-icons";
import { Facebook } from "lucide-react";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: tokens.colorNeutralBackground3,
  },
  card: {
    width: "100%",
    maxWidth: "440px",
    ...shorthands.margin(tokens.spacingVerticalXL),
    boxShadow: tokens.shadow16,
  },
  header: {
    textAlign: "center",
    flexDirection: "column",
    ...shorthands.margin(tokens.spacingVerticalXXL, 0),
  },
  inputIcon: {
    color: tokens.colorNeutralForeground3,
    marginRight: tokens.spacingHorizontalS,
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingVerticalS),
  },
  divider: {
    width: "100%",
    height: "1px",
    backgroundColor: tokens.colorNeutralStroke2,
    ...shorthands.margin(tokens.spacingVerticalM, 0),
  },
  socialButtons: {
    display: "flex",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
});

export default function Login() {
  const styles = useStyles();

  return (
    <div>
      <Card className={"max-w-sm mt-6 mx-auto"}>
        <CardHeader
          header={
            <div className="grid p-3 pb-0">
              <Title1>Welcome back</Title1>
              <Body1>Sign in to your account</Body1>
            </div>
          }
        />

        <CardPreview>
          <div className="p-6">
            <Field label="Email address" required>
              <Input
                contentBefore={<MailRegular className={styles.inputIcon} />}
                placeholder="Enter your email"
                appearance="outline"
              />
            </Field>

            <Field
              label="Password"
              required
              style={{ marginTop: tokens.spacingVerticalL }}
            >
              <Input
                contentBefore={
                  <LockClosedRegular className={styles.inputIcon} />
                }
                type="password"
                placeholder="Enter your password"
                appearance="outline"
              />
            </Field>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: tokens.spacingVerticalM,
              }}
            >
              <FluentLink appearance="subtle">Forgot password?</FluentLink>
              <Button appearance="primary" style={{ minWidth: "120px" }}>
                Sign in
              </Button>
            </div>
          </div>
        </CardPreview>

        <div className={styles.divider} />

        <CardFooter className={styles.footer}>
          <Caption1>Don't have an account?</Caption1>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button appearance="outline">Create account</Button>
          </Link>

          <div className={styles.divider} />

          <Caption1>Or continue with</Caption1>
          <div className={styles.socialButtons}>
            <Button appearance="outline" icon={<Facebook />} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
