import { Divider, makeStyles, tokens } from "@fluentui/react-components";
import { Link } from "react-router";
const useStyles = makeStyles({
  footerLink: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    textDecoration: "none",
    ":hover": {
      color: tokens.colorBrandForegroundLink,
      textDecoration: "underline",
    },
    marginTop: tokens.spacingVerticalXS,
  },
  copyright: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    marginTop: tokens.spacingVerticalM,
  },
});

export default function SidebarFooter() {
  const footerLinks = [
    { href: "/about", label: "Tentang saya" },
    { href: "/faq", label: "FAQs" },
    { href: "/terms", label: "Term Of Services" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/contact", label: "Contact Us" },
  ];
  const styles = useStyles();
  return (
    <footer>
      <Divider />

      <div className="flex gap-x-2.5 flex-wrap mt-2">
        {footerLinks.map((link) => (
          <Link key={link.href} to={link.href} className={styles.footerLink}>
            {link.label}
          </Link>
        ))}
      </div>

      <div className={styles.copyright}>
        Copyright &copy; {new Date().getFullYear()} dadanhidyt
      </div>
    </footer>
  );
}
