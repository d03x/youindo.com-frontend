import {
  MenuItemLink as MenuItemFluent,
  Text,
  type MenuItemProps,
} from "@fluentui/react-components";
export const MenuItem = ({
  children,
  href,
  icon: Icon,
  ...props
}: {
  href: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  props?: any;
} & MenuItemProps) => {
  return (
    <MenuItemFluent
      href={href}
      content={
        <div className={`flex items-center gap-3`}>
          {Icon}
          <Text>{children}</Text>
        </div>
      }
      {...props}
    />
  );
};
