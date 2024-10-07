export interface TabProps {
  id: string;
  name: string;
  onPress?: () => void | undefined;
  className?: string | undefined;
}
export interface TabsProps {
  tabs: TabProps[];
  active: string;
}
