import { FunctionComponent } from "react";

type SegmentedControlProps = {
  options: { key: string; title: string }[];
  selected: number;
  onSelect: (selected: number) => void;
  name?: string;
};

export type SegmentedControlComponent = FunctionComponent<SegmentedControlProps>;
